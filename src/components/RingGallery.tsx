'use client';
import { useState } from 'react';
import Image from 'next/image';

const catalogue = [
    {
        id: 1,
        name: "Aliança Eternité",
        image: "/images/hero/anel1.jpg", 
        weight: "18g (Par)",
        diamonds: "45 diamantes em lapidação brilhante (1.2 ct total)",
        metal: "Ouro Amarelo 18k",
        description: "A clássica meia-aliança de diamantes reinventada com uma cravação impecável que maximiza o brilho de cada gema."
    },
    {
        id: 2,
        name: "Aliança Royale",
        image: "/images/alianças.png", 
        weight: "22g (Par)",
        diamonds: "Liso / Acabamento Espelhado",
        metal: "Ouro Amarelo e Branco 18k",
        description: "Um design robusto e anatômico, polida à mão para um acabamento espelhado perfeito que reflete a luz de forma única."
    },
    {
        id: 3,
        name: "Aliança Lumière",
        image: "/images/hero/anel2.png", 
        weight: "16g (Par)",
        diamonds: "Diamante central de 0.5 ct",
        metal: "Ouro Branco 18k",
        description: "Elegância minimalista com um toque de modernidade. O diamante central solitário traz foco e significado ao seu momento especial."
    }
];

export default function RingGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % catalogue.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + catalogue.length) % catalogue.length);
    };

    const currentRing = catalogue[currentIndex];

    return (
        <section className="w-full bg-schubart-6 py-12 md:py-24" aria-labelledby="gallery-title">
            <h2 id="gallery-title" className="sr-only">Galeria de Anéis Exclusivos</h2>
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 px-4 md:px-8">
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/5] shadow-2xl bg-white flex items-center justify-center p-8 group">
                    <div className="relative w-full h-full">
                        <Image
                            src={currentRing.image}
                            alt={currentRing.name}
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    {/* Floating Nav inside image for Desktop */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button onClick={prevSlide} className="w-12 h-12 bg-white/80 hover:bg-schubart-1 hover:text-schubart-6 flex items-center justify-center rounded-full shadow-lg transition-colors" aria-label="Anterior">
                            <span className="font-epicene-text tracking-widest leading-none">&larr;</span>
                        </button>
                        <button onClick={nextSlide} className="w-12 h-12 bg-white/80 hover:bg-schubart-1 hover:text-schubart-6 flex items-center justify-center rounded-full shadow-lg transition-colors" aria-label="Próximo">
                            <span className="font-epicene-text tracking-widest leading-none">&rarr;</span>
                        </button>
                    </div>
                </div>

                {/* Details Section */}
                <div className="w-full md:w-1/2 space-y-8 flex flex-col justify-center">
                    <div className="space-y-4">
                        <p className="font-epicene-text text-body-xs-caps text-schubart-4 tracking-widest uppercase">Modelo {currentIndex + 1} de {catalogue.length}</p>
                        <h2 className="font-pp-hatton text-headlines-m uppercase">{currentRing.name}</h2>
                    </div>
                    
                    <p className="font-epicene-text text-body-m text-schubart-2 leading-relaxed max-w-xl">
                        {currentRing.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-schubart-3/50">
                         <div>
                            <p className="font-epicene-text text-body-xs-caps text-schubart-4 tracking-widest uppercase mb-2">Peso Estimado</p>
                            <p className="font-cardo text-body-xl">{currentRing.weight}</p>
                        </div>
                        <div>
                            <p className="font-epicene-text text-body-xs-caps text-schubart-4 tracking-widest uppercase mb-2">Diamantes</p>
                            <p className="font-cardo text-body-xl">{currentRing.diamonds}</p>
                        </div>
                        <div className="col-span-1 sm:col-span-2">
                            <p className="font-epicene-text text-body-xs-caps text-schubart-4 tracking-widest uppercase mb-2">Metal</p>
                            <p className="font-cardo text-body-xl">{currentRing.metal}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 pt-8 md:hidden">
                        <button onClick={prevSlide} className="px-6 py-3 border border-schubart-2 text-schubart-1 hover:bg-schubart-1 hover:text-schubart-6 font-epicene-text tracking-widest uppercase transition-colors text-xs">
                            Anterior
                        </button>
                        <button onClick={nextSlide} className="px-6 py-3 border border-schubart-2 text-schubart-1 hover:bg-schubart-1 hover:text-schubart-6 font-epicene-text tracking-widest uppercase transition-colors text-xs">
                            Próximo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
