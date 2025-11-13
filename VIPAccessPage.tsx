import { motion } from "motion/react";
import { useState } from "react";
import { Lock, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface VIPAccessPageProps {
  onAccessGranted: () => void;
  onNavigate: (page: string) => void;
}

export function VIPAccessPage({ onAccessGranted, onNavigate }: VIPAccessPageProps) {
  const [accessCode, setAccessCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // In a real application, this would be validated on a backend
  // For now, we'll use a demo code that can be changed
  const DEMO_VIP_CODE = "MALILY2025"; // This would be provided only to OnlyFans VIP subscribers

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsVerifying(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (accessCode.toUpperCase() === DEMO_VIP_CODE) {
      setShowSuccess(true);
      // Store access in localStorage
      localStorage.setItem("vipAccess", "granted");
      localStorage.setItem("vipAccessExpiry", String(Date.now() + 30 * 24 * 60 * 60 * 1000)); // 30 days
      
      setTimeout(() => {
        onAccessGranted();
      }, 2000);
    } else {
      setError("Invalid access code. Please check your VIP OnlyFans messages for the correct code.");
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 flex items-center justify-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          {!showSuccess ? (
            <div className="bg-deep-gray/50 backdrop-blur-sm border border-wine-red/30 rounded-lg p-8">
              <div className="text-center mb-8">
                <Lock className="text-wine-red mx-auto mb-4" size={48} />
                <h2 className="text-ice-white mb-3">VIP Access Required</h2>
                <p className="text-ice-white/70">
                  Enter your exclusive access code to unlock VIP content
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="accessCode" className="text-ice-white">
                    Access Code
                  </Label>
                  <Input
                    id="accessCode"
                    type="text"
                    placeholder="Enter your VIP code"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    className="bg-black/50 border-wine-red/30 text-ice-white placeholder:text-ice-white/40 focus:border-wine-red"
                    disabled={isVerifying}
                  />
                  {error && (
                    <div className="flex items-start gap-2 text-wine-red text-sm mt-2">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={!accessCode || isVerifying}
                  className="w-full bg-wine-red hover:bg-wine-red/90 text-ice-white"
                >
                  {isVerifying ? "Verifying..." : "Unlock VIP Content"}
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-wine-red/20">
                <p className="text-ice-white/60 text-sm text-center mb-4">
                  Don't have access yet?
                </p>
                <a
                  href="https://onlyfans.com/malilyvip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-wine-red/20 to-dark-red/20 border border-wine-red/30 text-ice-white rounded hover:border-wine-red/50 transition-all"
                >
                  Subscribe to VIP OnlyFans
                </a>
                <p className="text-ice-white/40 text-xs text-center mt-4">
                  Access codes are sent exclusively to VIP subscribers via OnlyFans DM
                </p>
              </div>

              {/* Important Access Information */}
              <div className="mt-8 pt-6 border-t border-wine-red/20">
                <h3 className="text-wine-red mb-6 text-center">Important Information</h3>
                <div className="space-y-3 text-ice-white/60 text-sm">
                  <p>
                    <span className="text-wine-red">•</span> Access activation is <strong className="text-ice-white/80">not automatic</strong>. You must request your access code via DM on OnlyFans after subscribing.
                  </p>
                  <p>
                    <span className="text-wine-red">•</span> Access codes are processed within <strong className="text-ice-white/80">up to 5 business days</strong> after your subscription/request.
                  </p>
                  <p>
                    <span className="text-wine-red">•</span> Your access code is valid for the <strong className="text-ice-white/80">duration of your OnlyFans subscription</strong> (30 days, 3 months, or 6 months).
                  </p>
                  <p>
                    <span className="text-wine-red">•</span> If you cancel and later renew your subscription, you will need to <strong className="text-ice-white/80">request a new access code</strong> via DM.
                  </p>
                  <p className="text-ice-white/50 italic text-center pt-2">
                    All access codes are sent exclusively through OnlyFans direct messages.
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => onNavigate("home")}
                  className="text-ice-white/60 hover:text-wine-red text-sm transition-colors"
                >
                  ← Back to Home
                </button>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-deep-gray/50 backdrop-blur-sm border border-wine-red/30 rounded-lg p-8 text-center"
            >
              <CheckCircle className="text-wine-red mx-auto mb-4" size={64} />
              <h2 className="text-ice-white mb-3">Access Granted!</h2>
              <p className="text-ice-white/70 mb-6">
                Welcome to the VIP experience. Redirecting...
              </p>
              <div className="flex justify-center">
                <div className="w-16 h-1 bg-wine-red/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-wine-red"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}