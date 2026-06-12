import type { Metadata } from "next";
import { Suspense } from "react";
import { Tenor_Sans, Inter, Cardo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";


const tenorSans = Tenor_Sans({
  variable: "--font-pp-hatton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-epicene-text",
  subsets: ["latin"],
  display: "swap",
});

const cardo = Cardo({
  variable: "--font-cardo",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.williammackenzie.com.br"),
  title: {
    default: "William Mackenzie | Joalheria artesanal em Caçapava",
    template: "%s | William Mackenzie",
  },
  description: "Alianças de casamento, anéis de noivado e joias sob medida em ouro 18k em Caçapava-SP. Atendimento com hora marcada e orçamento pelo WhatsApp.",
  keywords: [
    "alta joalheria", "alianças de casamento", "anéis de noivado", "ouro 18k", 
    "diamantes certificados", "IGI diamonds", "joias artesanais", "wedding rings", 
    "engagement rings", "custom jewelry", "Caçapava", "São Paulo"
  ],
  authors: [{ name: "William Mackenzie" }],
  creator: "William Mackenzie",
  publisher: "William Mackenzie",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "William Mackenzie | Joalheria artesanal em Caçapava",
    description: "Alianças, anéis de noivado e joias sob medida em ouro 18k com atendimento local em Caçapava-SP.",
    url: "https://www.williammackenzie.com.br",
    siteName: "William Mackenzie",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "William Mackenzie | Joalheria artesanal em Caçapava",
    description: "Especialista em alianças, anéis de noivado e joias sob medida em ouro 18k.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { LanguageProvider } from "@/context/LanguageContext";
import SchemaOrg from "@/components/SchemaOrg";
import WhatsAppButton from "@/components/WhatsAppButton";
import LanguageWelcome from "@/components/LanguageWelcome";
import SeoHead from "@/components/SeoHead";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${tenorSans.variable} ${inter.variable} ${cardo.variable} antialiased bg-schubart-6 text-schubart-1 overflow-x-hidden`}
      >
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>

        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2655656457933513');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2655656457933513&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Pinterest Tag (official snippet) */}
        <Script id="pinterest-tag" strategy="lazyOnload">
          {`
            !function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var n=window.pintrk;n.queue=[],n.version="3.0";var t=document.createElement("script");t.async=!0,t.src=e;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
            pintrk('load', '549765363375');
            pintrk('page');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://ct.pinterest.com/v3/?tid=549765363375&noscript=1"
          />
        </noscript>

        <SchemaOrg />



        <LanguageProvider>
          <SeoHead />
          <LanguageWelcome />
          <Header />
            {children}
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
