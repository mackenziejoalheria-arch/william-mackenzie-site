'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Gema, formatPriceBRL } from '@/lib/gemas';
import { PRODUCT_CATEGORIES, ProductCategory, normalizeCategory } from '@/lib/catalog';

import { ContentLocale } from '@/lib/languages';

const LANGS: { code: ContentLocale; label: string }[] = [
    { code: 'pt', label: 'Português (obrigatório)' },
    { code: 'en', label: 'Inglês' },
    { code: 'es', label: 'Espanhol' },
    { code: 'de', label: 'Alemão' },
    { code: 'fr', label: 'Francês' },
    { code: 'ar', label: 'Árabe' },
];

const CATEGORY_LABELS: Record<ProductCategory, string> = {
    pedras: 'Pedras preciosas',
    aliancas: 'Alianças',
    noivado: 'Anéis de noivado',
    formatura: 'Anéis de formatura',
};

const emptyGema: Gema = {
    slug: '',
    category: 'pedras',
    images: [],
    priceCents: 0,
    available: true,
    name: { pt: '' },
    subtitle: { pt: '' },
    description: { pt: [] },
};

const inputClass =
    'w-full border border-schubart-3 bg-white px-3 py-2.5 font-epicene-text text-[0.95rem] text-schubart-1 outline-none focus:border-schubart-1 transition-colors';
const labelClass =
    'block font-epicene-text text-[0.7rem] uppercase tracking-[0.18em] text-schubart-2 mb-1.5';
const buttonPrimary =
    'px-8 py-3 bg-schubart-1 text-schubart-6 border border-schubart-1 font-pp-hatton uppercase tracking-widest text-[0.72rem] hover:bg-transparent hover:text-schubart-1 transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed';
const buttonSecondary =
    'px-6 py-3 bg-transparent text-schubart-1 border border-schubart-3 font-epicene-text uppercase tracking-[0.18em] text-[0.7rem] hover:border-schubart-1 transition-all duration-300 cursor-pointer';

function slugify(value: string): string {
    return value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function parasToText(paras?: string[]): string {
    return (paras ?? []).join('\n\n');
}

function textToParas(text: string): string[] {
    return text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean);
}

