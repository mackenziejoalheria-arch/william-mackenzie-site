import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminToken, ADMIN_COOKIE, isAdmin } from '@/lib/admin-auth';

export async function GET() {
    return NextResponse.json({ loggedIn: await isAdmin() });
}

export async function POST(req: NextRequest) {
    const { password } = await req.json();

    if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
        return NextResponse.json({ error: 'Senha incorreta.' }, { status: 401 });
    }

    const cookieStore = await cookies();
    cookieStore.set(ADMIN_COOKIE, adminToken(), {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
    });

    return NextResponse.json({ ok: true });
}

export async function DELETE() {
    const cookieStore = await cookies();
    cookieStore.delete(ADMIN_COOKIE);
    return NextResponse.json({ ok: true });
}
