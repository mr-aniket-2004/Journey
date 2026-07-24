'use client';

import { motion } from 'framer-motion';
import profileImg from '../assets/PROFILE.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0B111E] text-[#E8D5C4] flex items-center justify-center px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-balance">
            LISTEN TO THE ODYSSEY.
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-cormorant font-light text-[#C4B5A0] leading-relaxed italic"
          >
            Mapping a life from MCA to the furthest peak, with code as my map.
          </motion.p>

          <Link to="/journey">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#2a5a6a' }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 px-8 py-3 bg-[#1a4a5a] text-[#E8D5C4] rounded-lg font-semibold text-lg transition-colors duration-300 w-fit hover:shadow-lg"
          >
            BEGIN THE JOURNEY
          </motion.button>
          </Link>
        </motion.div>

        {/* Right Avatar Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-96 h-[500px]">
            {/* Glowing animated border effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3a7a9a] to-[#1a4a5a] opacity-30 blur-2xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Rotating border effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-[#3a7a9a] to-[#1a4a5a] bg-clip-border"
              animate={{
                rotateZ: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 5%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 5%, transparent 100%)',
              }}
            />
            
            {/* Image container with parallax effect */}
            <motion.div
              className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#1a3a4a] to-[#0a2a3a] flex items-center justify-center shadow-2xl overflow-hidden p-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              
              <img
                src={profileImg}
                alt="Profile"
                width={384}
                height={500}
                className="w-full h-full object-contain object-center"
              />
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
