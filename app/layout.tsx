import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adi Primanto - Software Engineer & Web Developer",
  description:
    "Membangun kehadiran digital yang berkelas, cepat, dan dioptimasi untuk mendominasi pasar. 5+ tahun pengalaman membangun website profesional.",
  keywords: [
    "web developer",
    "software engineer",
    "landing page",
    "website",
    "Next.js",
    "React",
    "Vue.js",
    "Yogyakarta",
  ],
  authors: [{ name: "Adi Primanto" }],
  metadataBase: new URL("https://adiprimanto.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Adi Primanto - Software Engineer & Web Developer",
    description:
      "Membangun kehadiran digital yang berkelas, cepat, dan dioptimasi untuk mendominasi pasar.",
    type: "website",
    url: "https://adiprimanto.vercel.app",
    siteName: "Adi Primanto",
    images: [
      {
        url: "/adi.webp",
        width: 1200,
        height: 630,
        alt: "Adi Primanto - Software Engineer",
      },
    ],
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adi Primanto - Software Engineer & Web Developer",
    description:
      "Membangun kehadiran digital yang berkelas, cepat, dan dioptimasi untuk mendominasi pasar.",
    images: ["/adi.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          rel="icon"
          href="/favicon-32.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Syne+Mono&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
