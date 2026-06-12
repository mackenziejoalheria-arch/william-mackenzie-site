'use client';
import { useLanguage } from '@/context/LanguageContext';

interface YouTubeSectionProps {
    videoId: string;
    title?: string;
    description?: string;
}

export default function YouTubeSection({ videoId, title, description }: YouTubeSectionProps) {
    const { language } = useLanguage();

    return (
        <section className="relative w-full py-16 md:py-24 bg-schubart-6 text-schubart-1 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl text-center mb-12">
                {title && (
                    <h2 className="font-pp-hatton text-headlines-s md:text-headlines-m uppercase mb-4 tracking-widest">
                        {title}
                    </h2>
                )}
                {description && (
                    <p className="font-epicene-text text-body-m text-schubart-2 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                )}
            </div>

            <div className="container mx-auto px-4 max-w-6xl">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl border border-schubart-2/10 group">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
                        title={title || "YouTube video player"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    
                    {/* Decorative overlay for premium feel */}
                    <div className="absolute inset-0 pointer-events-none border border-white/5 group-hover:border-white/10 transition-colors duration-500 rounded-lg"></div>
                </div>
            </div>
            
            {/* Background decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none opacity-[0.03] select-none">
                <span className="font-cardo text-[40vw] uppercase leading-none text-white whitespace-nowrap">
                    WILLIAM MACKENZIE
                </span>
            </div>
        </section>
    );
}
