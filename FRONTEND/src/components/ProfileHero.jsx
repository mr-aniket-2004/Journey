import React from 'react';
import profileimg from '../assets/profile.jpg';

export default function ProfileHero() {
  return (
    <section className="grid md:grid-cols-12 gap-12 items-center min-h-[70vh]">
      {/* Left side text column */}
      <div className="md:col-span-7 space-y-6">
        <span className="text-[#7c93a3] tracking-widest text-sm uppercase font-mono">Hi, My Name Is</span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#ebdcd0] leading-tight uppercase">
          Aniket Anil  <br /> Chandiwade.
        </h1>
        <p className="text-lg text-[#7c93a3] italic font-light max-w-lg">
          "Mapping a life from development to the furthest design peak, with clean code as my map."
        </p>
        
      </div>

      {/* Right side graphic card column */}
      <div className="md:col-span-5 flex justify-center relative">
        {/* Layered decorative background angle box */}
        <div className="absolute w-72 h-72 bg-[#1a364a] transform rotate-12 rounded-2xl opacity-40 -z-10" />
        <div className="w-80 h-96 bg-[#16293b] rounded-2xl p-4 border border-[#1a364a] shadow-2xl flex flex-col justify-between overflow-hidden">
          <div className="w-full h-full bg-[#0b1426] rounded-xl flex items-center justify-center relative">
            {/* <span className="text-xs text-[#7c93a3]/30 font-mono">[ Avatar Placeholder ]</span> */}
            <img src={profileimg} alt="Profile" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="pt-3 text-center">
            <p className="text-xs font-mono text-[#7c93a3]">Pune, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}