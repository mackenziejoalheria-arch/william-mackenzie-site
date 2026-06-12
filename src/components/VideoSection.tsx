'use client';
import { useState, useRef, useEffect, useCallback } from 'react';

import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';

export default function VideoSection() {
    const { language } = useLanguage();
    const t = getTranslations(language).videoSection;

    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [showControls, setShowControls] = useState(true);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimeout = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            if (isPlaying) setShowControls(false);
        }, 3000);
    }, [isPlaying]);

    const handleInteraction = () => {
        setShowControls(true);
        resetTimeout();
        // Try to unmute on first interaction if playing
        if (videoRef.current && isMuted && isPlaying) {
            videoRef.current.muted = false;
            setIsMuted(false);
        }
    };

    const togglePlay = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setShowControls(true);
            } else {
                videoRef.current.play();
                // Always ensure unmuted when manually playing
                if (isMuted) {
                    videoRef.current.muted = false;
                    setIsMuted(false);
                }
                resetTimeout();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        resetTimeout();
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [isPlaying, resetTimeout]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadVideo(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '400px 0px' }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="relative w-full min-h-[56.25vw] md:min-h-[150vh] z-[1000] bg-schubart-6">
            <div className="relative md:sticky top-0 w-full h-auto md:h-screen flex items-center justify-center overflow-hidden aspect-video md:aspect-auto">
                <div className="relative w-full h-full flex items-center justify-center">
                    <div 
                        className="relative w-full h-full md:aspect-video cursor-pointer"
                        onClick={handleInteraction}
                        onTouchStart={handleInteraction}
                    >
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            playsInline
                            autoPlay={shouldLoadVideo}
                            muted={isMuted}
                            loop
                            preload="none"
                            src={shouldLoadVideo ? "/video/Timeline%201.mp4" : undefined}
                        />
                        
                        {/* Center Play/Pause Button */}
                        <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
                            <button 
                                onClick={togglePlay}
                                className={`w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/40 flex items-center justify-center text-white transition-all duration-500 backdrop-blur-md bg-black/10 hover:bg-black/20 hover:scale-110 pointer-events-auto
                                    ${showControls || !isPlaying 
                                        ? 'opacity-100 scale-100' 
                                        : 'opacity-0 scale-90'
                                    }`}
                                aria-label={isPlaying ? t.pause : t.play}
                            >
                                {isPlaying ? (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 ml-1">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Bottom Controls Container */}
                        <div className={`absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex justify-between items-center z-50 transition-all duration-500 ${showControls || !isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                            {/* Back Button */}
                            <button 
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="group flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors backdrop-blur-sm">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                                        <path d="M19 12H5M12 19l-7-7 7-7" />
                                    </svg>
                                </div>
                                <span className="font-epicene-text text-body-s-caps tracking-widest uppercase hidden md:inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                                    {t.backHome}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
