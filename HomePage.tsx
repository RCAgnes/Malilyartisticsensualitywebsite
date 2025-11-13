import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import logoMalily from "figma:asset/87b1546970a44178567b0811a659a86811054e65.png";
import heroBackground from "figma:asset/c80fc9c293142a534b9bba70de5737ab51e0f164.png"; // Nova imagem: panturrilhas

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [showAgeVerification, setShowAgeVerification] = useState(false);

  const handleEnterClick = () => {
    setShowAgeVerification(true);
  };

  const handleAgeConfirm = (isOver18: boolean) => {
    if (isOver18) {
      onNavigate("about");
    } else {
      setShowAgeVerification(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="fixed inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: 'center center',
          backgroundSize: 'auto 100%', // Imagem no tamanho original mostrando pernas inteiras
          filter: 'blur(3px)',
          opacity: 0.9,
          zIndex: 0,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-deep-gray/50 to-dark-red/70">
        {/* Animated overlay effect */}
        <motion.div
          className="absolute inset-0 bg-wine-red/10"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Simulated light beams */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-wine-red/20 rounded-full blur-3xl"
          animate={{
            y: [0, 100, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-dark-red/20 rounded-full blur-3xl"
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.img 
              src={logoMalily} 
              alt="Malily" 
              className="h-32 w-auto mx-auto mb-4"
              whileHover={{ 
                scale: 1.5,
                filter: "drop-shadow(0 0 25px rgba(184, 32, 48, 0.9))"
              }}
              transition={{ duration: 0.3 }}
              style={{
                filter: "drop-shadow(0 0 20px rgba(0, 0, 0, 0.9))" // Glow black
              }}
            />
            <h2 className="text-ice-white mt-2" style={{ fontSize: '2.5rem' }}>Calf Queen and Dominatrix</h2>
          </motion.div>

          <motion.p
            className="text-ice-white/80 mb-12 text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Your Asian Goddess with legs to die for
          </motion.p>

          <motion.button
            onClick={handleEnterClick}
            className="group relative px-12 py-4 bg-gradient-to-r from-wine-red to-dark-red text-ice-white text-lg rounded-full hover:opacity-90 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 tracking-wider">
              Enter Site
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-wine-red" size={32} />
      </motion.div>

      {/* Legal Notice - Adult Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-6"
      >
        <div className="bg-black/60 backdrop-blur-sm border border-wine-red/30 rounded-lg p-4 text-center">
          <p className="text-ice-white/70" style={{ fontSize: '1.14rem', lineHeight: '1.5' }}>
            ⚠️{" "}
            <span className="text-wine-red">
              18+ Content Warning:
            </span>{" "}
            This site contains adult content of a sensual
            nature. By entering, you confirm you are 18 years or
            older and agree to view such material.
          </p>
        </div>
      </motion.div>

      {/* Age Verification Pop-up */}
      <AnimatePresence>
        {showAgeVerification && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-gradient-to-br from-deep-gray/95 to-black/95 border-2 border-wine-red/50 rounded-2xl p-8 md:p-12 max-w-md w-full shadow-[0_0_50px_rgba(184,32,48,0.3)]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center space-y-6"
              >
                <div className="text-6xl mb-4">⚠️</div>
                <h2 className="text-wine-red mb-4" style={{ fontSize: '3.75rem' }}>Age Verification</h2>
                <p className="text-ice-white/90 leading-relaxed" style={{ fontSize: '1.375rem' }}>
                  This website contains adult content of a sensual nature.
                </p>
                <p className="text-ice-white/90" style={{ fontSize: '1.375rem' }}>
                  Are you 18 years of age or older?
                </p>

                <div className="flex gap-4 mt-8">
                  <motion.button
                    onClick={() => handleAgeConfirm(true)}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-wine-red to-dark-red text-ice-white rounded-full hover:opacity-90 transition-all duration-300"
                    style={{ fontSize: '1.375rem' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    CONFIRM
                    <div className="opacity-75 mt-1" style={{ fontSize: '1rem' }}>Yes, I am 18+</div>
                  </motion.button>
                  <motion.button
                    onClick={() => handleAgeConfirm(false)}
                    className="flex-1 px-6 py-4 bg-gray-700/50 border border-gray-600 text-ice-white rounded-full hover:bg-gray-700/70 transition-all duration-300"
                    style={{ fontSize: '1.375rem' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    EXIT
                    <div className="opacity-75 mt-1" style={{ fontSize: '1rem' }}>No, I am not 18+</div>
                  </motion.button>
                </div>

                <p className="text-ice-white/50 mt-6" style={{ fontSize: '1rem' }}>
                  By clicking CONFIRM, you certify that you are of legal age and agree to our terms.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}