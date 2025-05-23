import { Inter } from "next/font/google";
import { motion } from "motion/react";

const inter = Inter({ subsets: ["latin"] });

const infoFadeIn = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.2 * index,
    },
  }),
};

export default function Info({ info }: { info: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {info.map((item: string, index) => (
        <motion.div
          variants={infoFadeIn}
          initial="hidden"
          animate="visible"
          custom={index}
          className="flex items-start gap-2 text-neutral-800 dark:text-neutral-300"
          key={index}
        >
          {/* Spark icon */}
          <svg
            className="mt-[5px]"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            height="15"
            width="15"
          >
            <path d="M9.333333333333332 2.958333333333333c0.8974666666666666 0 1.625 -0.72754 1.625 -1.625h0.75c0 0.8974599999999999 0.7275333333333333 1.625 1.625 1.625v0.75c-0.8974666666666666 0 -1.625 0.72754 -1.625 1.625h-0.75c0 -0.8974599999999999 -0.7275333333333333 -1.625 -1.625 -1.625v-0.75ZM0.6666666666666666 7.333333333333333c2.2091399999999997 0 4 -1.79086 4 -4h1.3333333333333333c0 2.2091399999999997 1.7908666666666666 4 4 4v1.3333333333333333c-2.209133333333333 0 -4 1.7908666666666666 -4 4H4.666666666666666c0 -2.209133333333333 -1.79086 -4 -4 -4v-1.3333333333333333Zm10.833333333333332 2c0 1.1965999999999999 -0.9700666666666666 2.1666666666666665 -2.1666666666666665 2.1666666666666665v1c1.1965999999999999 0 2.1666666666666665 0.9700666666666666 2.1666666666666665 2.1666666666666665h1c0 -1.1965999999999999 0.9700666666666666 -2.1666666666666665 2.1666666666666665 -2.1666666666666665v-1c-1.1965999999999999 0 -2.1666666666666665 -0.9700666666666666 -2.1666666666666665 -2.1666666666666665h-1Z"></path>
          </svg>
          {/* Item text */}
          <p className={`${inter.className} w-full text-sm leading-[26px]`}>
            {item}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
