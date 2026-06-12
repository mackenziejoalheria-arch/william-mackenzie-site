import fs from 'fs';
import path from 'path';
import { Gema } from './gemas';
import { normalizeCategory, ProductCategory } from './catalog';
import { pedras as seed } from '@/data/pedras';

const FILE = path.join(process.cwd(), 'data', 'gemas.json');

function seedGemas(): Gema[] {
    return seed.map(({ image, ...rest }) => ({
        ...rest,
        images: [
            image,
            image.replace(/\.png$/, '-2.png'),
            image.replace(/\.png$/, '-3.png'),
        ],
    }));
}

function normalizeGema(gema: Gema): Gema {
    return { ...gema, category: normalizeCategory(gema) };
}

export function readGemas(): Gema[] {
    try {
        const raw = fs.readFileSync(FILE, 'utf8');
        return (JSON.parse(raw) as Gema[]).map(normalizeGema);
    } catch {
        const gemas = seedGemas();
        writeGemas(gemas);
        return gemas;
    }
}

export function writeGemas(gemas: Gema[]): void {
    fs.mkdirSync(path.dirname(FILE), { recursive: true });
    fs.writeFileSync(FILE, JSON.stringify(gemas, null, 2), 'utf8');
}

export function getGema(slug: string): Gema | undefined {
    return readGemas().find((g) => g.slug === slug);
}

export function getGemasByCategory(category: ProductCategory): Gema[] {
    return readGemas().filter((g) => normalizeCategory(g) === category);
}
