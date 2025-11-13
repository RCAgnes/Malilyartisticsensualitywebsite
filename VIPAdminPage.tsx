import { motion } from "motion/react";
import { useState } from "react";
import { Key, Copy, CheckCircle, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";

interface VIPAdminPageProps {
  onNavigate: (page: string) => void;
}

export function VIPAdminPage({ onNavigate }: VIPAdminPageProps) {
  const [adminPassword, setAdminPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  // Simple admin password (in production, this would be server-side)
  const ADMIN_PASSWORD = "Malily2025Admin!";

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast.success("Admin access granted");
    } else {
      toast.error("Invalid admin password");
    }
  };

  const generateAccessCode = () => {
    // Generate a random access code
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "MALILY-";
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCode(code);
    toast.success("New access code generated!");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const clearVIPAccess = () => {
    localStorage.removeItem("vipAccess");
    localStorage.removeItem("vipAccessExpiry");
    toast.success("VIP access cleared from this browser");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-deep-gray/50 backdrop-blur-sm border border-wine-red/30 rounded-lg p-8">
              <div className="text-center mb-8">
                <Key className="text-wine-red mx-auto mb-4" size={48} />
                <h2 className="text-ice-white mb-3">VIP Admin Panel</h2>
                <p className="text-ice-white/70">
                  Enter admin password to access VIP management
                </p>
              </div>

              <form onSubmit={handleAdminLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="adminPassword" className="text-ice-white">
                    Admin Password
                  </Label>
                  <Input
                    id="adminPassword"
                    type="password"
                    placeholder="Enter admin password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="bg-black/50 border-wine-red/30 text-ice-white placeholder:text-ice-white/40 focus:border-wine-red"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-wine-red hover:bg-wine-red/90 text-ice-white"
                >
                  Access Admin Panel
                </Button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => onNavigate("home")}
                  className="text-ice-white/60 hover:text-wine-red text-sm transition-colors"
                >
                  ← Back to Home
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-wine-red mb-4">VIP Admin Panel</h1>
            <p className="text-ice-white/70">
              Manage VIP access codes and subscriber information
            </p>
          </div>

          {/* Current Access Code */}
          <div className="bg-deep-gray/50 backdrop-blur-sm border border-wine-red/30 rounded-lg p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-wine-red" size={32} />
              <h2 className="text-ice-white">Current VIP Access Code</h2>
            </div>
            <div className="bg-black/50 border border-wine-red/20 rounded-lg p-6 mb-4">
              <p className="text-ice-white/60 text-sm mb-2">Active Code:</p>
              <div className="flex items-center justify-between">
                <code className="text-wine-red text-2xl tracking-wider">MALILY2025</code>
                <Button
                  onClick={() => copyToClipboard("MALILY2025")}
                  variant="outline"
                  className="border-wine-red/30 text-ice-white hover:bg-wine-red/20"
                >
                  <Copy size={16} className="mr-2" />
                  Copy
                </Button>
              </div>
            </div>
            <p className="text-ice-white/60 text-sm">
              Share this code with your VIP OnlyFans subscribers via DM
            </p>
          </div>

          {/* Generate New Code */}
          <div className="bg-deep-gray/50 backdrop-blur-sm border border-wine-red/30 rounded-lg p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Key className="text-wine-red" size={32} />
              <h2 className="text-ice-white">Generate New Access Code</h2>
            </div>
            
            {generatedCode && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-black/50 border border-wine-red/20 rounded-lg p-6 mb-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-wine-red" size={20} />
                  <p className="text-ice-white/60 text-sm">New Code Generated:</p>
                </div>
                <div className="flex items-center justify-between">
                  <code className="text-wine-red text-2xl tracking-wider">{generatedCode}</code>
                  <Button
                    onClick={() => copyToClipboard(generatedCode)}
                    variant="outline"
                    className="border-wine-red/30 text-ice-white hover:bg-wine-red/20"
                  >
                    <Copy size={16} className="mr-2" />
                    Copy
                  </Button>
                </div>
              </motion.div>
            )}

            <Button
              onClick={generateAccessCode}
              className="w-full bg-wine-red hover:bg-wine-red/90 text-ice-white"
            >
              Generate Random Code
            </Button>
            <p className="text-ice-white/60 text-sm mt-4">
              Generate unique codes for individual subscribers or promotional campaigns
            </p>
          </div>

          {/* Quick Actions */}
          <div className="bg-deep-gray/50 backdrop-blur-sm border border-wine-red/30 rounded-lg p-8">
            <h2 className="text-ice-white mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <Button
                onClick={clearVIPAccess}
                variant="outline"
                className="w-full border-wine-red/30 text-ice-white hover:bg-wine-red/20"
              >
                Clear VIP Access (This Browser)
              </Button>
              <Button
                onClick={() => onNavigate("gallery")}
                variant="outline"
                className="w-full border-wine-red/30 text-ice-white hover:bg-wine-red/20"
              >
                View Gallery
              </Button>
              <Button
                onClick={() => onNavigate("home")}
                variant="outline"
                className="w-full border-wine-red/30 text-ice-white hover:bg-wine-red/20"
              >
                Back to Home
              </Button>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-wine-red/10 border border-wine-red/30 rounded-lg p-6">
            <h3 className="text-wine-red mb-4">How VIP Access Works</h3>
            <ul className="space-y-2 text-ice-white/70 text-sm">
              <li>• Access codes grant VIP gallery access for 30 days</li>
              <li>• Share codes exclusively with VIP OnlyFans subscribers via DM</li>
              <li>• Codes are stored locally in the user's browser</li>
              <li>• Generate new codes periodically to maintain exclusivity</li>
              <li>• Users must re-enter code after 30 days or if they clear browser data</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}