import styles from "./glich-text.module.css";
import { Geist } from "next/font/google";

const geistSans = Geist({ subsets: ["latin"] });

export default function GlitchText({ text }: { text: string }) {
  return (
    <h2
      className={`${geistSans.className} ${styles.title} relative select-none text-5xl font-extrabold text-neutral-800 before:bg-white/[0.97] before:bg-texture before:bg-blend-lighten after:bg-white/[0.97] after:bg-texture after:bg-blend-lighten dark:text-neutral-100 dark:before:bg-neutral-950/[0.97] dark:before:bg-blend-darken dark:after:bg-neutral-950/[0.97] dark:after:bg-blend-darken`}
      data-title={text}
    >
      {text}
    </h2>
  );
}
