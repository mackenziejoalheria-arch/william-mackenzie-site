import { NextRequest, NextResponse } from 'next/server';
import { isAdmin } from '@/lib/admin-auth';
import { readGemas, writeGemas } from '@/lib/gemas-store';
import { Gema } from '@/lib/gemas';

function unauthorized() {
    return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 });
}

function validate(gema: Partial<Gema>): string | null {
    if (!gema.slug || !/^[a-z0-9-]+$/.test(gema.slug)) {
        return 'Slug inválido (use apenas letras minúsculas, números e hífens).';
    }
    if (!gema.name?.pt) return 'O nome em português é obrigatório.';
    if (!gema.priceCents || gema.priceCents <= 0) return 'Informe um preço válido.';
    return null;
}

export async function GET() {
    if (!(await isAdmin())) return unauthorized();
    return NextResponse.json(readGemas());
}

export async function POST(req: NextRequest) {
    if (!(await isAdmin())) return unauthorized();

    const gema = (await req.json()) as Gema;
    const error = validate(gema);
    if (error) return NextResponse.json({ error }, { status: 400 });

    const gemas = readGemas();
    if (gemas.some((g) => g.slug === gema.slug)) {
        return NextResponse.json(
            { error: 'Já existe uma gema com esse slug.' },
            { status: 400 },
        );
    }

    gemas.push(gema);
    writeGemas(gemas);
    return NextResponse.json({ ok: true });
}

export async function PUT(req: NextRequest) {
    if (!(await isAdmin())) return unauthorized();

    const gema = (await req.json()) as Gema;
    const error = validate(gema);
    if (error) return NextResponse.json({ error }, { status: 400 });

    const gemas = readGemas();
    const index = gemas.findIndex((g) => g.slug === gema.slug);
    if (index === -1) {
        return NextResponse.json({ error: 'Gema não encontrada.' }, { status: 404 });
    }

    gemas[index] = gema;
    writeGemas(gemas);
    return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
    if (!(await isAdmin())) return unauthorized();

    const slug = req.nextUrl.searchParams.get('slug');
    const gemas = readGemas();
    const filtered = gemas.filter((g) => g.slug !== slug);
    if (filtered.length === gemas.length) {
        return NextResponse.json({ error: 'Gema não encontrada.' }, { status: 404 });
    }

    writeGemas(filtered);
    return NextResponse.json({ ok: true });
}
