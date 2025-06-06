import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clases de Inglés Online",
  description:
    "Flexibles, personalizadas y para todos los niveles. ¡Contactate ahora!",
  keywords: [
    "clases de inglés",
    "profesora de inglés",
    "clases online de inglés",
    "aprender inglés",
    "inglés para argentinos",
    "clases particulares de inglés",
    "profesora de inglés online",
    "clases virtuales de inglés",
  ],
  authors: [
    {
      name: "Agustina",
      url: "https://english-clases.netlify.app/",
    },
  ],
  creator: "Agustina",
  metadataBase: new URL("https://english-clases.netlify.app/"),
  openGraph: {
    title: "Clases de Inglés Online",
    description:
      "Flexibles, personalizadas y para todos los niveles. ¡Contactate ahora!",
    url: "https://english-clases.netlify.app/",
    siteName: "Easy English Online",
    images: [
      {
        url: "https://wgl-dsites.net/unicoach/wp-content/uploads/2020/10/logo-B.png",
        width: 1200,
        height: 630,
        alt: "Logo",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clases de Inglés Online",
    description:
      "Flexibles, personalizadas y para todos los niveles. ¡Contactate ahora!",
    images: [
      "https://wgl-dsites.net/unicoach/wp-content/uploads/2020/10/logo-B.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
