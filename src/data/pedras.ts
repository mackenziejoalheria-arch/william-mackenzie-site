import { LocalizedText, LocalizedParagraphs } from '../lib/gemas';

export type Pedra = {
    slug: string;
    image: string;
    /** Preço em centavos de Real (BRL). Ex: 180000 = R$ 1.800,00 */
    priceCents: number;
    available: boolean;
    name: LocalizedText;
    subtitle: LocalizedText;
    description: LocalizedParagraphs;
};

// ATENÇÃO: este arquivo é usado apenas como SEMENTE INICIAL do banco de dados
// (data/gemas.json). Depois da primeira execução, edite os produtos pelo
// painel /admin — alterações aqui não terão mais efeito.
// Os preços abaixo são provisórios (placeholders).
export const pedras: Pedra[] = [
    {
        slug: 'safira',
        image: '/images/pedras/safira.png',
        priceCents: 180000,
        available: true,
        name: { pt: 'Safira', en: 'Sapphire', es: 'Zafiro', de: 'Saphir' },
        subtitle: {
            pt: 'O azul profundo da nobreza',
            en: 'The deep blue of nobility',
            es: 'El azul profundo de la nobleza',
            de: 'Das tiefe Blau des Adels',
        },
        description: {
            pt: [
                'A safira é, há séculos, a pedra das casas reais — símbolo de sabedoria, lealdade e nobreza. Seu azul profundo e aveludado carrega uma presença serena, que se impõe sem precisar de excessos.',
                'Cada safira do nosso ateliê é uma pedra natural, selecionada à mão pelo ourives, pronta para se tornar o centro de uma joia única ou para integrar a criação sob medida que você imaginar.',
            ],
            en: [
                'For centuries, the sapphire has been the stone of royal houses — a symbol of wisdom, loyalty and nobility. Its deep, velvety blue carries a serene presence that commands attention without excess.',
                'Each sapphire in our atelier is a natural stone, hand-selected by the goldsmith, ready to become the centerpiece of a unique jewel or part of the bespoke creation you envision.',
            ],
            es: [
                'El zafiro es, desde hace siglos, la piedra de las casas reales — símbolo de sabiduría, lealtad y nobleza. Su azul profundo y aterciopelado tiene una presencia serena que se impone sin excesos.',
                'Cada zafiro de nuestro taller es una piedra natural, seleccionada a mano por el orfebre, lista para convertirse en el centro de una joya única o integrar la creación a medida que imagines.',
            ],
            de: [
                'Der Saphir ist seit Jahrhunderten der Stein der Königshäuser — Symbol für Weisheit, Treue und Adel. Sein tiefes, samtiges Blau strahlt eine ruhige Präsenz aus, die ohne Übermaß besteht.',
                'Jeder Saphir aus unserem Atelier ist ein Naturstein, vom Goldschmied von Hand ausgewählt — bereit, das Herzstück eines einzigartigen Schmuckstücks oder Teil Ihrer Maßanfertigung zu werden.',
            ],
        },
    },
    {
        slug: 'esmeralda',
        image: '/images/pedras/esmeralda.png',
        priceCents: 220000,
        available: true,
        name: { pt: 'Esmeralda', en: 'Emerald', es: 'Esmeralda', de: 'Smaragd' },
        subtitle: {
            pt: 'O verde vivo da natureza brasileira',
            en: 'The vivid green of Brazilian nature',
            es: 'El verde vivo de la naturaleza brasileña',
            de: 'Das lebendige Grün der brasilianischen Natur',
        },
        description: {
            pt: [
                'A esmeralda é a mais brasileira das gemas preciosas. Seu verde intenso, com jardins internos que contam a história da sua formação, é símbolo de renovação, esperança e vida.',
                'Selecionamos esmeraldas naturais de coloração viva e lapidação clássica, perfeitas para anéis de destaque, pingentes e criações exclusivas do ateliê.',
            ],
            en: [
                'The emerald is the most Brazilian of precious gems. Its intense green, with inner gardens that tell the story of its formation, symbolizes renewal, hope and life.',
                'We select natural emeralds with vivid color and classic cuts, perfect for statement rings, pendants and exclusive atelier creations.',
            ],
            es: [
                'La esmeralda es la más brasileña de las gemas preciosas. Su verde intenso, con jardines internos que cuentan la historia de su formación, simboliza renovación, esperanza y vida.',
                'Seleccionamos esmeraldas naturales de color vivo y talla clásica, perfectas para anillos protagonistas, colgantes y creaciones exclusivas del taller.',
            ],
            de: [
                'Der Smaragd ist der brasilianischste aller Edelsteine. Sein intensives Grün mit inneren Gärten, die die Geschichte seiner Entstehung erzählen, symbolisiert Erneuerung, Hoffnung und Leben.',
                'Wir wählen natürliche Smaragde mit lebendiger Farbe und klassischem Schliff aus — perfekt für markante Ringe, Anhänger und exklusive Atelier-Kreationen.',
            ],
        },
    },
    {
        slug: 'rubi',
        image: '/images/pedras/rubi.png',
        priceCents: 250000,
        available: true,
        name: { pt: 'Rubi', en: 'Ruby', es: 'Rubí', de: 'Rubin' },
        subtitle: {
            pt: 'A pedra da paixão e da coragem',
            en: 'The stone of passion and courage',
            es: 'La piedra de la pasión y el coraje',
            de: 'Der Stein der Leidenschaft und des Mutes',
        },
        description: {
            pt: [
                'Chamado na antiguidade de "rei das gemas", o rubi carrega o vermelho mais intenso da natureza. É a pedra da paixão, da coragem e da vitalidade — uma presença impossível de ignorar.',
                'Nossos rubis naturais são escolhidos pela profundidade da cor e pelo brilho, ideais para joias que marcam momentos decisivos.',
            ],
            en: [
                'Called the "king of gems" in antiquity, the ruby carries nature\u2019s most intense red. It is the stone of passion, courage and vitality — a presence impossible to ignore.',
                'Our natural rubies are chosen for depth of color and brilliance, ideal for jewels that mark decisive moments.',
            ],
            es: [
                'Llamado en la antigüedad "rey de las gemas", el rubí lleva el rojo más intenso de la naturaleza. Es la piedra de la pasión, el coraje y la vitalidad — una presencia imposible de ignorar.',
                'Nuestros rubíes naturales se eligen por la profundidad del color y el brillo, ideales para joyas que marcan momentos decisivos.',
            ],
            de: [
                'In der Antike als "König der Edelsteine" bezeichnet, trägt der Rubin das intensivste Rot der Natur. Er ist der Stein der Leidenschaft, des Mutes und der Vitalität — eine Präsenz, die man nicht übersehen kann.',
                'Unsere natürlichen Rubine werden nach Farbtiefe und Brillanz ausgewählt — ideal für Schmuckstücke, die entscheidende Momente markieren.',
            ],
        },
    },
    {
        slug: 'diamante',
        image: '/images/pedras/diamante.png',
        priceCents: 490000,
        available: true,
        name: { pt: 'Diamante', en: 'Diamond', es: 'Diamante', de: 'Diamant' },
        subtitle: {
            pt: 'O eterno em sua forma mais pura',
            en: 'The eternal in its purest form',
            es: 'Lo eterno en su forma más pura',
            de: 'Das Ewige in seiner reinsten Form',
        },
        description: {
            pt: [
                'Nenhuma pedra atravessa o tempo como o diamante. Formado nas profundezas da terra ao longo de bilhões de anos, ele é o símbolo definitivo do que é eterno e inquebrável.',
                'Trabalhamos com diamantes naturais lapidados para o máximo brilho, prontos para coroar anéis de noivado, alianças e peças sob medida.',
            ],
            en: [
                'No stone endures time like the diamond. Formed deep within the earth over billions of years, it is the definitive symbol of the eternal and unbreakable.',
                'We work with natural diamonds cut for maximum brilliance, ready to crown engagement rings, wedding bands and bespoke pieces.',
            ],
            es: [
                'Ninguna piedra atraviesa el tiempo como el diamante. Formado en las profundidades de la tierra durante miles de millones de años, es el símbolo definitivo de lo eterno e irrompible.',
                'Trabajamos con diamantes naturales tallados para el máximo brillo, listos para coronar anillos de compromiso, alianzas y piezas a medida.',
            ],
            de: [
                'Kein Stein überdauert die Zeit wie der Diamant. Über Milliarden von Jahren tief in der Erde entstanden, ist er das ultimative Symbol des Ewigen und Unzerbrechlichen.',
                'Wir arbeiten mit natürlichen Diamanten, geschliffen für maximale Brillanz — bereit, Verlobungsringe, Eheringe und Maßanfertigungen zu krönen.',
            ],
        },
    },
    {
        slug: 'onix',
        image: '/images/pedras/onix.png',
        priceCents: 38000,
        available: true,
        name: { pt: 'Ônix', en: 'Onyx', es: 'Ónix', de: 'Onyx' },
        subtitle: {
            pt: 'A elegância do preto absoluto',
            en: 'The elegance of absolute black',
            es: 'La elegancia del negro absoluto',
            de: 'Die Eleganz des absoluten Schwarz',
        },
        description: {
            pt: [
                'O ônix é a expressão máxima da sobriedade. Seu preto profundo e polido transmite força, proteção e uma elegância atemporal que combina com qualquer metal.',
                'Pedra clássica da joalheria masculina e de peças de design marcante, o ônix do nosso ateliê é natural e polido à perfeição.',
            ],
            en: [
                'Onyx is the ultimate expression of sobriety. Its deep, polished black conveys strength, protection and a timeless elegance that suits any metal.',
                'A classic stone of men\u2019s jewelry and bold design pieces, the onyx in our atelier is natural and polished to perfection.',
            ],
            es: [
                'El ónix es la máxima expresión de la sobriedad. Su negro profundo y pulido transmite fuerza, protección y una elegancia atemporal que combina con cualquier metal.',
                'Piedra clásica de la joyería masculina y de piezas de diseño marcado, el ónix de nuestro taller es natural y pulido a la perfección.',
            ],
            de: [
                'Onyx ist der ultimative Ausdruck von Schlichtheit. Sein tiefes, poliertes Schwarz vermittelt Stärke, Schutz und eine zeitlose Eleganz, die zu jedem Metall passt.',
                'Als klassischer Stein für Herrenschmuck und markante Designstücke ist der Onyx aus unserem Atelier natürlich und perfekt poliert.',
            ],
        },
    },
    {
        slug: 'opala',
        image: '/images/pedras/opala.png',
        priceCents: 95000,
        available: true,
        name: { pt: 'Opala', en: 'Opal', es: 'Ópalo', de: 'Opal' },
        subtitle: {
            pt: 'Um arco-íris dentro da pedra',
            en: 'A rainbow within the stone',
            es: 'Un arcoíris dentro de la piedra',
            de: 'Ein Regenbogen im Stein',
        },
        description: {
            pt: [
                'Nenhuma opala é igual à outra. Seu jogo de cores — lampejos de azul, verde, laranja e violeta que dançam conforme a luz — faz dela uma das gemas mais fascinantes da natureza.',
                'Selecionamos opalas naturais com jogo de cores vivo, perfeitas para quem busca uma joia verdadeiramente única.',
            ],
            en: [
                'No two opals are alike. Its play of color — flashes of blue, green, orange and violet dancing with the light — makes it one of nature\u2019s most fascinating gems.',
                'We select natural opals with vivid play of color, perfect for those seeking a truly one-of-a-kind jewel.',
            ],
            es: [
                'No hay dos ópalos iguales. Su juego de colores — destellos de azul, verde, naranja y violeta que danzan con la luz — lo convierte en una de las gemas más fascinantes de la naturaleza.',
                'Seleccionamos ópalos naturales con un juego de colores vivo, perfectos para quien busca una joya verdaderamente única.',
            ],
            de: [
                'Kein Opal gleicht dem anderen. Sein Farbenspiel — Blitze von Blau, Grün, Orange und Violett, die mit dem Licht tanzen — macht ihn zu einem der faszinierendsten Edelsteine der Natur.',
                'Wir wählen natürliche Opale mit lebendigem Farbenspiel aus — perfekt für alle, die ein wirklich einzigartiges Schmuckstück suchen.',
            ],
        },
    },
    {
        slug: 'ametista',
        image: '/images/pedras/ametista.png',
        priceCents: 42000,
        available: true,
        name: { pt: 'Ametista', en: 'Amethyst', es: 'Amatista', de: 'Amethyst' },
        subtitle: {
            pt: 'O púrpura da realeza e da intuição',
            en: 'The purple of royalty and intuition',
            es: 'El púrpura de la realeza y la intuición',
            de: 'Das Purpur der Könige und der Intuition',
        },
        description: {
            pt: [
                'Historicamente conhecida como a pedra dos reis, a ametista vibra em tons de púrpura associados à nobreza, à espiritualidade e à intuição profunda. É a mesma gema que coroa o nosso Anel Ester.',
                'Nossas ametistas naturais, em sua maioria de origem brasileira, são lapidadas para revelar toda a intensidade do violeta.',
            ],
            en: [
                'Historically known as the stone of kings, the amethyst vibrates in purple tones associated with nobility, spirituality and deep intuition. It is the same gem that crowns our Esther Ring.',
                'Our natural amethysts, mostly of Brazilian origin, are cut to reveal the full intensity of their violet.',
            ],
            es: [
                'Históricamente conocida como la piedra de los reyes, la amatista vibra en tonos púrpura asociados a la nobleza, la espiritualidad y la intuición profunda. Es la misma gema que corona nuestro Anillo Ester.',
                'Nuestras amatistas naturales, en su mayoría de origen brasileño, se tallan para revelar toda la intensidad del violeta.',
            ],
            de: [
                'Historisch als Stein der Könige bekannt, schwingt der Amethyst in Purpurtönen, die mit Adel, Spiritualität und tiefer Intuition verbunden sind. Es ist derselbe Edelstein, der unseren Ester-Ring krönt.',
                'Unsere natürlichen Amethyste, überwiegend brasilianischer Herkunft, werden so geschliffen, dass die volle Intensität des Violetts zur Geltung kommt.',
            ],
        },
    },
    {
        slug: 'topazio',
        image: '/images/pedras/topazio.png',
        priceCents: 68000,
        available: true,
        name: { pt: 'Topázio', en: 'Topaz', es: 'Topacio', de: 'Topas' },
        subtitle: {
            pt: 'O azul sereno do céu lapidado',
            en: 'The serene blue of a faceted sky',
            es: 'El azul sereno del cielo tallado',
            de: 'Das ruhige Blau des geschliffenen Himmels',
        },
        description: {
            pt: [
                'O topázio azul tem a transparência e a serenidade de um céu limpo. É uma pedra luminosa, associada à clareza de pensamento e à comunicação.',
                'Com excelente brilho e dureza, é uma escolha versátil para anéis, brincos e pingentes de uso diário, sem abrir mão da sofisticação.',
            ],
            en: [
                'The blue topaz has the transparency and serenity of a clear sky. It is a luminous stone, associated with clarity of thought and communication.',
                'With excellent brilliance and hardness, it is a versatile choice for rings, earrings and pendants for daily wear, without giving up sophistication.',
            ],
            es: [
                'El topacio azul tiene la transparencia y la serenidad de un cielo despejado. Es una piedra luminosa, asociada a la claridad de pensamiento y la comunicación.',
                'Con excelente brillo y dureza, es una elección versátil para anillos, pendientes y colgantes de uso diario, sin renunciar a la sofisticación.',
            ],
            de: [
                'Der blaue Topas hat die Transparenz und Ruhe eines klaren Himmels. Er ist ein leuchtender Stein, der mit Klarheit des Denkens und Kommunikation verbunden wird.',
                'Mit hervorragender Brillanz und Härte ist er eine vielseitige Wahl für Ringe, Ohrringe und Anhänger für den Alltag — ohne auf Raffinesse zu verzichten.',
            ],
        },
    },
    {
        slug: 'topazio-imperial',
        image: '/images/pedras/topazio-imperial.png',
        priceCents: 160000,
        available: true,
        name: { pt: 'Topázio Imperial', en: 'Imperial Topaz', es: 'Topacio Imperial', de: 'Imperialtopas' },
        subtitle: {
            pt: 'O tesouro raro de Ouro Preto',
            en: 'The rare treasure of Ouro Preto',
            es: 'El tesoro raro de Ouro Preto',
            de: 'Der seltene Schatz von Ouro Preto',
        },
        description: {
            pt: [
                'O topázio imperial é uma das gemas mais raras do mundo — e é brasileiro: praticamente toda a produção mundial vem da região de Ouro Preto, em Minas Gerais. Seus tons dourados e alaranjados lembram o pôr do sol.',
                'Ter um topázio imperial é ter um pedaço raro do Brasil. Cada pedra do ateliê é natural e selecionada pela intensidade da cor.',
            ],
            en: [
                'The imperial topaz is one of the rarest gems in the world — and it is Brazilian: virtually all of the world\u2019s production comes from the region of Ouro Preto, Minas Gerais. Its golden-orange tones recall the sunset.',
                'To own an imperial topaz is to own a rare piece of Brazil. Each stone in the atelier is natural and selected for the intensity of its color.',
            ],
            es: [
                'El topacio imperial es una de las gemas más raras del mundo — y es brasileño: prácticamente toda la producción mundial proviene de la región de Ouro Preto, en Minas Gerais. Sus tonos dorados y anaranjados recuerdan la puesta de sol.',
                'Tener un topacio imperial es tener una pieza rara de Brasil. Cada piedra del taller es natural y seleccionada por la intensidad de su color.',
            ],
            de: [
                'Der Imperialtopas ist einer der seltensten Edelsteine der Welt — und er ist brasilianisch: Praktisch die gesamte Weltproduktion stammt aus der Region Ouro Preto in Minas Gerais. Seine goldorangen Töne erinnern an den Sonnenuntergang.',
                'Einen Imperialtopas zu besitzen heißt, ein seltenes Stück Brasilien zu besitzen. Jeder Stein im Atelier ist natürlich und nach Farbintensität ausgewählt.',
            ],
        },
    },
    {
        slug: 'agua-marinha',
        image: '/images/pedras/agua-marinha.png',
        priceCents: 120000,
        available: true,
        name: { pt: 'Água-marinha', en: 'Aquamarine', es: 'Aguamarina', de: 'Aquamarin' },
        subtitle: {
            pt: 'A calma cristalina do mar',
            en: 'The crystalline calm of the sea',
            es: 'La calma cristalina del mar',
            de: 'Die kristallene Ruhe des Meeres',
        },
        description: {
            pt: [
                'A água-marinha guarda em si a cor do mar em dia de calmaria. Pedra da serenidade e da coragem dos navegantes, é uma das gemas mais queridas do Brasil, grande produtor mundial.',
                'Nossas águas-marinhas naturais têm tom azul cristalino e lapidação que valoriza sua transparência única.',
            ],
            en: [
                'The aquamarine holds the color of the sea on a calm day. The stone of serenity and of sailors\u2019 courage, it is one of Brazil\u2019s most beloved gems — the country being a major world producer.',
                'Our natural aquamarines have a crystalline blue tone and cuts that enhance their unique transparency.',
            ],
            es: [
                'La aguamarina guarda el color del mar en un día de calma. Piedra de la serenidad y del coraje de los navegantes, es una de las gemas más queridas de Brasil, gran productor mundial.',
                'Nuestras aguamarinas naturales tienen un tono azul cristalino y una talla que realza su transparencia única.',
            ],
            de: [
                'Der Aquamarin trägt die Farbe des Meeres an einem ruhigen Tag in sich. Als Stein der Gelassenheit und des Mutes der Seefahrer ist er einer der beliebtesten Edelsteine Brasiliens, einem der größten Produzenten der Welt.',
                'Unsere natürlichen Aquamarine haben einen kristallblauen Ton und einen Schliff, der ihre einzigartige Transparenz unterstreicht.',
            ],
        },
    },
];

export function getPedra(slug: string): Pedra | undefined {
    return pedras.find((p) => p.slug === slug);
}

export function formatPriceBRL(priceCents: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(priceCents / 100);
}
