'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';

const PHONE_NUMBER = '5512996026915';

type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  message?: string;
  label?: string;
};

export const defaultWhatsAppMessage =
  'Olá! Gostaria de fazer um orçamento com a William Mackenzie Joalheria em Caçapava.';

export function getWhatsAppUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppLink({
  children,
  message = defaultWhatsAppMessage,
  label = 'whatsapp_contact',
  onClick,
  ...props
}: WhatsAppLinkProps) {
  const href = getWhatsAppUrl(message);

  return (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        const win = window as typeof window & {
          gtag?: (...args: unknown[]) => void;
          fbq?: (...args: unknown[]) => void;
          pintrk?: (...args: unknown[]) => void;
        };

        win.gtag?.('event', 'click_whatsapp', {
          event_category: 'lead',
          event_label: label,
        });
        win.fbq?.('track', 'Contact');
        win.pintrk?.('track', 'lead', { lead_type: label });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
