import type { Metadata } from "next";
import { Inter } from "next/font/google";


import "./globals.css";
import Header  from "/src/components/layout/header/Header"
import Footer  from "/src/components/layout/footer/Footer"



import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from '/src/context/providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MuCoin",
  description: "MuYu onChain Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      <script
            defer={true}
            src={"/js/iconfont.js"}
          />
      </head>
      <body className={inter.className}>

          <header>
          <Providers>
            <Header />
          </Providers>
          </header>
          {children}
        <footer>
          <Footer />
        </footer>

      </body>
    </html>
  );
}
