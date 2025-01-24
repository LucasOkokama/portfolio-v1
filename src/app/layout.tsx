import type { Metadata } from "next";
import { Rethink_Sans, Geist, Inter, Lexend } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({ subsets: ["latin"] });

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
    <html lang="en" className="dark">
      <body
        className={`${rethinkSans.className} before:bg-texture bg-white text-black transition-colors duration-500 before:absolute before:z-[-1] before:h-full before:w-full before:opacity-[3%] dark:bg-neutral-950 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
