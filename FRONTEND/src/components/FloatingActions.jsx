'use client';

import { motion } from 'framer-motion';
import { GitBranch, MapPin, BookOpen, } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
import { LiaFacebookMessenger } from "react-icons/lia";


export default function FloatingActions() {
  const actions = [
    {
      icon: GitBranch,
      label: 'GitHub',
      href: 'https://github.com/mr-aniket-2004',
      ariaLabel: 'Visit GitHub',
      color: 'from-[#3a7a9a] to-[#1a4a5a]',
      target: '_blank',
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/office_timepass?igsh=MW8yZDZ0emFud3FoeQ==',
      ariaLabel: 'Visit Instagram',
      color: 'from-[#4a8aaa] to-[#2a5a6a]',
      target: '_blank',
    },
    {
      icon: LiaFacebookMessenger,
      label: 'Messenger',
      href: 'https://messenger.com',
      ariaLabel: 'Visit Messenger',
      color: 'from-[#4a8aaa] to-[#2a5a6a]',
      target: '_blank',
    },
   
    {
      icon: BookOpen,
      label: 'Journal',
      href: '/stories',
      ariaLabel: 'Read journal',
      color: 'from-[#5a9aba] to-[#3a6a7a]',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-40"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group"
          >
            {/* Tooltip */}
            <motion.div
              className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#1a2a3a] text-[#E8D5C4] px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 border border-[#3a4a5a]"
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              {action.label}
            </motion.div>

            {/* Button */}
            <motion.a
              href={action.href}
              aria-label={action.ariaLabel}
              target={action.target}
              whileHover={{
                scale: 1.2,
                boxShadow: '0 0 20px rgba(58, 122, 154, 0.5)',
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={`w-14 h-14 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center shadow-xl border-2 border-[#3a7a9a] hover:border-[#4a9aaa] cursor-pointer relative overflow-hidden group`}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white opacity-0"
                whileHover={{ opacity: 0.1 }}
              />
              <Icon size={24} className="text-[#E8D5C4] relative z-10" />
            </motion.a>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
