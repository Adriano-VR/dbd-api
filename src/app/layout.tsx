import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Nunito } from "next/font/google";
import  NavBarUI from '@/components/NavBarUI';

export const metadata: Metadata = {
  title: "Dead By Daylight API",
  description: "Criado com Next.js",
};

const nunito = Nunito({  weight: "800",subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <body className={`${nunito.className}  dark min-h-screen antialiased bg-[#121212]`}>
       <Providers>
        <header className="mb-5">
        <NavBarUI />
        </header>
       
          {children}
        </Providers>
    
      </body>
    </html>
  );
}
