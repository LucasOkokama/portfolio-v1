import styles from "./css/tech.module.css";
import Tech from "./tech";
import { motion } from "framer-motion"; // Certifique-se de que você está importando do pacote correto
import { useEffect } from "react";

interface InfinityTechCarouselProps {
  techs: string[];
  from: string;
  to: string;
  duration: string;
}

const InfinityTechCarousel: React.FC<InfinityTechCarouselProps> = ({
  techs,
  from,
  to,
  duration,
}) => {
  const infinityCarousel = {
    hidden: { x: from },
    visible: {
      x: to,
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className={`${styles.cornersTechCarousel} flex gap-3 overflow-hidden`}>
      {/* First half */}
      <motion.div
        className="flex flex-shrink-0 gap-3"
        variants={infinityCarousel}
        initial="hidden"
        animate="visible"
      >
        {techs.map((item, index) => (
          <Tech item={item} key={index} />
        ))}
      </motion.div>

      {/* Second half */}
      <motion.div
        className="flex flex-shrink-0 gap-3"
        variants={infinityCarousel}
        initial="hidden"
        animate="visible"
      >
        {techs.map((item, index) => (
          <Tech item={item} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default InfinityTechCarousel;