export default function AdminClient() {
    const [checked, setChecked] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const [gemas, setGemas] = useState<Gema[]>([]);
    const [editing, setEditing] = useState<Gema | null>(null);
    const [isNew, setIsNew] = useState(false);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [priceText, setPriceText] = useState('');
    const photoInputRef = useRef<HTMLInputElement>(null);
    const videoInputRef = useRef<HTMLInputElement>(null);

    const loadGemas = useCallback(async () => {
        const res = await fetch('/api/admin/gemas/');
        if (res.status === 401) {
            setLoggedIn(false);
            return;
        }
        setGemas(await res.json());
    }, []);

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/admin/login/');
            const data = await res.json();
            setLoggedIn(data.loggedIn);
            setChecked(true);
            if (data.loggedIn) loadGemas();
        })();
    }, [loadGemas]);

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setLoginError('');
        const res = await fetch('/api/admin/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password }),
        });
        if (!res.ok) {
            setLoginError('Senha incorreta.');
            return;
        }
        setLoggedIn(true);
        setPassword('');
        loadGemas();
    }

    async function handleLogout() {
        await fetch('/api/admin/login/', { method: 'DELETE' });
        setLoggedIn(false);
    }

    function startNew() {
        setEditing(structuredClone(emptyGema));
        setPriceText('');
        setIsNew(true);
        setFeedback('');
    }

    function startEdit(gema: Gema) {
        setEditing(structuredClone(gema));
        setPriceText((gema.priceCents / 100).toFixed(2).replace('.', ','));
        setIsNew(false);
        setFeedback('');
    }

    async function handleDelete(slug: string) {
        if (!confirm(`Excluir a gema "${slug}"? Essa ação não pode ser desfeita.`)) return;
        await fetch(`/api/admin/gemas/?slug=${encodeURIComponent(slug)}`, { method: 'DELETE' });
        loadGemas();
    }

    async function toggleAvailable(gema: Gema) {
        await fetch('/api/admin/gemas/', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...gema, available: !gema.available }),
        });
        loadGemas();
    }

    async function uploadFiles(files: FileList, kind: 'photos' | 'video') {
        if (!editing || files.length === 0) return;
        setUploading(true);
        setFeedback('');
        try {
            const formData = new FormData();
            Array.from(files).forEach((f) => formData.append('files', f));
            const res = await fetch('/api/admin/upload/', { method: 'POST', body: formData });
            const data = await res.json();
            if (!res.ok) {
                setFeedback(data.error ?? 'Erro no upload.');
                return;
            }
            if (kind === 'photos') {
                setEditing({ ...editing, images: [...editing.images, ...data.paths] });
            } else {
                setEditing({ ...editing, video: data.paths[0] });
            }
        } finally {
            setUploading(false);
        }
    }

    function moveImage(index: number, direction: -1 | 1) {
        if (!editing) return;
        const images = [...editing.images];
        const target = index + direction;
        if (target < 0 || target >= images.length) return;
        [images[index], images[target]] = [images[target], images[index]];
        setEditing({ ...editing, images });
    }

    async function handleSave(e: React.FormEvent) {
        e.preventDefault();
        if (!editing) return;

        const priceCents = Math.round(
            parseFloat(priceText.replace(/\./g, '').replace(',', '.')) * 100,
        );
    const payload: Gema = {
            ...editing,
            slug: isNew ? slugify(editing.slug || editing.name.pt) : editing.slug,
            category: editing.category ?? 'pedras',
            priceCents: Number.isFinite(priceCents) ? priceCents : 0,
        };

        setSaving(true);
        setFeedback('');
        try {
            const res = await fetch('/api/admin/gemas/', {
                method: isNew ? 'POST' : 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (!res.ok) {
                setFeedback(data.error ?? 'Erro ao salvar.');
                return;
            }
            setEditing(null);
            loadGemas();
        } finally {
            setSaving(false);
        }
    }

    if (!checked) {
        return (
            <main className="min-h-screen bg-schubart-6 flex items-center justify-center">
                <p className="font-epicene-text text-schubart-2">Carregando...</p>
            </main>
        );
    }

    /* ---------- LOGIN ---------- */
    if (!loggedIn) {
        return (
            <main className="min-h-screen bg-schubart-6 flex items-center justify-center px-5">
                <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-8 md:p-10 shadow-[0_18px_60px_rgba(26,26,26,0.08)] ring-1 ring-schubart-3/60">
                    <h1 className="font-pp-hatton text-headlines-xs uppercase tracking-[0.2em] text-schubart-1 mb-2 text-center">
                        Painel Admin
                    </h1>
                    <p className="font-epicene-text text-[0.85rem] text-schubart-2 mb-8 text-center">
                        Gestão de pedras preciosas
                    </p>
                    <label className={labelClass}>Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={inputClass}
                        autoFocus
                    />
                    {loginError && (
                        <p className="font-epicene-text text-[0.85rem] text-red-700 mt-3">{loginError}</p>
                    )}
                    <button type="submit" className={`${buttonPrimary} w-full mt-6`}>
                        Entrar
                    </button>
                </form>
            </main>
        );
    }

    /* ---------- FORMULÁRIO ---------- */
    if (editing) {
        return (
            <main className="min-h-screen bg-schubart-6 pt-28 pb-24 px-5">
                <form onSubmit={handleSave} className="max-w-3xl mx-auto space-y-10">
                    <div className="flex items-center justify-between">
                        <h1 className="font-pp-hatton text-headlines-xs uppercase tracking-[0.15em] text-schubart-1">
                            {isNew ? 'Nova Gema' : `Editar: ${editing.name.pt}`}
                        </h1>
                        <button type="button" onClick={() => setEditing(null)} className={buttonSecondary}>
                            ← Voltar
                        </button>
                    </div>

                    {/* DADOS BÁSICOS */}
                    <section className="bg-white p-6 md:p-8 ring-1 ring-schubart-3/60 space-y-5">
                        <h2 className="font-epicene-text text-[0.75rem] uppercase tracking-[0.2em] text-schubart-5">
                            Dados básicos
                        </h2>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className={labelClass}>Nome (PT) *</label>
                                <input
                                    className={inputClass}
                                    value={editing.name.pt}
                                    onChange={(e) => {
                                        const name = { ...editing.name, pt: e.target.value };
                                        setEditing({
                                            ...editing,
                                            name,
                                            slug: isNew ? slugify(e.target.value) : editing.slug,
                                        });
                                    }}
                                    required
                                />
                            </div>
                            <div>
                                <label className={labelClass}>Slug (endereço da página)</label>
                                <input
                                    className={`${inputClass} ${!isNew ? 'opacity-50' : ''}`}
                                    value={editing.slug}
                                    onChange={(e) => setEditing({ ...editing, slug: slugify(e.target.value) })}
                                    disabled={!isNew}
                                />
                            </div>
                            <div>
                                <label className={labelClass}>Preço (R$) *</label>
                                <input
                                    className={inputClass}
                                    value={priceText}
                                    onChange={(e) => setPriceText(e.target.value)}
                                    placeholder="1.800,00"
                                    inputMode="decimal"
                                    required
                                />
                            </div>
                            <div>
                                <label className={labelClass}>Categoria *</label>
                                <select
                                    className={inputClass}
                                    value={editing.category ?? 'pedras'}
                                    onChange={(e) =>
                                        setEditing({
                                            ...editing,
                                            category: e.target.value as ProductCategory,
                                        })
                                    }
                                >
                                    {PRODUCT_CATEGORIES.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {CATEGORY_LABELS[cat]}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-end pb-2">
                                <label className="flex items-center gap-3 cursor-pointer font-epicene-text text-[0.9rem] text-schubart-1">
                                    <input
                                        type="checkbox"
                                        checked={editing.available}
                                        onChange={(e) => setEditing({ ...editing, available: e.target.checked })}
                                        className="w-4 h-4 accent-schubart-1"
                                    />
                                    Disponível para venda
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* FOTOS */}
                    <section className="bg-white p-6 md:p-8 ring-1 ring-schubart-3/60 space-y-5">
                        <h2 className="font-epicene-text text-[0.75rem] uppercase tracking-[0.2em] text-schubart-5">
                            Fotos (a primeira é a capa)
                        </h2>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                            {editing.images.map((img, i) => (
                                <div key={img} className="relative group">
                                    <div className="relative aspect-square overflow-hidden ring-1 ring-schubart-3/60 bg-schubart-6">
                                        <Image src={img} alt="" fill className="object-cover" sizes="150px" />
                                        {i === 0 && (
                                            <span className="absolute top-1 left-1 bg-schubart-1 text-schubart-6 font-epicene-text text-[0.55rem] uppercase tracking-wider px-1.5 py-0.5">
                                                Capa
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex justify-center gap-1 mt-1.5">
                                        <button type="button" onClick={() => moveImage(i, -1)} title="Mover para a esquerda"
                                            className="px-2 py-0.5 text-[0.7rem] border border-schubart-3 hover:border-schubart-1 cursor-pointer">←</button>
                                        <button type="button"
                                            onClick={() => setEditing({ ...editing, images: editing.images.filter((_, j) => j !== i) })}
                                            title="Remover"
                                            className="px-2 py-0.5 text-[0.7rem] border border-schubart-3 hover:border-red-700 hover:text-red-700 cursor-pointer">✕</button>
                                        <button type="button" onClick={() => moveImage(i, 1)} title="Mover para a direita"
                                            className="px-2 py-0.5 text-[0.7rem] border border-schubart-3 hover:border-schubart-1 cursor-pointer">→</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <input
                            ref={photoInputRef}
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={(e) => e.target.files && uploadFiles(e.target.files, 'photos')}
                        />
                        <button type="button" onClick={() => photoInputRef.current?.click()} disabled={uploading} className={buttonSecondary}>
                            {uploading ? 'Enviando...' : '+ Adicionar fotos'}
                        </button>
                    </section>

                    {/* VÍDEO */}
                    <section className="bg-white p-6 md:p-8 ring-1 ring-schubart-3/60 space-y-5">
                        <h2 className="font-epicene-text text-[0.75rem] uppercase tracking-[0.2em] text-schubart-5">
                            Vídeo reels (vertical 9:16)
                        </h2>
                        {editing.video ? (
                            <div className="flex items-start gap-4">
                                <video src={editing.video} controls muted className="w-40 aspect-[9/16] object-cover bg-schubart-1 ring-1 ring-schubart-3/60" />
                                <button type="button" onClick={() => setEditing({ ...editing, video: undefined })} className={buttonSecondary}>
                                    Remover vídeo
                                </button>
                            </div>
                        ) : (
                            <>
                                <input
                                    ref={videoInputRef}
                                    type="file"
                                    accept="video/mp4,video/quicktime,video/webm"
                                    className="hidden"
                                    onChange={(e) => e.target.files && uploadFiles(e.target.files, 'video')}
                                />
                                <button type="button" onClick={() => videoInputRef.current?.click()} disabled={uploading} className={buttonSecondary}>
                                    {uploading ? 'Enviando...' : '+ Adicionar vídeo'}
                                </button>
                                <p className="font-epicene-text text-[0.78rem] text-schubart-2">
                                    Dica: vídeos 4K são pesados — exporte em 1080×1920 (Full HD vertical) para carregar mais rápido sem perda visível no celular.
                                </p>
                            </>
                        )}
                    </section>

                    {/* TEXTOS */}
                    {LANGS.map(({ code, label }) => (
                        <section key={code} className="bg-white p-6 md:p-8 ring-1 ring-schubart-3/60 space-y-5">
                            <h2 className="font-epicene-text text-[0.75rem] uppercase tracking-[0.2em] text-schubart-5">
                                Textos — {label}
                            </h2>
                            {code !== 'pt' && (
                                <p className="font-epicene-text text-[0.78rem] text-schubart-2 -mt-3">
                                    Se deixar em branco, o site mostra o texto em português.
                                </p>
                            )}
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className={labelClass}>Nome {code === 'pt' ? '*' : ''}</label>
                                    <input
                                        className={inputClass}
                                        value={editing.name[code] ?? ''}
                                        onChange={(e) => setEditing({ ...editing, name: { ...editing.name, [code]: e.target.value } })}
                                        required={code === 'pt'}
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>Subtítulo</label>
                                    <input
                                        className={inputClass}
                                        value={editing.subtitle[code] ?? ''}
                                        onChange={(e) => setEditing({ ...editing, subtitle: { ...editing.subtitle, [code]: e.target.value } })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className={labelClass}>
                                    Descrição (separe parágrafos com uma linha em branco)
                                </label>
                                <textarea
                                    className={`${inputClass} min-h-32`}
                                    value={parasToText(editing.description[code])}
                                    onChange={(e) => setEditing({ ...editing, description: { ...editing.description, [code]: textToParas(e.target.value) } })}
                                />
                            </div>
                        </section>
                    ))}

                    {feedback && (
                        <p className="font-epicene-text text-[0.9rem] text-red-700">{feedback}</p>
                    )}

                    <div className="flex gap-4">
                        <button type="submit" disabled={saving || uploading} className={buttonPrimary}>
                            {saving ? 'Salvando...' : 'Salvar gema'}
                        </button>
                        <button type="button" onClick={() => setEditing(null)} className={buttonSecondary}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </main>
        );
    }

    /* ---------- LISTA ---------- */
    return (
        <main className="min-h-screen bg-schubart-6 pt-28 pb-24 px-5">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                    <div>
                        <h1 className="font-pp-hatton text-headlines-xs md:text-headlines-s uppercase tracking-[0.15em] text-schubart-1">
                            Painel Admin
                        </h1>
                        <p className="font-epicene-text text-[0.85rem] text-schubart-2 mt-1">
                            {gemas.length} {gemas.length === 1 ? 'gema cadastrada' : 'gemas cadastradas'}
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={startNew} className={buttonPrimary}>+ Nova gema</button>
                        <button onClick={handleLogout} className={buttonSecondary}>Sair</button>
                    </div>
                </div>

                <div className="space-y-3">
                    {gemas.map((gema) => (
                        <div
                            key={gema.slug}
                            className="flex items-center gap-4 bg-white p-3 md:p-4 ring-1 ring-schubart-3/60"
                        >
                            <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden bg-schubart-6 ring-1 ring-schubart-3/40">
                                {gema.images[0] && (
                                    <Image src={gema.images[0]} alt="" fill className="object-cover" sizes="80px" />
                                )}
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="font-epicene-text font-semibold text-schubart-1 truncate">
                                    {gema.name.pt}
                                </p>
                                <p className="font-cardo text-schubart-1">{formatPriceBRL(gema.priceCents)}</p>
                                <p className="font-epicene-text text-[0.75rem] text-schubart-2">
                                    {CATEGORY_LABELS[normalizeCategory(gema)]} · {gema.images.length} foto(s){gema.video ? ' · vídeo' : ''}
                                </p>
                            </div>
                            <button
                                onClick={() => toggleAvailable(gema)}
                                className={`shrink-0 font-epicene-text text-[0.65rem] uppercase tracking-[0.15em] px-3 py-1.5 border cursor-pointer transition-colors ${
                                    gema.available
                                        ? 'border-green-700 text-green-800 hover:bg-green-50'
                                        : 'border-schubart-3 text-schubart-2 hover:border-schubart-1'
                                }`}
                                title="Clique para alternar"
                            >
                                {gema.available ? 'À venda' : 'Vendida'}
                            </button>
                            <div className="flex shrink-0 gap-2">
                                <button onClick={() => startEdit(gema)} className={buttonSecondary}>
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(gema.slug)}
                                    className="px-4 py-3 border border-schubart-3 font-epicene-text uppercase tracking-[0.18em] text-[0.7rem] text-red-800 hover:border-red-700 transition-all cursor-pointer"
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
