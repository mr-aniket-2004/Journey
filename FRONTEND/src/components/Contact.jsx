import React from 'react';

export default function Contact() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-serif uppercase tracking-wider text-center text-[#ebdcd0]">Contact Me</h2>
      <div className="grid md:grid-cols-12 gap-8 bg-[#16293b] border border-[#1a364a] rounded-xl p-8 max-w-4xl mx-auto shadow-xl">
        
        {/* Info Column */}
        <div className="md:col-span-5 space-y-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#1a364a] pb-6 md:pb-0 md:pr-8">
          <div>
            <h3 className="text-lg font-serif uppercase text-[#ebdcd0] mb-4">Contact Info</h3>
            <p className="text-sm text-[#7c93a3]">aniketchandiwade2004@gmail.com</p>
            <p className="text-sm text-[#7c93a3] mt-2">Aniket Chandiwade</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#7c93a3] mb-2">Location Base</h4>
            <p className="text-sm italic text-[#7c93a3]">Available for worldwide remote contracts.</p>
          </div>
        </div>

        {/* Input Form Column */}
        <form className="md:col-span-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full bg-[#0b1426] border border-[#1a364a] rounded px-4 py-3 text-sm text-[#ebdcd0] placeholder-[#7c93a3]/50 focus:outline-none focus:border-[#12425c]"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full bg-[#0b1426] border border-[#1a364a] rounded px-4 py-3 text-sm text-[#ebdcd0] placeholder-[#7c93a3]/50 focus:outline-none focus:border-[#12425c]"
          />
          <textarea 
            placeholder="Your Message..." 
            rows="4" 
            className="w-full bg-[#0b1426] border border-[#1a364a] rounded px-4 py-3 text-sm text-[#ebdcd0] placeholder-[#7c93a3]/50 focus:outline-none focus:border-[#12425c] resize-none"
          />
          <button className="w-full bg-[#12425c] hover:bg-[#1a5575] text-[#ebdcd0] text-xs font-semibold uppercase tracking-widest py-3 rounded transition-colors">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}