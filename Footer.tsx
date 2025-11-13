import { motion } from "motion/react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";
import {
  OnlyFansVIPIcon,
  OnlyFansFreeIcon,
  InstagramIcon,
  XIcon,
  Clips4SaleIcon,
  ThroneIcon,
  AmazonIcon,
} from "./SocialIcons";
import logoMalily from "figma:asset/87b1546970a44178567b0811a659a86811054e65.png";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");

  const socialLinks = [
    {
      Icon: OnlyFansVIPIcon,
      label: "VIP OnlyFans",
      url: "https://onlyfans.com/malilyvip",
      color: "text-wine-red",
    },
    {
      Icon: OnlyFansFreeIcon,
      label: "Free OnlyFans",
      url: "https://onlyfans.com/sweet.malily",
      color: "text-wine-red",
    },
    {
      Icon: InstagramIcon,
      label: "Instagram",
      url: "https://www.instagram.com/malily_legs/",
      color: "text-wine-red",
    },
    {
      Icon: XIcon,
      label: "X",
      url: "https://x.com/Sweet_Malily",
      color: "text-wine-red",
    },
    {
      Icon: Clips4SaleIcon,
      label: "Clips4Sale",
      url: "https://www.clips4sale.com/studio/314395/malily-legs",
      color: "text-wine-red",
    },
    {
      Icon: ThroneIcon,
      label: "Throne",
      url: "https://throne.com/malilylegs",
      color: "text-wine-red",
    },
  ];

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Gallery", id: "gallery" },
    { label: "Booking", id: "booking-session" },
    { label: "Blog", id: "blog" },
    { label: "Wish List", id: "wishlist" },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing! You'll receive exclusive updates.");
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-deep-gray/10 backdrop-blur-sm border-t border-wine-red/20 py-12 z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 max-w-5xl mx-auto">
          {/* Social Links */}
          <div>
            <h4 className="text-wine-red mb-4" style={{ fontSize: '1.4rem' }}>Connect With Me</h4>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.Icon className={social.color} size={50} />
                </motion.a>
              ))}
            </div>
            <p className="text-ice-white/50 mt-3" style={{ fontSize: '1.3rem', lineHeight: '1.4' }}>
              Follow for exclusive content & updates
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-wine-red mb-4" style={{ fontSize: '1.4rem' }}>Newsletter</h4>
            <p className="text-ice-white/70 mb-4" style={{ fontSize: '1.375rem' }}>
              Subscribe for exclusive updates and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-black/50 border-wine-red/30 text-ice-white focus:border-wine-red"
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-wine-red to-dark-red hover:opacity-90 text-ice-white text-lg rounded-full"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Legal Notice */}
          <div>
            <h4 className="text-wine-red mb-4" style={{ fontSize: '1.4rem' }}>Notice</h4>
            <p className="text-ice-white/70 leading-relaxed mb-3" style={{ fontSize: '1.1rem' }}>
              This site contains adult content intended for individuals 18 years or older.
              All content is for artistic and professional purposes only.
            </p>
            <p className="text-ice-white/50" style={{ fontSize: '1.1rem' }}>
              By using this site, you agree to our terms and confirm you are of legal age.
            </p>
          </div>
        </div>

        <div className="border-t border-wine-red/20 pt-8 text-center space-y-3">
          <div className="flex justify-center">
            <img 
              src={logoMalily} 
              alt="Malily" 
              className="h-16 w-auto"
            />
          </div>
          <p className="text-ice-white/50 text-sm">
            © 2025 All rights reserved. Contains adult content (18+).
          </p>
          <p className="text-ice-white/40 text-xs">
            Created by{" "}
            <a 
              href="https://racreativedesigner.framer.website/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-wine-red transition-colors"
            >
              RA Creative Designer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}