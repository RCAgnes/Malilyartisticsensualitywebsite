import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logoMalily from "figma:asset/87b1546970a44178567b0811a659a86811054e65.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingDropdownOpen, setIsBookingDropdownOpen] = useState(false);

  const bookingSubmenu = [
    { id: "signature-experiences", label: "Signature Experiences" },
    { id: "bespoke-sessions", label: "Bespoke Sessions" },
    { id: "screening-process", label: "Screening Process" },
    { id: "rates", label: "Rates" },
    { id: "cancelation-policy", label: "Cancelation Policy" },
    { id: "booking-session", label: "Booking a Session" },
  ];

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "booking", label: "Booking", hasDropdown: true },
    { id: "blog", label: "Blog" },
    { id: "wishlist", label: "Wish List" },
  ];

  const isBookingPage = bookingSubmenu.some(item => item.id === currentPage);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-wine-red/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <img 
              src={logoMalily} 
              alt="Malily" 
              className="h-24 w-auto"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsBookingDropdownOpen(true)}
                    onMouseLeave={() => setIsBookingDropdownOpen(false)}
                  >
                    <motion.button
                      className={`relative px-5 py-2 transition-colors flex items-center gap-2 ${
                        currentPage === item.id || isBookingPage
                          ? "text-wine-red"
                          : "text-ice-white hover:text-wine-red"
                      }`}
                      style={{ fontSize: "6rem" }}
                      whileHover={{ scale: 1.15 }}
                    >
                      {item.label}
                      <ChevronDown size={20} className={`transition-transform ${isBookingDropdownOpen ? 'rotate-180' : ''}`} />
                      {(currentPage === item.id || isBookingPage) && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-wine-red"
                        />
                      )}
                    </motion.button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isBookingDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.98, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.98, y: -10 }}
                          transition={{ duration: 0.12 }}
                          className="absolute top-full mt-2 bg-black/80 backdrop-blur-lg border border-wine-red/20 rounded-lg overflow-hidden min-w-[220px] shadow-2xl"
                        >
                          {bookingSubmenu.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => {
                                onNavigate(subItem.id);
                                setIsBookingDropdownOpen(false);
                              }}
                              className={`block w-full text-left px-6 py-3 transition-all ${
                                currentPage === subItem.id
                                  ? "text-wine-red bg-wine-red/10"
                                  : "text-ice-white hover:text-wine-red hover:bg-wine-red/5"
                              }`}
                              style={{ fontSize: "1.5rem" }}
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.button
                    onClick={() => onNavigate(item.id)}
                    className={`relative px-4 py-2 transition-colors ${
                      currentPage === item.id ? "text-wine-red" : "text-ice-white hover:text-wine-red"
                    }`}
                    style={{ fontSize: "4.5rem" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {currentPage === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-wine-red"
                      />
                    )}
                  </motion.button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ice-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {menuItems.map((item) => (
              <div key={item.id}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsBookingDropdownOpen(!isBookingDropdownOpen)}
                      className={`flex items-center justify-between w-full text-left px-4 py-3 transition-colors ${
                        currentPage === item.id || isBookingPage
                          ? "text-wine-red bg-wine-red/10"
                          : "text-ice-white hover:bg-wine-red/5"
                      }`}
                      style={{ fontSize: "4.5rem" }}
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform ${isBookingDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isBookingDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-wine-red/5"
                        >
                          {bookingSubmenu.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => {
                                onNavigate(subItem.id);
                                setIsOpen(false);
                                setIsBookingDropdownOpen(false);
                              }}
                              className={`block w-full text-left px-8 py-3 transition-colors ${
                                currentPage === subItem.id
                                  ? "text-wine-red bg-wine-red/10"
                                  : "text-ice-white/80 hover:bg-wine-red/5"
                              }`}
                              style={{ fontSize: "3rem" }}
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 transition-colors ${
                      currentPage === item.id ? "text-wine-red bg-wine-red/10" : "text-ice-white hover:bg-wine-red/5"
                    }`}
                    style={{ fontSize: "4.5rem" }}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
