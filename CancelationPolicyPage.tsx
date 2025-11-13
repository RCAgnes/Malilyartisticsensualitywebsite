import { motion } from "motion/react";
import { Clock } from "lucide-react";
import img1 from "figma:asset/9d69b3a74b757f29e98f418c38f8e38f17dbf040.png";
import sideImage from "figma:asset/a2708e40eda6053ecabd1c412166717b7b80b569.png";

export function CancelationPolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      {/* Fixed Background Image on Right - Desktop */}
      <div 
        className="fixed top-0 right-0 bottom-0 w-1/2 bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage: `url(${sideImage})`,
        }}
      />

      {/* Mobile Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center lg:hidden"
        style={{
          backgroundImage: `url(${img1})`,
          filter: 'blur(5px)',
          opacity: 0.75,
        }}
      />
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm lg:hidden" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-[80vh] flex items-end lg:items-center justify-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 bg-black/50 backdrop-blur-md border border-wine-red/30 rounded-lg p-8 md:p-12 shadow-2xl mb-8 lg:mb-0"
          >
            {/* Decorative Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="w-16 h-16 rounded-full bg-wine-red/20 flex items-center justify-center border border-wine-red/40">
                <Clock className="text-wine-red" size={32} />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-8 text-wine-red"
            >
              Cancelation Policy
            </motion.h1>

            {/* Policy Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-wine-red/10 border-l-4 border-wine-red rounded-r-lg p-6">
                <p className="text-ice-white/90">
                  <span className="text-wine-red">More than 3 days' notice</span> →<br />Deposit may be applied to a future session.
                </p>
              </div>

              <div className="bg-wine-red/10 border-l-4 border-wine-red rounded-r-lg p-6">
                <p className="text-ice-white/90">
                  <span className="text-wine-red">Less than 3 days' notice</span> →<br />Venue fee may be forfeited.
                </p>
              </div>

              <div className="bg-wine-red/10 border-l-4 border-wine-red rounded-r-lg p-6">
                <p className="text-ice-white/90">
                  <span className="text-wine-red">If I must reschedule</span> →<br />Your deposit will be applied to the new date.
                </p>
              </div>

              <div className="bg-wine-red/10 border-l-4 border-wine-red rounded-r-lg p-6">
                <p className="text-ice-white/90">
                  <span className="text-wine-red">No-shows and repeated cancellations</span> →<br />Will not be rebooked.
                </p>
              </div>

              <div className="bg-black/40 border border-wine-red/30 rounded-lg p-6 mt-8">
                <p className="text-ice-white/80 text-center">
                  Pre-payment of the full tribute is welcome and preferred.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}