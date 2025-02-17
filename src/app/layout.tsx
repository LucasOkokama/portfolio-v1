import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/ThemeContext";
import BlackHoleContextProvider from "@/context/BlackHoleContext";

const rethinkSans = Rethink_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Okokama - Frontend Developer",
  description:
    "Explore my professional journey, skills, projects, and accomplishments. Learn about the tools I use and how I approach challenges, with insights into my work process and the impact of my contributions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`relative scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const userTheme = localStorage.getItem("theme") || "system";

                  const systemPrefersDark = window.matchMedia(
                    "(prefers-color-scheme: dark)",
                  ).matches;

                  document.documentElement.classList.toggle(
                    "dark",
                    userTheme === "dark" || (userTheme === "system" && systemPrefersDark),
                  );
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${rethinkSans.className} bg-white text-black transition-colors duration-500 before:absolute before:z-[-1] before:h-full before:w-full before:bg-texture before:opacity-[3%] dark:bg-neutral-950 dark:text-white`}
      >
        <ThemeContextProvider>
          <BlackHoleContextProvider>{children}</BlackHoleContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
