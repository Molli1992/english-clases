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
  title: "Clases de Inglés Online | Profesora Argentina",
  description:
    "Aprendé inglés con una profesora argentina con experiencia. Clases online personalizadas para todos los niveles. ¡Contactate y comenzá hoy!",
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
      name: "Nombre de la Profesora",
      url: "https://english-clases.netlify.app/",
    },
  ],
  creator: "Nombre de la Profesora",
  metadataBase: new URL("https://english-clases.netlify.app/"),
  openGraph: {
    title: "Clases de Inglés Online | Profesora Argentina",
    description:
      "Clases online de inglés con una profesora argentina. Flexibles, personalizadas y para todos los niveles. ¡Reservá tu clase ahora!",
    url: "https://english-clases.netlify.app/",
    siteName: "Inglés Online con [Nombre]",
    images: [
      {
        url: "https://wgl-dsites.net/unicoach/wp-content/uploads/2020/10/logo-B.png",
        width: 1200,
        height: 630,
        alt: "Clases de inglés online con profesora argentina",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clases de Inglés Online | Profesora Argentina",
    description:
      "Aprendé inglés desde casa con una profesora argentina. Clases online a tu medida. ¡Contactate ahora!",
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
