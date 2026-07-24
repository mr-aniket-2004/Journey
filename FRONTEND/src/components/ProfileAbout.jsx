import React from 'react';

export default function About() {
  return (
    <section className="space-y-8 max-w-4xl mx-auto border-t border-[#16293b] pt-16">
      {/* Editorial Style Header */}
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-serif uppercase tracking-wider text-[#ebdcd0]">About Me</h2>
        <p className="text-sm font-mono tracking-widest text-[#7c93a3] uppercase">
          Full Stack Developer / Test Engineer / UI/UX Enthusiast
        </p>
      </div>

      {/* Narrative block copying the layout emphasis rules */}
      <div className="space-y-6 text-center">
        <p className="text-xl md:text-2xl font-serif text-[#ebdcd0] leading-relaxed max-w-3xl mx-auto">
          I'm <span className="underline decoration-[#12425c] underline-offset-4 font-bold">Aniket Anil Chandiwade</span>. 
          A developer focused on shaping seamless visual layouts and logic frameworks.
        </p>
        
        <p className="text-base text-[#7c93a3] italic font-light leading-relaxed max-w-2xl mx-auto">
         "I am a Backend Engineer with a sharp eye for UI/UX and a quality-first mindset. I specialize in building robust server-side architectures, designing intuitive user interfaces, and writing comprehensive test suites to ensure scalable, bug-free applications from database to display."
        </p>
      </div>

      {/* Visual divider matching the minimalist theme */}
      <div className="flex justify-center items-center gap-2 pt-4">
        <span className="h-[1px] w-12 bg-[#1a364a]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#7c93a3]/40" />
        <span className="h-[1px] w-12 bg-[#1a364a]" />
      </div>
    </section>
  );
}