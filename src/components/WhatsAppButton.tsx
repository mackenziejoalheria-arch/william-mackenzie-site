'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getWhatsAppUrl } from './WhatsAppLink';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslations } from '@/translations';

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const w = getTranslations(language).whatsapp ?? getTranslations('en-us').whatsapp;
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl = getWhatsAppUrl(w.floatingMessage);

  useEffect(() => {
    const triggers = document.querySelectorAll('[data-whatsapp-trigger]');
    if (triggers.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries.some((entry) => entry.isIntersecting));
      },
      { rootMargin: '120px 0px 0px 0px', threshold: 0.01 }
    );

    triggers.forEach((trigger) => observer.observe(trigger));
    return () => observer.disconnect();
  }, []);

  const trackClick = () => {
    const win = window as typeof window & {
      gtag?: (...args: unknown[]) => void;
      fbq?: (...args: unknown[]) => void;
      pintrk?: (...args: unknown[]) => void;
    };

    win.gtag?.('event', 'click_whatsapp', {
      event_category: 'lead',
      event_label: 'floating_button',
    });
    win.fbq?.('track', 'Contact');
    win.pintrk?.('track', 'lead', { lead_type: 'floating_button' });
  };

  if (!isVisible) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackClick}
      className="group fixed bottom-6 right-4 z-[9999] flex items-end gap-2 rounded-[1.6rem] bg-[#efe7db] bg-[radial-gradient(circle_at_12px_12px,rgba(7,94,84,0.08)_1px,transparent_1.5px)] bg-[length:24px_24px] p-2 shadow-[0_18px_50px_rgba(26,26,26,0.18)] ring-1 ring-[#d7c8b6] transition-transform duration-300 hover:-translate-y-1 sm:bottom-8 sm:right-8"
      aria-label={w.ariaLabel}
    >
      <span className="relative mb-1 max-w-[180px] rounded-2xl rounded-br-sm bg-[#dcf8c6] px-4 py-3 text-left font-epicene-text text-[0.76rem] font-semibold leading-snug text-[#1f2c34] shadow-sm after:absolute after:bottom-0 after:right-[-6px] after:h-3 after:w-3 after:bg-[#dcf8c6] after:[clip-path:polygon(0_0,100%_100%,0_100%)]">
        {w.bubbleText}
        <span className="mt-1 block text-right text-[0.62rem] font-normal text-[#667781]">
          {w.online}
        </span>
      </span>

      <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-lg">
        <Image
          src="/images/profile/whatsapp-profile.png"
          alt={w.profileAlt}
          fill
          className="object-cover"
          sizes="64px"
        />
        <span className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white ring-2 ring-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-3.5 w-3.5 fill-current"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.6-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.2 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.6 9.2 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </span>
      </span>
      <style jsx>{`
        a {
          animation: whatsapp-float 4s infinite ease-in-out;
        }
        @keyframes whatsapp-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </a>
  );
}
