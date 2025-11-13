import { motion } from "motion/react";
import { Play, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { ScrollToTop } from "./ScrollToTop";

import image1 from "figma:asset/d45cce66d664b8a44995f556da949910fbddd383.png";
import image2 from "figma:asset/2332485c40d187a6fb629ab161ed9f1f127c0704.png";
import image3 from "figma:asset/bbb9df2a6c72436bbc215f66aa137422c263561e.png";
import image4 from "figma:asset/86847964232d34443ea63db395966bafe57c07c9.png";
import image5 from "figma:asset/7afe2dbc5e211529495930db56ab91d2f83781be.png";
import image6 from "figma:asset/cb9ee021580b89b202419e68cd8620931cc61788.png";
import image7 from "figma:asset/3578419a5cafd991b82978ec8ad611af254da24c.png";
import image8 from "figma:asset/1f0c3ca18aaec2d89fecd503772e73d463131efc.png";
import image9 from "figma:asset/5ef18ed40a02f476ae6fea3e2cf4d037fcbc7ac1.png";

// Maru flip-card images
import maruImage04 from "figma:asset/195df9136abb1653b9e8d8c796024f28d6bc4b28.png";
import maruGif04 from "figma:asset/0740185e538d20d0d2c646a5c0024fa2c20a4921.png";

// Gallery novas imagens
import galleryImg6 from "figma:asset/6f1b820cd7bfbea3a1a77fbc87ac6fb9ed6f7489.png";
import galleryImg8 from "figma:asset/aa844305f0fa963a9e3b5622ab65984be6fbd349.png";

// Novos assets compartilhados
import item7Thumbnail from "figma:asset/195df9136abb1653b9e8d8c796024f28d6bc4b28.png"; // Item 7 - THUMBNAIL (foto com braço)
import item7Video from "figma:asset/16ad0708b5a74eb78156ed5cd65984b2e13880f5.png"; // Item 7 - VÍDEO que abre ao clicar
import newImage8 from "figma:asset/ded537f90d5e67a38a958258eb7e9ca338a2b01c.png"; // Item 8 - nova imagem
import newVideo3Thumbnail from "figma:asset/5040798f2609f3cfa87e70f5aa0afa3681c3f806.png"; // Item 8 - thumbnail do vídeo

// VIP Gallery images (originais)
import vipImg1 from "figma:asset/16f41bee7aafcb72a71e27593cff9a020897cbf3.png";
import vipGif from "figma:asset/fac1ee0dbc444b87642b01ef9733a5c9146fa65f.png";
import vipImg2 from "figma:asset/d292989e9b4f569f96cc99c0480c9cb45e2ba675.png";
import vipImg3 from "figma:asset/63c39e3c4235e8f1516c6e83e66330687fc58e25.png";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  videoSrc?: string;
  thumbnail: string;
  locked: boolean;
  title: string;
  isFlipCard?: boolean;
  backImage?: string;
}

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [hasVIPAccess, setHasVIPAccess] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Check if user has VIP access
    const vipAccess = localStorage.getItem("vipAccess");
    const vipExpiry = localStorage.getItem("vipAccessExpiry");
    
    if (vipAccess === "granted" && vipExpiry) {
      const expiryTime = parseInt(vipExpiry);
      if (Date.now() < expiryTime) {
        setHasVIPAccess(true);
      } else {
        // Access expired
        localStorage.removeItem("vipAccess");
        localStorage.removeItem("vipAccessExpiry");
      }
    }
  }, []);

  const handleItemClick = (item: GalleryItem) => {
    if (item.locked && !hasVIPAccess) {
      onNavigate("vip-access");
    } else {
      setSelectedItem(item);
    }
  };

  // Gallery items with video support
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: "image",
      src: image1,
      videoSrc: "",
      thumbnail: image1,
      locked: false,
      title: "Cinematic Shadows",
    },
    {
      id: 2,
      type: "image",
      src: image2,
      videoSrc: "",
      thumbnail: image2,
      locked: false,
      title: "Crimson Elegance",
    },
    {
      id: 3,
      type: "image",
      src: image3,
      videoSrc: "",
      thumbnail: image3,
      locked: false,
      title: "Bound Ascent",
    },
    {
      id: 4,
      type: "image",
      src: image4,
      videoSrc: "",
      thumbnail: image4,
      locked: false,
      title: "Dark Elegance",
    },
    {
      id: 5,
      type: "image",
      src: image5,
      videoSrc: "",
      thumbnail: image5,
      locked: false,
      title: "Blue Essence",
    },
    {
      id: 6,
      type: "image",
      src: galleryImg6,
      videoSrc: "",
      thumbnail: galleryImg6,
      locked: false,
      title: "Red Desire",
    },
    {
      id: 7,
      type: "video",
      src: item7Thumbnail,
      videoSrc: item7Video, // Vídeo/GIF que abre ao clicar
      thumbnail: item7Thumbnail,
      locked: false,
      title: "Crimson Allure",
      isFlipCard: false,
      backImage: undefined,
    },
    {
      id: 8,
      type: "video",
      src: newImage8,
      videoSrc: newVideo3Thumbnail, // Vídeo que abre ao clicar (terceiro compartilhado)
      thumbnail: newImage8, // Segunda imagem como thumbnail
      locked: false,
      title: "Leather Dreams",
    },
    {
      id: 9,
      type: "image",
      src: image9,
      videoSrc: "",
      thumbnail: image9,
      locked: false,
      title: "Seductive Lines",
    },
    {
      id: 10,
      type: "image",
      src: vipImg1,
      videoSrc: "",
      thumbnail: vipImg1,
      locked: true,
      title: "Purple Passion",
    },
    {
      id: 11,
      type: "image",
      src: vipGif,
      thumbnail: vipGif,
      locked: true,
      title: "Golden Goddess",
    },
    {
      id: 12,
      type: "image",
      src: vipImg3,
      videoSrc: "",
      thumbnail: vipImg3,
      locked: true,
      title: "Dominant Desires",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-gradient mb-4">A Peek at the Goddess Malily</h2>
          <p className="text-ice-white/70 max-w-3xl mx-auto">
            A disciplined look at the Goddess collection of artistic moments, captured through the lens of desire. With dominant lines, silent poise, and sculpted muscle; desire sparked by control, hard lines with quiet authority, and precise control that invites a closer session.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative group cursor-pointer"
              onClick={() => handleItemClick(item)}
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative overflow-hidden rounded-lg aspect-[3/4] bg-deep-gray"
                animate={{
                  rotateY: item.isFlipCard && flippedCards.has(item.id) ? 180 : 0
                }}
                transition={{ duration: 0.6 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  {/* Image */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${item.id === 5 ? 'scale-125' : ''}`}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

                  {/* Locked Overlay */}
                  {item.locked && !hasVIPAccess && (
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <Lock className="text-wine-red mx-auto mb-2" size={40} />
                        <p className="text-ice-white">VIP Members Only</p>
                        <p className="text-wine-red text-sm mt-2">Click to unlock</p>
                      </div>
                    </div>
                  )}

                  {/* Video Icon */}
                  {item.type === "video" && !item.locked && (
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-wine-red/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="text-ice-white" size={20} fill="currentColor" />
                      </div>
                    </div>
                  )}

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-wine-red/10" style={{ filter: "blur(20px)" }} />
                  </div>
                </div>

                {/* Back of card (only for flip cards) */}
                {item.isFlipCard && item.backImage && (
                  <div
                    className="absolute inset-0"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <img
                      src={item.backImage}
                      alt={`${item.title} - Back`}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-30" />
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        {!hasVIPAccess && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 max-w-3xl mx-auto text-center"
          >
            <div className="bg-wine-red/10 border border-wine-red/30 rounded-lg p-8 backdrop-blur-sm">
              <Lock className="text-wine-red mx-auto mb-4" size={32} />
              <h3 className="text-ice-white mb-3">Unlock Full Access</h3>
              <p className="text-ice-white/70 mb-6">
                Join my exclusive VIP community to access the complete gallery of premium content, 
                including exclusive photos and videos not available anywhere else.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button
                  onClick={() => onNavigate("vip-access")}
                  className="inline-block px-8 py-3 bg-wine-red/20 border border-wine-red text-ice-white text-lg rounded-full hover:bg-wine-red/30 transition-all"
                >
                  Enter Access Code
                </button>
                <a
                  href="https://onlyfans.com/malilyvip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-wine-red to-dark-red text-ice-white text-lg rounded-full hover:opacity-90 transition-opacity"
                >
                  Subscribe to VIP
                </a>
              </div>
              <div className="border-t border-wine-red/20 pt-6">
                <h3 className="text-wine-red mb-6 text-center">How to Get Access:</h3>
                <ul className="text-ice-white/60 space-y-2 text-left max-w-md mx-auto" style={{ fontSize: '1.6em' }}>
                  <li>1. Subscribe to VIP OnlyFans</li>
                  <li>2. Request your access code via DM on OnlyFans</li>
                  <li>3. Receive your code within up to 5 business days</li>
                  <li>4. Enter your code here to unlock VIP content</li>
                </ul>
                <p className="text-ice-white/40 mt-4 italic" style={{ fontSize: '1.6em' }}>
                  Access codes are valid for your subscription duration (30 days, 3 months, or 6 months)
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-5xl bg-black/95 border-wine-red/30 p-0">
          <DialogTitle className="sr-only">{selectedItem?.title}</DialogTitle>
          <DialogDescription className="sr-only">
            {selectedItem?.type === "video" ? "Video content" : "Image preview"}
          </DialogDescription>
          
          {selectedItem && (
            <div className="relative">
              {/* Show image (works for both static images and GIFs) */}
              <img
                src={selectedItem.videoSrc || selectedItem.src}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-ice-white text-xl">{selectedItem.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}