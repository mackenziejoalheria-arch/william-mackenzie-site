import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { isAdmin } from '@/lib/admin-auth';

const ALLOWED_EXTENSIONS = [
    '.jpg', '.jpeg', '.png', '.webp', '.avif',
    '.mp4', '.mov', '.webm', '.m4v',
];

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'gemas');

export async function POST(req: NextRequest) {
    if (!(await isAdmin())) {
        return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 });
    }

    const formData = await req.formData();
    const files = formData.getAll('files') as File[];

    if (files.length === 0) {
        return NextResponse.json({ error: 'Nenhum arquivo enviado.' }, { status: 400 });
    }

    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    const paths: string[] = [];

    for (const file of files) {
        const ext = path.extname(file.name).toLowerCase();
        if (!ALLOWED_EXTENSIONS.includes(ext)) {
            return NextResponse.json(
                { error: `Formato não permitido: ${ext}` },
                { status: 400 },
            );
        }

        const base = path
            .basename(file.name, ext)
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9-]+/g, '-')
            .replace(/^-+|-+$/g, '') || 'arquivo';

        const filename = `${Date.now()}-${base}${ext}`;
        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(path.join(UPLOAD_DIR, filename), buffer);
        paths.push(`/uploads/gemas/${filename}`);
    }

    return NextResponse.json({ paths });
}
