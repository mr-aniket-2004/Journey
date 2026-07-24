'use client';

import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const timelineEvents = [
    { title: 'MCA Pursuing Student ', description: 'Started my tech education' },
    { title: 'Solo Trip', description: 'Explored the world independently' },
    { title: 'My Moment', description: 'Discovered my true passion' },
    { title: 'Finding First Tech Venture', description: 'Launched into the tech industry' },
  ];

  const skills = [
    'Full-stack development',
    'Test Engineer',
    'Problem solving',
    'Team leadership',
  ];

  return (
    <section className="min-h-screen bg-[#0B111E] text-[#E8D5C4] px-6 md:px-12 py-20">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Title */}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-4xl md:text-5xl font-bold mb-16 text-balance"
        >
          About: The Explorer&apos;s Code
        </motion.h2>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column: Code as My Craft */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold font-serif">Code as My Craft</h3>
            <ul className="space-y-3">
              {skills.map((skill, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-[#1a2a3a] transition-colors cursor-pointer"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="text-[#3a7a9a] font-bold mt-1"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    ▸
                  </motion.span>
                  <span className="text-[#C4B5A0] font-light">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Center Column: Timeline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold font-serif">The Timeline</h3>
            <div className="space-y-6">
              {timelineEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="relative pl-6 border-l-2 border-[#3a7a9a] pb-4"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#3a7a9a]" />
                  <h4 className="font-semibold text-lg">{event.title}</h4>
                  <p className="text-[#C4B5A0] font-light text-sm mt-1">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Travel as My Catalyst */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold font-serif">Travel as My Catalyst</h3>
            
            {/* Image Card */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(58, 122, 154, 0.3)' }}
              className="relative rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-[#2a5a6a] to-[#1a3a4a] border border-[#3a7a9a] shadow-lg cursor-pointer"
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#3a7a9a]/30 to-transparent"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Content overlay */}
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                <motion.div
                  className="text-5xl mb-3"
                  animate={{
                    y: [0, -5, 0],
                    rotateZ: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  ✈️
                </motion.div>
                <p className="font-semibold text-lg">Travel Enthusiast</p>
                <p className="text-[#C4B5A0] font-light text-sm mt-3">
                  "Traveling alone to find where I belong."
                </p>
              </div>
            </motion.div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{
                  y: -8,
                  backgroundColor: '#2a3a4a',
                  borderColor: '#3a7a9a',
                }}
                className="bg-[#1a2a3a] border border-[#3a4a5a] rounded-lg p-4 text-center cursor-pointer transition-all"
              >
                <motion.p
                  className="text-2xl font-bold text-[#3a7a9a]"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  1
                </motion.p>
                <p className="text-sm text-[#C4B5A0] font-light">Cities</p>
              </motion.div>
              <motion.div
                whileHover={{
                  y: -8,
                  backgroundColor: '#2a3a4a',
                  borderColor: '#3a7a9a',
                }}
                className="bg-[#1a2a3a] border border-[#3a4a5a] rounded-lg p-4 text-center cursor-pointer transition-all"
              >
                <motion.p
                  className="text-2xl font-bold text-[#3a7a9a]"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 0.2,
                  }}
                >
                  2
                </motion.p>
                <p className="text-sm text-[#C4B5A0] font-light">Trips </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
