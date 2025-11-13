import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Upload, CheckCircle2, Mail, CreditCard, Gift, Crown, Copy, ExternalLink } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";
import img2 from "figma:asset/86847964232d34443ea63db395966bafe57c07c9.png";
import sideImage from "figma:asset/da5deb2e06c86121672ca76cc745c3142a382c8e.png"; // Nova imagem de fundo

interface BookingPageProps {
  preselect?: {
    sessionLength?: string;
    experienceType?: string;
  };
}

export function BookingPage({ preselect }: BookingPageProps) {
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

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    email: "",
    desiredDateTime: "",
    seenProfessional: "",
    professionalName: "",
    professionalEmail: "",
    sessionLength: "",
    experienceType: "",
    bespokeType: "",
    bespokeDetails: "",
    sessionRequests: "",
    idFile: null as File | null,
    consentScreening: false,
    consentAge: false,
  });

  const [showBespokeTextarea, setShowBespokeTextarea] = useState(false);

  // Apply preselect values when component mounts or preselect changes
  useEffect(() => {
    if (preselect?.sessionLength || preselect?.experienceType) {
      setFormData(prev => ({
        ...prev,
        sessionLength: preselect.sessionLength || "",
        experienceType: preselect.experienceType || "",
        bespokeType: preselect.experienceType || "",
      }));
      
      // Show textarea if needed
      if (preselect.experienceType === "Commissioned Custom Video" || preselect.experienceType === "Tailored Role-Play") {
        setShowBespokeTextarea(true);
      }
    }
  }, [preselect]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, idFile: e.target.files[0] });
    }
  };

  const handleSessionLengthChange = (value: string) => {
    if (value === "Bespoke Sessions — by private quote (please inquire)") {
      // Bespoke Sessions selected - reset experience type and show select
      setFormData({ ...formData, sessionLength: value, experienceType: "" });
      setShowBespokeTextarea(false);
    } else {
      // Standard session selected - set to Standard Session automatically
      setFormData({ ...formData, sessionLength: value, experienceType: "Standard Session", bespokeType: "", bespokeDetails: "" });
      setShowBespokeTextarea(false);
    }
  };

  const handleExperienceTypeChange = (value: string) => {
    setFormData({ ...formData, experienceType: value, bespokeType: value, bespokeDetails: "" });
    // Show textarea for Commissioned Custom Video and Tailored Role-Play
    setShowBespokeTextarea(value === "Commissioned Custom Video" || value === "Tailored Role-Play");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.consentScreening || !formData.consentAge) {
      toast.error("Please accept all consent statements");
      return;
    }

    if (formData.seenProfessional === "no" && !formData.idFile) {
      toast.error("ID upload is required for new clients");
      return;
    }

    // Validation for Bespoke Sessions
    if (formData.sessionLength === "Bespoke Sessions — by private quote (please inquire)") {
      if (!formData.experienceType) {
        toast.error("Please select an experience type");
        return;
      }
      
      if ((formData.experienceType === "Commissioned Custom Video" || formData.experienceType === "Tailored Role-Play") && !formData.bespokeDetails.trim()) {
        toast("A short outline helps me prepare. You can keep it brief.", {
          icon: "ℹ️",
        });
        return;
      }
    }

    // Mock submission
    toast.success("Booking request submitted successfully! You will receive a confirmation email shortly.");
    
    // Reset form
    setFormData({
      name: "",
      city: "",
      phone: "",
      email: "",
      desiredDateTime: "",
      seenProfessional: "",
      professionalName: "",
      professionalEmail: "",
      sessionLength: "",
      experienceType: "",
      bespokeType: "",
      bespokeDetails: "",
      sessionRequests: "",
      idFile: null,
      consentScreening: false,
      consentAge: false,
    });
    setShowBespokeTextarea(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-16 relative">
        {/* Fixed Side Image on RIGHT - Desktop */}
        <div 
          className="fixed top-0 right-0 bottom-0 w-1/3 bg-cover bg-center hidden lg:block"
          style={{
            backgroundImage: `url(${sideImage})`,
            backgroundPosition: 'center right',
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
        <div className="fixed inset-0 bg-black/70 lg:hidden" />

        <div className="container mx-auto px-6 lg:mr-auto lg:w-2/3 relative z-10"> {/* Changed from ml-auto to mr-auto and moved content to LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-wine-red mb-4">Booking a Session</h1>
            <p className="text-ice-white/80 max-w-2xl mx-auto text-lg">
              Schedule a professional session. All inquiries are confidential and require screening.
            </p>
          </motion.div>

          {/* Rates Table */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-3xl mx-auto bg-wine-red/50 backdrop-blur-sm border border-wine-red/40 rounded-lg p-8 mb-8"
          >
            <h2 className="text-ice-white text-center mb-6">Rates</h2>
            <div className="space-y-3">
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
              <div className="flex justify-between items-center pb-3">
                <span className="text-ice-white text-xl">Overnight</span>
                <span className="text-ice-white text-xl">$3000+</span>
              </div>
              <div className="pt-4 border-t border-ice-white/30 mt-4">
                <div className="text-ice-white/90 text-lg italic">
                  <p className="mb-2">Bespoke Sessions — by private quote</p>
                  <p className="text-sm text-ice-white/70">(custom proposal based on scope and format)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-deep-gray/50 backdrop-blur-sm border border-wine-red/20 rounded-lg p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-ice-white mb-2 block" style={{ fontSize: '1.875rem' }}>Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-black/50 border-wine-red/30 text-ice-white focus:border-wine-red py-6"
                      style={{ fontSize: '1.2rem' }}
                    />
                  </div>

                  <div>
                    <Label htmlFor="city" className="text-ice-white mb-2 block" style={{ fontSize: '1.5rem' }}>City of Residence *</Label>
                    <Input
                      id="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="bg-black/50 border-wine-red/30 text-ice-white focus:border-wine-red py-6"
                      style={{ fontSize: '1.2rem' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-ice-white mb-2 block" style={{ fontSize: '1.5rem' }}>Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-black/50 border-wine-red/30 text-ice-white focus:border-wine-red py-6"
                      style={{ fontSize: '1.2rem' }}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-ice-white mb-2 block" style={{ fontSize: '1.5rem' }}>Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-black/50 border-wine-red/30 text-ice-white focus:border-wine-red py-6"
                      style={{ fontSize: '1.2rem' }}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="datetime" className="text-ice-white mb-2 block" style={{ fontSize: '1.5rem' }}>Desired Date and Time *</Label>
                  <Input
                    id="datetime"
                    type="datetime-local"
                    required
                    value={formData.desiredDateTime}
                    onChange={(e) => setFormData({ ...formData, desiredDateTime: e.target.value })}
                    className="bg-black/50 border-wine-red/30 text-ice-white focus:border-wine-red py-6"
                    style={{ fontSize: '1.2rem' }}
                  />
                  <p className="text-ice-white/50 mt-2" style={{ fontSize: '1rem' }}>
                    All inquiries are confidential and subject to verification.
                  </p>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="space-y-4 pt-6 border-t border-wine-red/20">
                <Label className="text-ice-white" style={{ fontSize: '1.5rem' }}>Have you seen a professional Dominant before? *</Label>
                <RadioGroup
                  value={formData.seenProfessional}
                  onValueChange={(value) => setFormData({ ...formData, seenProfessional: value })}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" className="border-wine-red text-wine-red w-8 h-8" />
                    <Label htmlFor="yes" className="text-ice-white cursor-pointer" style={{ fontSize: '1.2rem' }}>Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" className="border-wine-red text-wine-red w-8 h-8" />
                    <Label htmlFor="no" className="text-ice-white cursor-pointer" style={{ fontSize: '1.2rem' }}>No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* If Yes - Professional Reference */}
              {formData.seenProfessional === "yes" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 bg-wine-red/5 border border-wine-red/20 rounded-lg p-6"
                >
                  <p className="text-ice-white/90 mb-4" style={{ fontSize: '1.2rem' }}>
                    Provide name and email of the Professional you saw:
                  </p>
                  <div>
                    <Label htmlFor="profName" className="text-ice-white mb-2 block" style={{ fontSize: '1.2rem' }}>
                      Name of Previous Professional
                    </Label>
                    <Input
                      id="profName"
                      type="text"
                      value={formData.professionalName}
                      onChange={(e) => setFormData({ ...formData, professionalName: e.target.value })}
                      className="bg-black/50 border-wine-red/30 text-ice-white focus:border-wine-red py-6"
                      style={{ fontSize: '1.2rem' }}
                    />
                  </div>
                  <div>
                    <Label htmlFor="profEmail" className="text-ice-white mb-2 block" style={{ fontSize: '1.2rem' }}>
                      Email of Previous Professional
                    </Label>
                    <Input
                      id="profEmail"
                      type="email"
                      value={formData.professionalEmail}
                      onChange={(e) => setFormData({ ...formData, professionalEmail: e.target.value })}
                      className="bg-black/50 border-wine-red/30 text-ice-white focus:border-wine-red py-6"
                      style={{ fontSize: '1.2rem' }}
                    />
                  </div>
                </motion.div>
              )}

              {/* If No - ID Upload */}
              {formData.seenProfessional === "no" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 bg-wine-red/5 border border-wine-red/20 rounded-lg p-6"
                >
                  <p className="text-ice-white/90 mb-4" style={{ fontSize: '1.4rem' }}>
                    If you have never seen a previous Domme, you must upload a picture of a government-issued ID:
                  </p>
                  <div className="bg-wine-red/10 border border-wine-red/30 rounded-lg p-4 mb-4">
                    <p className="text-amber-400" style={{ fontSize: '1rem' }}>
                      ⚠️ This is <span className="font-semibold">MANDATORY</span> for new clients
                    </p>
                  </div>
                  
                  <div>
                    <input
                      type="file"
                      id="idUpload"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      required={formData.seenProfessional === "no"}
                    />
                    <Button
                      type="button"
                      onClick={() => document.getElementById('idUpload')?.click()}
                      variant="outline"
                      className="w-full border-wine-red/50 text-ice-white hover:bg-wine-red/20 h-auto py-6"
                    >
                      {formData.idFile ? (
                        <div className="flex items-center justify-center gap-3">
                          <CheckCircle2 className="text-wine-red" size={48} />
                          <span className="text-ice-white" style={{ fontSize: '1.2rem' }}>{formData.idFile.name}</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-3">
                          <Upload className="text-wine-red" size={64} />
                          <span className="text-ice-white/70" style={{ fontSize: '1.2rem' }}>Click to upload ID</span>
                        </div>
                      )}
                    </Button>
                  </div>
                  <p className="text-ice-white/50" style={{ fontSize: '1.3rem' }}>
                    Your ID is required for security and screening purposes. All information is kept strictly confidential.
                  </p>
                </motion.div>
              )}

              {/* Session Details - INCREASED FONT SIZE BY 100% */}
              <div className="space-y-6 pt-6 border-t border-wine-red/20">
                <Label className="text-ice-white" style={{ fontSize: '1.2rem' }}>Desired Session Length *</Label>
                <RadioGroup
                  value={formData.sessionLength}
                  onValueChange={handleSessionLengthChange}
                  className="space-y-5"
                >
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value="1 hour - $500" id="1hour" className="border-wine-red text-wine-red w-8 h-8" />
                    <Label htmlFor="1hour" className="text-ice-white cursor-pointer" style={{ fontSize: '2.5rem' }}>1 hour - $500</Label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value="1.5 hours (my preferred length for session) - $750" id="1.5hours" className="border-wine-red text-wine-red w-8 h-8" />
                    <Label htmlFor="1.5hours" className="text-ice-white cursor-pointer" style={{ fontSize: '2.5rem' }}>1.5 hours (my preferred length for session) - $750</Label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value="2 hours - $1000" id="2hours" className="border-wine-red text-wine-red w-8 h-8" />
                    <Label htmlFor="2hours" className="text-ice-white cursor-pointer" style={{ fontSize: '2.5rem' }}>2 hours - $1000</Label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value="2.5 hours - $1250" id="2.5hours" className="border-wine-red text-wine-red w-8 h-8" />
                    <Label htmlFor="2.5hours" className="text-ice-white cursor-pointer" style={{ fontSize: '2.5rem' }}>2.5 hours - $1250</Label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value="3 hours - $1500" id="3hours" className="border-wine-red text-wine-red w-8 h-8" />
                    <Label htmlFor="3hours" className="text-ice-white cursor-pointer" style={{ fontSize: '2.5rem' }}>3 hours - $1500</Label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value="3+ hours (please inquire)" id="3plus" className="border-wine-red text-wine-red w-8 h-8" />
                    <Label htmlFor="3plus" className="text-ice-white cursor-pointer" style={{ fontSize: '2.5rem' }}>3+ hours (please inquire)</Label>
                  </div>
                  <div className="flex items-center space-x-4 pt-4 border-t border-wine-red/30">
                    <RadioGroupItem value="Bespoke Sessions — by private quote (please inquire)" id="bespoke" className="border-wine-red text-wine-red w-8 h-8" />
                    <Label htmlFor="bespoke" className="text-ice-white cursor-pointer italic" style={{ fontSize: '2.5rem' }}>Bespoke Sessions — by private quote (please inquire)</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Experience Type - ONLY SHOWN FOR BESPOKE SESSIONS */}
              {formData.sessionLength === "Bespoke Sessions — by private quote (please inquire)" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-4 pt-6 border-t border-wine-red/20"
                >
                  <Label htmlFor="experienceType" className="text-ice-white mb-2 block" style={{ fontSize: '3rem' }}>Experience Type *</Label>
                  <Select value={formData.experienceType} onValueChange={handleExperienceTypeChange}>
                    <SelectTrigger className="bg-black/50 border-wine-red/30 text-ice-white h-auto py-4" style={{ fontSize: '2.5rem' }}>
                      <SelectValue placeholder="Select experience type" />
                    </SelectTrigger>
                    <SelectContent className="bg-deep-gray border-wine-red/30">
                      <SelectItem value="Duo Session" className="text-ice-white py-4" style={{ fontSize: '3rem' }}>Duo Session</SelectItem>
                      <SelectItem value="Tailored Role-Play" className="text-ice-white py-4" style={{ fontSize: '3rem' }}>Tailored Role-Play</SelectItem>
                      <SelectItem value="Commissioned Custom Video" className="text-ice-white py-4" style={{ fontSize: '3rem' }}>Commissioned Custom Video</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              )}

              {/* Bespoke Details Textarea */}
              {showBespokeTextarea && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-2 bg-wine-red/5 border border-wine-red/20 rounded-lg p-6"
                >
                  <Label htmlFor="bespokeDetails" className="text-ice-white mb-2 block" style={{ fontSize: '3rem' }}>Tell me your wish *</Label>
                  <Textarea
                    id="bespokeDetails"
                    rows={6}
                    value={formData.bespokeDetails}
                    onChange={(e) => setFormData({ ...formData, bespokeDetails: e.target.value })}
                    placeholder="Boundaries, tone, and a brief outline (script, duo, or custom video)."
                    className="bg-black/50 border-wine-red/30 text-ice-white focus:border-wine-red resize-none py-3"
                    style={{ fontSize: '2.5rem' }}
                  />
                  <p className="text-ice-white/60 italic mt-2" style={{ fontSize: '1.6rem' }}>
                    A short outline helps me prepare. You can keep it brief.
                  </p>
                </motion.div>
              )}

              {/* Session Requests */}
              <div className="space-y-2">
                <Label htmlFor="requests" className="text-ice-white mb-2 block" style={{ fontSize: '2.5rem' }}>Session Requests</Label>
                <Textarea
                  id="requests"
                  rows={6}
                  value={formData.sessionRequests}
                  onChange={(e) => setFormData({ ...formData, sessionRequests: e.target.value })}
                  placeholder="Please describe your interests, boundaries, and any specific requests for the session..."
                  className="bg-black/50 border-wine-red/30 text-ice-white focus:border-wine-red resize-none"
                  style={{ fontSize: '2.5rem' }}
                />
              </div>

              {/* Location */}
              <div className="bg-wine-red/10 border border-wine-red/30 rounded-lg p-6">
                <h3 className="text-ice-white mb-4" style={{ fontSize: '1.25rem' }}>Location</h3>
                <div className="space-y-3 text-ice-white/90" style={{ fontSize: '1.125rem' }}>
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
              </div>

              {/* Consent */}
              <div className="space-y-4 pt-6 border-t border-wine-red/20">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent1"
                    checked={formData.consentScreening}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, consentScreening: checked as boolean })
                    }
                    className="border-wine-red data-[state=checked]:bg-wine-red mt-1 w-8 h-8"
                  />
                  <Label htmlFor="consent1" className="text-ice-white/90 cursor-pointer leading-relaxed" style={{ fontSize: '1.5rem' }}>
                    I understand that I must complete the screening process to book an appointment.
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent2"
                    checked={formData.consentAge}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, consentAge: checked as boolean })
                    }
                    className="border-wine-red data-[state=checked]:bg-wine-red mt-1 w-8 h-8"
                  />
                  <Label htmlFor="consent2" className="text-ice-white/90 cursor-pointer leading-relaxed" style={{ fontSize: '1.5rem' }}>
                    I confirm I am over the age of 18.
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full py-6 bg-gradient-to-r from-wine-red to-dark-red hover:opacity-90 text-ice-white rounded-full transition-all"
                style={{ fontSize: '1.5rem' }}
              >
                Submit Request
              </Button>

              {/* Legal Notice */}
              <p className="text-ice-white/50 text-center pt-4" style={{ fontSize: '0.875rem' }}>
                This form is for professional booking inquiries only. All information is confidential.
              </p>
            </form>
          </motion.div>

          {/* Payment Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto bg-deep-gray/50 backdrop-blur-sm border border-wine-red/20 rounded-lg p-8 mt-8"
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
            <div className="space-y-4">
              <h4 className="text-ice-white text-center mb-4">Accepted Deposit Methods:</h4>
              
              {/* E-Transfer */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-wine-red/10 border-2 border-[#7b0b15] rounded-lg p-5 hover:border-wine-red transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-wine-red/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="text-wine-red" size={24} />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-ice-white mb-2" style={{ fontSize: '2rem' }}>E-Transfer <span className="text-ice-white/70">(Preferred)</span></h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 bg-black/30 rounded px-3 py-2">
                        <code className="text-ice-white flex-1">malily.legs@gmail.com</code>
                        <button
                          onClick={() => copyToClipboard("malily.legs@gmail.com")}
                          className="text-wine-red hover:text-ice-white transition-colors"
                          title="Copy email"
                        >
                          {copiedEmail ? <span className="text-sm">✓</span> : <Copy size={18} />}
                        </button>
                      </div>
                      <p className="text-ice-white/70 text-sm italic">
                        ⚠️ Remember to email the password for the e-transfer
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* PayPal */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-wine-red/10 border-2 border-[#7b0b15] rounded-lg p-5 hover:border-wine-red transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-wine-red/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CreditCard className="text-wine-red" size={24} />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-wine-red mb-2" style={{ fontSize: '2rem' }}>PayPal</h5>
                    <p className="text-ice-white/80">Please ask me for the PayPal handle</p>
                  </div>
                </div>
              </motion.div>

              {/* Amazon Gift Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-wine-red/10 border-2 border-[#7b0b15] rounded-lg p-5 hover:border-wine-red transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-wine-red/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Gift className="text-wine-red" size={24} />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-wine-red mb-3" style={{ fontSize: '2rem' }}>Amazon Gift Card</h5>
                    <div className="space-y-2 mb-3">
                      <p className="text-ice-white/80">Purchase from <span className="text-wine-red">Amazon.ca</span></p>
                      <p className="text-ice-white/70 text-sm italic">
                        Send the gift card code to <span className="text-wine-red">malily.legs@gmail.com</span>
                      </p>
                    </div>
                    <a
                      href="https://www.amazon.ca/dp/B07P68FH74?ref=altParentAsins_treatment_text_from_Any_to_Amazon&th=1&gpo=250"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-wine-red/20 hover:bg-wine-red/30 border border-wine-red/50 rounded-lg text-ice-white transition-all"
                    >
                      <span>Purchase Gift Card</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Throne Wishlist */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-wine-red/10 border-2 border-[#7b0b15] rounded-lg p-5 hover:border-wine-red transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-wine-red/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Crown className="text-wine-red" size={24} />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-wine-red mb-3" style={{ fontSize: '2rem' }}>Throne Wishlist</h5>
                    <p className="text-ice-white/80 mb-3">Choose the "Deposit for Session" item</p>
                    <a
                      href="https://throne.com/malilylegs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-wine-red/20 hover:bg-wine-red/30 border border-wine-red/50 rounded-lg text-ice-white transition-all"
                    >
                      <span>Visit Throne Wishlist</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <p className="text-ice-white/70 text-center italic mt-6 pt-6 border-t border-wine-red/20">
              Tips are never mandatory, but always appreciated 💋
            </p>
          </motion.div>
        </div>
      </div>
  );
}