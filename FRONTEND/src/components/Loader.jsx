'use client';

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#0B111E] flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-[#3a7a9a] to-transparent opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [-50, 50, -50],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-[#1a4a5a] to-transparent opacity-10 blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          x: [50, -50, 50],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative flex flex-col items-center gap-8 z-10">
        {/* Multiple spinner rings */}
        <div className="relative w-32 h-32">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 border-3 border-transparent border-t-[#3a7a9a] border-r-[#3a7a9a] rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Middle ring */}
          <motion.div
            className="absolute inset-2 border-2 border-transparent border-b-[#E8D5C4] rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Inner ring */}
          <motion.div
            className="absolute inset-4 border-2 border-transparent border-t-[#1a4a5a] rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Center dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#3a7a9a] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              boxShadow: [
                '0 0 0 0 rgba(58, 122, 154, 0.7)',
                '0 0 0 10px rgba(58, 122, 154, 0)',
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Loading text with character animation */}
        <motion.div className="flex flex-col items-center gap-3">
          <motion.p
            className="text-[#E8D5C4] text-xl font-light tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block">
              Loading
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: 0.3,
                }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: 0.6,
                }}
              >
                .
              </motion.span>
            </span>
          </motion.p>
          
          <motion.p
            className="text-[#C4B5A0] text-sm font-light italic"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            your journey awaits
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
