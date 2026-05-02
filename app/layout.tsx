import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustavo Gomes — Full Stack Developer",
  description: "Portfolio de Gustavo Gomes, desenvolvedor Full Stack em Curitiba, PR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-950 text-zinc-100" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
