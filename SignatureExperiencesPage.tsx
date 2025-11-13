import { motion } from "motion/react";
import img2 from "figma:asset/4819aa57c77ed4a9147401913627b4a577b23f56.png";

export function SignatureExperiencesPage() {
  const experiences = [
    "Armpit fetish/worship",
    "Abs and belly button worship",
    "Ballbusting",
    "Bondage/restraints",
    "Calves worship",
    "CBT",
    "CEI",
    "Chastity",
    "Corporal punishment",
    "Facesitting (non-intimate)",
    "Face slapping",
    "Fantasy Wrestling",
    "Fetish clothing (leather, latex, etc.)",
    "Feminization",
    "Foot fetish and worship",
    "Golden showers",
    "Headscissors",
    "Humiliation",
    "Massage (for Mistress, at my direction)",
    "Nipple torture",
    "Objectification",
    "Orgasm control",
    "Pantyhose/nylon fetish",
    "Rough body play",
    "SPH",
    "Spanking",
    "Strap-on",
    "Tickling",
    "Emotional discipline through guided expression",
    "The art of stillness and power",
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      {/* Fixed Full Image on Right - Desktop */}
      <div 
        className="fixed top-0 right-0 bottom-0 w-1/2 bg-no-repeat bg-contain bg-center hidden lg:block"
        style={{
          backgroundImage: `url(${img2})`,
        }}
      />

      {/* Mobile Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center lg:hidden"
        style={{
          backgroundImage: `url(${img2})`,
          filter: 'blur(4px)',
          opacity: 0.3,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-[80vh] flex items-end lg:items-center justify-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-md border border-wine-red/40 rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] mb-8 lg:mb-0"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-6 text-wine-red"
            >
              Signature Experiences (Kinks)
            </motion.h1>

            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-ice-white/90 mb-6"
            >
              <p className="leading-relaxed text-center">
                I lead all experiences with creativity, precision, and a focus on self-awareness. 
                Each session explores confidence, posture, and the beauty of controlled movement, 
                where presence becomes art, and intention becomes expression. 
                Every activity is entirely professional, clothed, and guided with consent. 
                Boundaries and communication are always respected.
              </p>
            </motion.div>

            {/* Experience List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-1.5 mb-6"
            >
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + (index * 0.05),
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.05, color: "#b82030" }}
                  className="text-ice-white/90 transition-all duration-250 cursor-default py-2 px-4 rounded-lg hover:bg-wine-red/10"
                  style={{ fontSize: '1.25rem', lineHeight: '1.6' }}
                >
                  • {experience}
                </motion.div>
              ))}
            </motion.div>

            {/* Safety & Boundaries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="border-t border-wine-red/20 pt-6 space-y-4"
            >
              <h3 className="text-wine-red text-center mb-4">Safety & Boundaries</h3>
              
              <div className="space-y-3 text-ice-white/80">
                <p>
                  If you don't see your specific interest or fetish listed, feel free to ask. I'll let you know whether it's something I enjoy or am open to exploring.     
                </p>
                <p>
                  Any nudity on my part is entirely at my discretion. You are not allowed to touch me in intimate areas under any circumstance. For activities that require close physical contact, such as facesitting, I will always remain clothed.
                </p>
                <p>
                  Your boundaries will be honored at all times, and safewords will be respected.
                </p>
                <p className="text-[20px]">
                  Likewise, if you are ever unsure whether something is acceptable or enjoyable for me, ask politely and wait for my consent before proceeding.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}