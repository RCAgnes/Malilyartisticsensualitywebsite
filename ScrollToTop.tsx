import { motion } from "motion/react";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import logoM from "figma:asset/92c77130a889b180e35939ea5c6d4eb24ff5daaa.png"; // Nova logo M no círculo

export function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: 100 }}
      animate={{
        opacity: showScrollTop ? 1 : 0,
        x: showScrollTop ? 0 : 100,
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed right-6 bottom-8 z-50 flex flex-col items-center gap-1 group"
      style={{ 
        pointerEvents: showScrollTop ? "auto" : "none",
      }}
    >
      {/* Seta discreta acima */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="opacity-60 group-hover:opacity-100 transition-opacity"
      >
        <ChevronUp className="text-wine-red" size={24} strokeWidth={2.5} />
      </motion.div>
      
      {/* Botão com logo M */}
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-r from-wine-red to-dark-red hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-wine-red/50 flex items-center justify-center p-2"
        style={{ 
          filter: 'drop-shadow(0 0 8px rgba(184, 32, 48, 0))',
        }}
        whileHover={{
          filter: 'drop-shadow(0 0 12px rgba(184, 32, 48, 0.6))',
        }}
      >
        <img 
          src={logoM} 
          alt="Scroll to top" 
          className="w-full h-full object-contain filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]"
        />
      </motion.div>
    </motion.button>
  );
}