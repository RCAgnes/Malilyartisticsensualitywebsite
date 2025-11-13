import { motion } from "motion/react";
import { Button } from "./ui/button";
import { useState } from "react";
import img1 from "figma:asset/fac89e2193fe04f33fee3f63029a6b3ccefd64f2.png";
import img2 from "figma:asset/c5ee1994fe286f59c1056705679f46369ab4e484.png";
import img3 from "figma:asset/c127733ec7674fdb08a9f879fe31aad29c482a76.png";
import backgroundImg from "figma:asset/e23e2d6b438778d29709d77c13c77298ac21aad6.png";

interface BespokeSessionsPageProps {
  onNavigate: (page: string, postId?: string | number, bookingData?: { sessionLength?: string; experienceType?: string }) => void;
}

export function BespokeSessionsPage({ onNavigate }: BespokeSessionsPageProps) {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-16 relative">
      {/* Fixed Background Image with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          filter: 'blur(3px)',
          opacity: 0.9,
          zIndex: 0,
        }}
      />
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h1 
            className="text-wine-red mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Bespoke Sessions — Crafted to you.
          </motion.h1>
          <motion.p 
            className="text-ice-white/90 mb-8"
            style={{ fontSize: '1.5625rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Curated formats and tailored dynamics to fit your limits, desires, and vision.
          </motion.p>
          <motion.p 
            className="text-ice-white/80"
            style={{ fontSize: '1.375rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Every detail is refined to you: boundaries, pacing, tone, and scenario. Choose a Signature Duo or request a customized script, role-play, or commissioned video. Your experience, your standards, executed with precision.
          </motion.p>
        </motion.div>

        {/* Card 1 - Duo Sessions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-7xl mx-auto mb-20"
        >
          <motion.div 
            className="space-y-6 bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-wine-red/15 flex flex-col justify-center h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              y: -5
            }}
          >
            <motion.h2 
              className="text-wine-red"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Duo Sessions
            </motion.h2>
            <motion.h3 
              className="text-ice-white/90 text-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Two dommes, one elevated experience.
            </motion.h3>
            <motion.p 
              className="text-ice-white/80 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Elevate your experience with a powerful duo: two of the most refined and commanding Asian Dommes in North America.
            </motion.p>
            <motion.p 
              className="text-ice-white/80 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I am pleased to offer collaborative sessions with the distinguished and enigmatic Mistress Siren Thorn.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => onNavigate("booking", undefined, {
                  sessionLength: "Bespoke Sessions — by private quote (please inquire)",
                  experienceType: "Duo Session"
                })}
                className="bg-wine-red hover:bg-wine-red/90 text-ice-white px-8 py-6 text-lg transition-all"
              >
                Book Duo Session
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative overflow-hidden rounded-lg group cursor-pointer h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onMouseEnter={() => setHoveredImage(1)}
            onMouseLeave={() => setHoveredImage(null)}
            whileHover={{ scale: 1.05 }}
          >
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-wine-red/60 via-dark-red/30 to-transparent z-10 transition-opacity duration-300 ${
                hoveredImage === 1 ? "opacity-100" : "opacity-40"
              }`} 
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
              <div className="absolute inset-0 bg-wine-red/10" style={{ filter: "blur(20px)" }} />
            </div>
            <motion.img
              src={img1}
              alt="Duo Session"
              className="w-full h-auto object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </motion.div>

        {/* Card 2 - Tailored Role-Play */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-7xl mx-auto mb-20"
        >
          <motion.div 
            className="relative overflow-hidden rounded-lg lg:order-1 group cursor-pointer h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onMouseEnter={() => setHoveredImage(2)}
            onMouseLeave={() => setHoveredImage(null)}
            whileHover={{ scale: 1.05 }}
          >
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-wine-red/60 via-dark-red/30 to-transparent z-10 transition-opacity duration-300 ${
                hoveredImage === 2 ? "opacity-100" : "opacity-40"
              }`} 
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
              <div className="absolute inset-0 bg-wine-red/10" style={{ filter: "blur(20px)" }} />
            </div>
            <motion.img
              src={img2}
              alt="Tailored Role-Play"
              className="w-full h-auto object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
          <motion.div 
            className="space-y-6 lg:order-2 bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-wine-red/15 flex flex-col justify-center h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              y: -5
            }}
          >
            <motion.h2 
              className="text-wine-red"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Tailored Role-Play
            </motion.h2>
            <motion.h3 
              className="text-ice-white/90 text-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your scenario, my precision.
            </motion.h3>
            <motion.p 
              className="text-ice-white/80 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bring your outline and I transform it into a cohesive, respectful script with clear limits and tone. Perfect for immersive dynamics with pre-approved cues and pacing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => onNavigate("booking", undefined, {
                  sessionLength: "Bespoke Sessions — by private quote (please inquire)",
                  experienceType: "Tailored Role-Play"
                })}
                className="bg-wine-red hover:bg-wine-red/90 text-ice-white px-8 py-6 text-lg transition-all"
              >
                Book Tailored Role-Play
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Card 3 - Commissioned Custom Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-7xl mx-auto"
        >
          <motion.div 
            className="space-y-6 bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-wine-red/15 flex flex-col justify-center h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              y: -5
            }}
          >
            <motion.h2 
              className="text-wine-red text-4xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Commissioned Custom Video
            </motion.h2>
            <motion.h3 
              className="text-ice-white/90 text-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Made-to-order, on brief.
            </motion.h3>
            <motion.p 
              className="text-ice-white/80 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A made-to-order clip produced to your guidelines, aesthetic, tone and boundaries agreed in advance. Discreet, polished, and purpose-built.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => onNavigate("booking", undefined, {
                  sessionLength: "Bespoke Sessions — by private quote (please inquire)",
                  experienceType: "Commissioned Custom Video"
                })}
                className="bg-wine-red hover:bg-wine-red/90 text-ice-white px-8 py-6 text-lg transition-all"
              >
                Request a Custom Video
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative overflow-hidden rounded-lg group cursor-pointer h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onMouseEnter={() => setHoveredImage(3)}
            onMouseLeave={() => setHoveredImage(null)}
            whileHover={{ scale: 1.05 }}
          >
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-wine-red/60 via-dark-red/30 to-transparent z-10 transition-opacity duration-300 ${
                hoveredImage === 3 ? "opacity-100" : "opacity-40"
              }`} 
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
              <div className="absolute inset-0 bg-wine-red/10" style={{ filter: "blur(20px)" }} />
            </div>
            <motion.img
              src={img3}
              alt="Custom Video"
              className="w-full h-auto object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}