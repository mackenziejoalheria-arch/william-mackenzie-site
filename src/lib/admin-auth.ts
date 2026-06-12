import { createHash } from 'crypto';
import { cookies } from 'next/headers';

export const ADMIN_COOKIE = 'wm_admin';

export function adminToken(): string {
    const password = process.env.ADMIN_PASSWORD ?? '';
    return createHash('sha256').update(`wm-admin:${password}`).digest('hex');
}

export async function isAdmin(): Promise<boolean> {
    if (!process.env.ADMIN_PASSWORD) return false;
    const cookieStore = await cookies();
    return cookieStore.get(ADMIN_COOKIE)?.value === adminToken();
}
