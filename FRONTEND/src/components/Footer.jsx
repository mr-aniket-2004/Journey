import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="relative border-t border-[#E8D5C4]/10 bg-[#070C16] py-10 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Crest Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-[#4a9aaa] flex items-center justify-center text-[#4a9aaa] font-serif font-bold text-xl">
              A
            </div>
            <div>
              <span className="font-serif font-bold text-[#E8D5C4] tracking-wider text-sm block">TRAVELER </span>
              <span className="text-[10px] text-[#4a9aaa] uppercase tracking-widest block">Life Journeys</span>
            </div>
          </div>

          {/* Navigation Links matching DESIGN 2 Footer */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-mono tracking-widest text-[#E8D5C4]/70">
  {[
    {name: 'Home', href: '/' },
    { name: 'Journeys', href: '/journey' },
    { name: 'Travel Diary', href: '/travel-diary' },
    { name: 'Stories', href: '/stories' },

  ].map((item) => (
    <Link
      key={item.name}
      to={item.href} 
      className="hover:text-[#4a9aaa] transition-colors py-1 relative group"
    >
      {item.name}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#4a9aaa] transition-all duration-300 group-hover:w-full" />
    </Link>
  ))}
</nav>
        </div>
      </footer>
    </>
  )
}

export default Footer