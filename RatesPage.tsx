import { motion } from "motion/react";
import { Mail, CreditCard, Gift, Crown, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import img1 from "figma:asset/9d69b3a74b757f29e98f418c38f8e38f17dbf040.png";
import logoM from "figma:asset/ed4fc734782622388f685a8c6d19840663257e0c.png";

export function RatesPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string) => {
    try {
      // Fallback method for clipboard
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        setCopiedEmail(true);
        toast.success("Email copied to clipboard!");
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    } catch (err) {
      toast.error("Failed to copy. Please copy manually.");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      {/* Fixed Background Image on Left */}
      <div 
        className="fixed top-0 left-0 bottom-0 w-1/2 bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      />

      {/* Mobile Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center lg:hidden"
        style={{
          backgroundImage: `url(${img1})`,
          filter: 'blur(4px)',
          opacity: 0.3,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-[80vh] flex items-end lg:items-center justify-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 bg-wine-red/70 backdrop-blur-sm border border-wine-red/40 rounded-lg p-8 md:p-12 shadow-2xl mb-8 lg:mb-0"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-8 text-wine-red"
            >
              Rates
            </motion.h1>

            {/* Rates List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              <div className="flex justify-between items-center border-b border-ice-white/20 pb-3">
                <span className="text-ice-white text-xl">1 hour</span>
                <span className="text-ice-white text-xl">$500</span>
              </div>
              <div className="flex justify-between items-center border-b border-ice-white/20 pb-3">
                <div className="flex flex-col">
                  <span className="text-ice-white text-xl">1.5 hours</span>
                  <span className="text-ice-white/70 text-sm italic">(my preferred length for session)</span>
                </div>
                <span className="text-ice-white text-xl">$750</span>
              </div>
              <div className="flex justify-between items-center border-b border-ice-white/20 pb-3">
                <span className="text-ice-white text-xl">2 hours</span>
                <span className="text-ice-white text-xl">$1000</span>
              </div>
              <div className="flex justify-between items-center border-b border-ice-white/20 pb-3">
                <span className="text-ice-white text-xl">2.5 hours</span>
                <span className="text-ice-white text-xl">$1250</span>
              </div>
              <div className="flex justify-between items-center border-b border-ice-white/20 pb-3">
                <span className="text-ice-white text-xl">3 hours</span>
                <span className="text-ice-white text-xl">$1500</span>
              </div>
              <div className="flex justify-between items-center border-b border-ice-white/20 pb-3">
                <span className="text-ice-white text-xl">Overnight</span>
                <span className="text-ice-white text-xl">$3000+</span>
              </div>
              <div className="pt-4 border-t border-ice-white/30 mt-6">
                <div className="text-ice-white/90 text-lg italic">
                  <p className="mb-2">Bespoke Sessions — by private quote</p>
                  <p className="text-sm text-ice-white/70">(custom proposal based on scope and format)</p>
                </div>
              </div>
            </motion.div>

            {/* Payment Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-black/30 rounded-lg p-8 mb-8 space-y-6 text-ice-white/90"
            >
              <div className="text-center mb-6">
                <h3 className="text-wine-red mb-3">Payment Information</h3>
                <p className="text-ice-white/80">
                  A <span className="text-ice-white/80">50% online deposit</span> is required to secure your booking.
                </p>
                <p className="text-ice-white/80 mt-2">
                  The remaining balance is paid in <span className="text-ice-white/80">cash</span> at the beginning of the session.
                </p>
              </div>

              {/* Payment Methods Grid */}
              <div>
                <h4 className="text-ice-white text-center mb-6">Accepted Deposit Methods:</h4>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {/* E-Transfer */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <button
                      onClick={() => copyToClipboard("malily.legs@gmail.com")}
                      className="group relative mb-3"
                      title="Click to copy email"
                    >
                      <div className="w-20 h-20 bg-wine-red/20 rounded-full flex items-center justify-center hover:bg-wine-red/30 transition-all border-2 border-wine-red/40 hover:border-wine-red cursor-pointer">
                        <Mail className="text-wine-red group-hover:text-ice-white transition-colors" size={36} />
                      </div>
                      {copiedEmail && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-wine-red text-ice-white px-2 py-1 rounded text-sm whitespace-nowrap">
                          Copied!
                        </div>
                      )}
                    </button>
                    <p className="text-ice-white/90 text-sm text-center whitespace-nowrap">E-Transfer</p>
                    <p className="text-ice-white/70 text-xs whitespace-nowrap">(Preferred)</p>
                  </motion.div>

                  {/* PayPal */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <a
                      href="mailto:malily.legs@gmail.com?subject=PayPal Payment Method Inquiry"
                      className="group mb-3"
                      title="Click to email about PayPal"
                    >
                      <div className="w-20 h-20 bg-wine-red/20 rounded-full flex items-center justify-center hover:bg-wine-red/30 transition-all border-2 border-wine-red/40 hover:border-wine-red cursor-pointer">
                        <CreditCard className="text-wine-red group-hover:text-ice-white transition-colors" size={36} />
                      </div>
                    </a>
                    <p className="text-ice-white/90 text-sm text-center">PayPal</p>
                  </motion.div>

                  {/* Amazon Gift Card */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <a
                      href="https://www.amazon.ca/dp/B07P68FH74?ref=altParentAsins_treatment_text_from_Any_to_Amazon&th=1&gpo=250"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mb-3"
                      title="Click to purchase Amazon Gift Card"
                    >
                      <div className="w-20 h-20 bg-wine-red/20 rounded-full flex items-center justify-center hover:bg-wine-red/30 transition-all border-2 border-wine-red/40 hover:border-wine-red cursor-pointer">
                        <Gift className="text-wine-red group-hover:text-ice-white transition-colors" size={36} />
                      </div>
                    </a>
                    <p className="text-ice-white/90 text-sm text-center">Amazon</p>
                    <p className="text-ice-white/70 text-xs whitespace-nowrap">Gift Card</p>
                  </motion.div>

                  {/* Throne Wishlist */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <a
                      href="https://throne.com/malilylegs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mb-3"
                      title="Click to visit Throne Wishlist"
                    >
                      <div className="w-20 h-20 bg-wine-red/20 rounded-full flex items-center justify-center hover:bg-wine-red/30 transition-all border-2 border-wine-red/40 hover:border-wine-red cursor-pointer">
                        <Crown className="text-wine-red group-hover:text-ice-white transition-colors" size={36} />
                      </div>
                    </a>
                    <p className="text-ice-white/90 text-sm text-center">Throne</p>
                    <p className="text-ice-white/70 text-xs">Wishlist</p>
                  </motion.div>
                </div>
              </div>

              <p className="text-ice-white/70 text-center italic mt-6 pt-6 border-t border-wine-red/20 flex items-center justify-center gap-2">
                Tips are never mandatory, but always appreciated
                <img src={logoM} alt="M" className="w-18 h-18 inline-block" />
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="border-t border-ice-white/20 pt-6 space-y-4"
            >
              <h3 className="text-ice-white text-center mb-4">Location</h3>
              
              <div className="space-y-3 text-ice-white/90">
                <p>
                  I am based in North York, Toronto, Canada.
                </p>
                <p>
                  I typically rent a studio also located in North York, but I can travel to you in the GTA area as long as the deposit is paid upfront and you cover the cost of the hotel.
                </p>
                <p>
                  Right now I am not touring outside Canada, but I'm open to discussing outcalls inside Canada.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}