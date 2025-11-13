import { motion } from "motion/react";
import { Link2 } from "lucide-react";
import img3 from "figma:asset/d213a03ed966da47f0efd26edfaaec50c9f270d4.png";
import sideImage from "figma:asset/cc220edc71377592499cada86a617cc3d845a13e.png";

interface ScreeningProcessPageProps {
  onNavigate: (page: string) => void;
}

export function ScreeningProcessPage({ onNavigate }: ScreeningProcessPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      {/* Fixed Background Image on Left - Desktop */}
      <div 
        className="fixed top-0 left-0 bottom-0 w-1/2 bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage: `url(${sideImage})`,
        }}
      />

      {/* Mobile Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center lg:hidden"
        style={{
          backgroundImage: `url(${img3})`,
          filter: 'blur(4px)',
          opacity: 0.85,
        }}
      />
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm lg:hidden" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-[80vh] flex items-end lg:items-center justify-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 bg-black/60 backdrop-blur-md border border-wine-red/30 rounded-lg p-8 md:p-12 shadow-2xl mb-8 lg:mb-0"
          >
            {/* Decorative Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <div className="w-16 h-16 rounded-full bg-wine-red/20 flex items-center justify-center border border-wine-red/40">
                <Link2 className="text-wine-red" size={32} />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-8 text-wine-red"
            >
              Screening Process
            </motion.h1>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 text-ice-white/90"
            >
              <p className="text-center">
                For safety and verification, one of the following is required:
              </p>

              <div className="bg-wine-red/10 border border-wine-red/30 rounded-lg p-6 space-y-3">
                <p className="flex items-start gap-3">
                  <span className="text-wine-red mt-1">•</span>
                  <span>A reference from a previous professional, or</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-wine-red mt-1">•</span>
                  <span>A valid government-issued ID (for first-time clients).</span>
                </p>
              </div>

              <p className="text-ice-white/80 text-center leading-relaxed">
                Your information remains confidential and used only for verification and security purposes.
                Professionalism, privacy, and mutual respect are always upheld.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex justify-center"
            >
              <motion.button
                onClick={() => onNavigate("booking-session")}
                className="group relative px-10 py-3.5 bg-gradient-to-r from-wine-red to-dark-red text-ice-white rounded-full transition-all duration-300 flex items-center justify-center gap-3 border-2 border-wine-red"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link2 size={22} />
                <span className="tracking-wider text-xl">Booking a Session</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
