import type { Metadata } from 'next';
import AdminClient from './AdminClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Painel Admin — Gemas',
    robots: { index: false, follow: false },
};

export default function AdminPage() {
    return <AdminClient />;
}
