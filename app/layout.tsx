import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "宮崎サウンドミステリーツアー｜音×ARで巡る体験型観光",
  description:
    "スマホひとつで物語が始まる。音とARで巡る、新しい宮崎観光体験。",
  metadataBase: new URL("https://www.miyazaki-mystery.com"),
  openGraph: {
    title: "宮崎サウンドミステリーツアー｜音×ARで巡る体験型観光",
    description:
      "スマホひとつで物語が始まる。音とARで巡る、新しい宮崎観光体験。",
    url: "https://www.miyazaki-mystery.com/",
    siteName: "宮崎サウンドミステリーツアー",
     images: [
    {
      url: "/images/hero-sp-960.webp",
      width: 960,
      height: 533,
      alt: "宮崎サウンドミステリーツアー",
    },
  ],
  locale: "ja_JP",
  type: "website",
},
 twitter: {
  card: "summary_large_image",
  title: "宮崎サウンドミステリーツアー｜音×ARで巡る体験型観光",
  description:
    "スマホひとつで物語が始まる。音とARで巡る、新しい宮崎観光体験。",
  images: ["/images/hero-sp-960.webp"],
},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* ===== Google Tag Manager ===== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M88TQHCV');
`,
          }}
        />
        {/* ===== End Google Tag Manager ===== */}

  {/* ===== Microsoft Clarity ===== */}
        <script
  dangerouslySetInnerHTML={{
    __html: `
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments);};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "ux2zqymm48");
`,
  }}
/>

        {/* ===== End Microsoft Clarity ===== */}


      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ===== Google Tag Manager (noscript) ===== */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M88TQHCV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* ===== End Google Tag Manager (noscript) ===== */}

        {children}
      </body>
    </html>
  );
}
