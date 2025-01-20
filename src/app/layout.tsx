import type { Metadata } from "next";
import { Rethink_Sans, Geist, Inter, Lexend } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({ subsets: ["latin"] })

const geistSans = Geist({ subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu Portfolio",
  description: "Explore meu trabalho profissional, projetos e conquistas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${rethinkSans.className} dark:bg-neutral-950 bg-white text-black dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
