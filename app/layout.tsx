import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Adi Primanto - Frontend Engineer & Web Developer",
  description: "Membangun kehadiran digital yang berkelas, cepat, dan dioptimasi untuk mendominasi pasar. 5+ tahun pengalaman membangun website profesional.",
  keywords: ["web developer", "frontend engineer", "landing page", "website", "Next.js", "React", "Vue.js", "Yogyakarta"],
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
    title: "Adi Primanto - Frontend Engineer & Web Developer",
    description: "Membangun kehadiran digital yang berkelas, cepat, dan dioptimasi untuk mendominasi pasar.",
    type: "website",
    url: "https://adiprimanto.vercel.app",
    siteName: "Adi Primanto",
    images: [
      {
        url: "/adi.webp",
        width: 1200,
        height: 630,
        alt: "Adi Primanto - Frontend Engineer",
      },
    ],
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adi Primanto - Frontend Engineer & Web Developer",
    description: "Membangun kehadiran digital yang berkelas, cepat, dan dioptimasi untuk mendominasi pasar.",
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
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-[#0F0F0F] text-white min-h-screen font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
