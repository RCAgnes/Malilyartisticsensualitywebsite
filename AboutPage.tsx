import { motion, useScroll, useTransform } from "motion/react";
import exampleImage from "figma:asset/38af698dc6016a51282d600a2d4a1bde3cfb4114.png";
import footerImage from "figma:asset/9ac15b7db96d431df52b1af555b404949ac55ed4.png";
import { useState, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import {
  OnlyFansVIPIcon,
  OnlyFansFreeIcon,
  InstagramIcon,
  XIcon,
  Clips4SaleIcon,
  ThroneIcon,
} from "./SocialIcons";

// Import footer images
const legsHeelsImg = "https://images.unsplash.com/photo-1664097106763-15928f3f0a52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdzJTIwaGVlbHMlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzYyODM3MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const dominatrixImg = "https://images.unsplash.com/photo-1618906100703-1215052774db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb21pbmF0cml4JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjgzNzAwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
import carouselImg3 from "figma:asset/1dea98de1fe88fdfb626e108a09e6b8ec32e7d41.png";
import carouselImg5 from "figma:asset/c386fba1910e105343dcfbea3abaef0201262072.png";
import signatureImg1 from "figma:asset/d21e8bb238c245d25449f9aee58b814bdc8afcf9.png";
import signatureImg2 from "figma:asset/00500a54eb74dd773c8fd8b1dbdce224ca3672de.png";
import signatureImg3 from "figma:asset/14c3a6e141d8057a7a50b6074a61e46ea32cc3c5.png";
import newSignature1 from "figma:asset/3ccfd672f2db19db1e5fe898eb26f2f8a4411801.png";
import newSignature2 from "figma:asset/d54a6d0ca739d0723b856a7d9c844d967149e3a3.png";
import newSignature3 from "figma:asset/aaaa7a4f486b96e5a286ef1631dcb84990b3bffd.png";
// Import das imagens corretas para Signature Experiences
import signatureExp3 from "figma:asset/7493b55bc686e7d3e25c2d03d24572252e3a2ef7.png";
import signatureExp5 from "figma:asset/86d0f0df386b43e1c8fe6d0152ce3524f94e8129.png";
import signatureExp7 from "figma:asset/c386fba1910e105343dcfbea3abaef0201262072.png";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const footerImageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.45], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.15, 0.55], [150, 0, 0]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35], [0, 1, 1]);
  
  // Footer image parallax - starts at viewport size, grows to fill frame
  const { scrollYProgress: footerScrollProgress } = useScroll({
    target: footerImageRef,
    offset: ["start end", "end start"]
  });
  
  const footerImageY = useTransform(footerScrollProgress, [0, 0.5, 1], [100, 0, -100]);
  const footerImageScale = useTransform(footerScrollProgress, [0, 0.5, 1], [0.95, 1, 1.5]);

  const footerImages = [
    newSignature1,  // 0
    newSignature2,  // 1
    signatureExp3,  // 2 - Local 3 - Primeira imagem fornecida
    signatureImg1,  // 3
    signatureExp5,  // 4 - Local 5 - Segunda imagem fornecida
    signatureImg3,  // 5
    signatureExp7,  // 6 - Local 7 - Terceira imagem fornecida
    newSignature3,  // 7
  ];


  const socialNetworks = [
    {
      Icon: OnlyFansVIPIcon,
      label: "VIP OnlyFans",
      description: "Exclusive premium content",
      url: "https://onlyfans.com/malilyvip",
    },
    {
      Icon: Clips4SaleIcon,
      label: "Clips4Sale",
      description: "Video clips & exclusive footage",
      url: "https://www.clips4sale.com/studio/314395/malily-legs",
    },
    {
      Icon: ThroneIcon,
      label: "Throne",
      description: "Gift wishlist",
      url: "https://throne.com/malilylegs",
    },
    {
      Icon: OnlyFansFreeIcon,
      label: "Free OnlyFans",
      description: "Free content & previews",
      url: "https://onlyfans.com/sweet.malily",
    },
    {
      Icon: InstagramIcon,
      label: "Instagram",
      description: "Updates & stories",
      url: "https://www.instagram.com/malily_legs/",
    },
    {
      Icon: XIcon,
      label: "X",
      description: "Thoughts & announcements",
      url: "https://x.com/Sweet_Malily",
    },
  ];

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

  return (
    <div className="min-h-screen pb-16 relative">
      {/* Large Hero Image Section - Background throughout entire About content */}
      <div ref={containerRef} className="relative w-full min-h-screen z-0">
        {/* Sticky container for the image */}
        <div className="sticky top-0 w-full h-screen overflow-hidden -z-10">
          {/* Smooth organic background gradient */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: 'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(123, 11, 21, 0.4) 0%, rgba(26, 26, 26, 0.8) 40%, rgba(0, 0, 0, 0.95) 100%)',
            }}
          />
          
          {/* Image with parallax effect */}
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <motion.img
              src={exampleImage}
              alt="Artistic portrait"
              className="w-full h-auto object-contain max-h-[200vh]"
              initial={{ opacity: 0, filter: "brightness(0.7)" }}
              animate={{ opacity: 1, filter: "brightness(1)" }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
            />
            
            {/* Soft organic overlay for better text contrast */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, transparent 20%, transparent 70%, rgba(0, 0, 0, 0.5) 100%)',
              }}
            />
            
            {/* Subtle red glow around the image */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 60% 70% at 50% 40%, transparent 0%, transparent 40%, rgba(123, 11, 21, 0.15) 70%, transparent 100%)',
              }}
            />
          </motion.div>
        </div>

        {/* Content overlays on background - with transparent boxes */}
        <div className="relative z-10">
          {/* Hero Text Section overlay - positioned at top */}
          <div className="min-h-screen flex items-end justify-center">
            {/* Dark gradient appears ONLY when scrolling */}
            <motion.div
              style={{ opacity: gradientOpacity }}
              className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"
            />

            {/* Text Content - Animated with scroll */}
            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="relative w-full px-6 pb-24 pointer-events-none"
            >
              <div className="container mx-auto max-w-4xl">
                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-wine-red/20">
                  <h2 className="text-gradient mb-6" style={{ fontSize: '3.9rem' }}>
                    The Art of Expression
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-ice-white/90 leading-relaxed" style={{ fontSize: '1.7rem' }}>
                      Welcome to a realm where artistry meets sensuality. Each frame, each moment, 
                      is carefully crafted to capture the essence of human expression in its most 
                      intimate and powerful form.
                    </p>
                    
                    <p className="text-ice-white/80 leading-relaxed" style={{ fontSize: '1.7rem' }}>
                      This is more than content—it's a journey into aesthetic exploration, where 
                      lighting, composition, and emotion converge to create something truly unique. 
                      Every piece is designed to evoke, to inspire, and to celebrate the beauty of 
                      the human form.
                    </p>

                    <p className="text-ice-white/80 leading-relaxed" style={{ fontSize: '1.7rem' }}>
                      Through a cinematic lens and artistic vision, I invite you to experience 
                      exclusive content that pushes boundaries while maintaining elegance and 
                      sophistication.
                    </p>
                    
                    <div className="border-l-4 border-wine-red pl-4 mt-6">
                      <p className="text-ice-white/90 italic" style={{ fontSize: '1.7rem' }}>
                        A disciplined muse with a commanding presence. I value preparation, clear boundaries, and aesthetics with purpose. Every session is approached with intention, care, and polish.
                      </p>
                    </div>

                    <div className="border-l-4 border-wine-red pl-4 mt-4">
                      <p className="text-ice-white/70 tracking-widest italic" style={{ fontSize: '1.7rem' }}>
                        Professional • Artistic • Exclusive
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

      {/* Rest of content - Over the background image with transparent boxes */}
      <div className="container mx-auto px-6 pt-16 relative z-20">

        {/* Connect Section - Transparent box over background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 max-w-5xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-wine-red/20"
        >
          <h3 className="text-center text-wine-red mb-8" style={{ fontSize: '2.34rem' }}>Connect With Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialNetworks.map((network, index) => (
              <motion.a
                key={network.label}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 bg-black/60 backdrop-blur-sm border border-wine-red/20 rounded-lg p-4 hover:border-wine-red/50 transition-all group"
              >
                <div className="flex-shrink-0">
                  <network.Icon className="text-wine-red group-hover:scale-110 transition-transform" size={48} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-ice-white group-hover:text-wine-red transition-colors truncate">
                    {network.label}
                  </h4>
                  <p className="text-ice-white/60 text-sm truncate">
                    {network.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Grid with Animated Images - Signature Experiences - Transparent box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 pb-12 max-w-5xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-wine-red/20"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-wine-red" style={{ fontSize: '2.16rem' }}>Signature Experiences</h3>
            <button
              onClick={() => onNavigate("signature-experiences")}
              className="text-ice-white hover:text-wine-red transition-colors group"
              style={{ fontSize: '1.44rem' }}
            >
              Discover more
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {footerImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => setSelectedImage(image)}
                whileHover={{ scale: 1.15, zIndex: 10 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-wine-red via-dark-red to-transparent z-10 transition-opacity duration-300 ${
                    hoveredImage === index ? "opacity-70" : "opacity-0"
                  }`}
                />
                <img
                  src={image}
                  alt={`Moment ${index + 1}`}
                  className="w-full h-40 object-cover transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
        </div>
      </div>

      {/* Large Footer Hero Image Section - ONLY on About page */}
      <div ref={footerImageRef} className="relative w-full h-[300vh] z-0 mt-20">
        {/* Sticky container for the image - Taller to show full body image */}
        <div className="sticky top-0 w-full h-[225vh] overflow-hidden bg-black flex items-center justify-center">
          {/* Image with parallax effect - starts at viewport size, grows with scroll */}
          <motion.div
            style={{ scale: footerImageScale }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <motion.img
              src={footerImage}
              alt="Artistic portrait"
              className="h-full w-auto object-contain"
              style={{ y: footerImageY }}
              initial={{ opacity: 0, filter: "brightness(0.8)" }}
              whileInView={{ opacity: 1, filter: "brightness(1)" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            />
            
            {/* Subtle dark overlay at edges for depth */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.4) 100%)',
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Lightbox Dialog for More Moments */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-black/95 border-wine-red/30">
          <DialogTitle className="sr-only">Image Preview</DialogTitle>
          <DialogDescription className="sr-only">Full size image preview</DialogDescription>
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Full size preview"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}