// src/components/LandingPage.jsx
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Wifi } from 'lucide-react';

export default function LandingPage({ onStartOffline, onStartOnline, isOnlineLoading }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 h-full w-full object-cover"
        >
          <source src="/puff.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Opaque Overlay */}
        <div className="absolute inset-0 h-full w-full bg-black/70"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center text-[#F5F5DC]" // Off-white color
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Top Line */}
          <div className="mb-4 h-[1px] w-48 bg-[#F5F5DC]/50"></div>

          {/* Wordmark */}
          <h1
            className="font-serif text-8xl tracking-tight"
            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)' }}
          >
            puffnotes
          </h1>

          {/* Tagline */}
          <p
            className="mt-2 font-mono text-lg text-[#F5F5DC]/80"
            style={{ textShadow: '0 1px 10px rgba(0, 0, 0, 0.5)' }}
          >
            Your quiet place.
          </p>

          {/* Bottom Line */}
          <div className="mt-4 h-[1px] w-48 bg-[#F5F5DC]/50"></div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <motion.button
              onClick={onStartOffline}
              className="group flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-mono text-sm text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/80 hover:bg-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Offline Mode
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>

            <motion.button
              onClick={onStartOnline}
              disabled={isOnlineLoading}
              className="group flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-mono text-sm text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/80 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOnlineLoading ? 'Connecting...' : 'Online Mode'}
              <Wifi size={16} className={isOnlineLoading ? 'animate-pulse' : ''} />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}