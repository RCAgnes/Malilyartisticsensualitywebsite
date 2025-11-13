import { motion } from "motion/react";
import { Gift, Heart, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import img3 from "figma:asset/416b6f3cdbd6e560cbe3c38b5eeb87150c24cae9.png";
import throneImg from "figma:asset/c23a35fd320859433b476e65e8482eaed82cc443.png";
import amazonImg from "figma:asset/d60a721d0e081d40e7917d183558ced96128662e.png";
import logoM from "figma:asset/ed4fc734782622388f685a8c6d19840663257e0c.png";

export function WishListPage() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-16 relative">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img3})`,
          filter: 'blur(4px)',
          opacity: 0.4,
        }}
      />
      <div className="fixed inset-0 bg-black/70" />
      
      {/* Animated accent light */}
      <div className="fixed inset-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-wine-red/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-30 h-30 rounded-full flex items-center justify-center mx-auto p-2">
              <img src={logoM} alt="Malily Logo" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          <h2 className="text-gradient mb-6">Spoil Me</h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-ice-white/80 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Your generosity creates unforgettable moments of pure bliss. Every gift is a whispered promise of appreciation, a gesture that ignites gratitude and deepens our connection.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-wine-red text-xl mt-4 italic"
          >
            Indulge me, and I'll make it worth your while...
          </motion.p>
        </motion.div>

        {/* Card 1 - Throne Gifts (Content Left, Image Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-7xl mx-auto mb-20"
        >
          <motion.div 
            className="space-y-6 bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-wine-red/15 flex flex-col justify-center aspect-square"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(55, 65, 81, 0.7)" // Glow cinza escuro
            }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="text-ice-white" size={32} />
            </motion.div>

            <motion.h2 
              className="text-wine-red"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Throne Gifts
            </motion.h2>
            <motion.h3 
              className="text-ice-white/90 text-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Premium desires and exclusive indulgences
            </motion.h3>
            <motion.p 
              className="text-ice-white/80 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore my curated collection of luxury items and exclusive wishes. Every gift from this list adds to our connection and shows your devotion in the most elegant way.
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
                asChild
                className="bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-90 text-ice-white px-8 py-6 text-lg transition-all"
              >
                <a
                  href="https://throne.com/malilylegs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>View Throne List</span>
                  <ExternalLink size={16} />
                </a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square"
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
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full"
            >
              <img
                src={throneImg}
                alt="Throne Gifts"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Card 2 - Amazon Wish List (Image Left, Content Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-7xl mx-auto mb-20"
        >
          <motion.div 
            className="relative overflow-hidden rounded-lg lg:order-1 group cursor-pointer aspect-square"
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
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full"
            >
              <img
                src={amazonImg}
                alt="Amazon Gifts"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div 
            className="space-y-6 lg:order-2 bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-wine-red/15 flex flex-col justify-center aspect-square"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(249, 115, 22, 0.6)" // Glow laranja
            }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Heart className="text-ice-white" size={32} />
            </motion.div>

            <motion.h2 
              className="text-wine-red"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Amazon Wish List
            </motion.h2>
            <motion.h3 
              className="text-ice-white/90 text-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Everyday luxuries and special treasures
            </motion.h3>
            <motion.p 
              className="text-ice-white/80 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From practical essentials to delightful surprises, this list contains items that bring joy to my daily life. Your thoughtfulness in choosing from here shows you truly care.
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
                asChild
                className="bg-gradient-to-r from-amber-600 to-orange-700 hover:opacity-90 text-ice-white px-8 py-6 text-lg transition-all"
              >
                <a
                  href="https://www.amazon.ca/hz/wishlist/ls/K3J5E5TTSY4W?ref_=wl_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>View Amazon List</span>
                  <ExternalLink size={16} />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-wine-red/10 border border-wine-red/30 rounded-lg p-8 backdrop-blur-sm">
            <div className="w-12 h-12 mx-auto mb-4">
              <img src={logoM} alt="Malily Logo" className="w-full h-full object-contain" />
            </div>
            <p className="text-ice-white/90 leading-relaxed mb-4" style={{ fontSize: '1.375rem' }}>
              Each gift you send becomes a treasured memory, a tangible expression of your devotion. 
              Your thoughtfulness doesn't go unnoticed—every gesture of generosity is met with 
              genuine appreciation and exclusive acknowledgment.
            </p>
            <p className="text-wine-red italic flex items-center justify-center gap-2" style={{ fontSize: '1.375rem' }}>
              Thank you for making my desires a reality. You won't be forgotten.
              <img src={logoM} alt="M" className="w-18 h-18 inline-block" />
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-10 opacity-20">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Sparkles className="text-wine-red" size={48} />
          </motion.div>
        </div>

        <div className="absolute bottom-1/4 right-10 opacity-20">
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Heart className="text-wine-red" size={40} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}