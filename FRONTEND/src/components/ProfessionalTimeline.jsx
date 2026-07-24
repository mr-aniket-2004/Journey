import React from 'react';

const ProfessionalCard = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16 group/card">
      
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-20 items-center justify-center">
        <div className="absolute w-6 h-6 bg-emerald-500/20 rounded-full animate-ping opacity-75 group-hover/card:scale-150 transition-transform duration-500" />
        <div className="relative w-3.5 h-3.5 bg-gradient-to-tr from-emerald-400 to-teal-300 rounded-full border border-[#0A0F1D] shadow-[0_0_12px_rgba(16,185,129,0.8)] transition-transform duration-500 group-hover/card:scale-125" />
      </div>

      <div className={`w-full md:w-1/2 space-y-4 transition-all duration-500 ease-out 
        ${isEven ? 'md:text-right' : 'md:text-left md:order-2'}`}>
        <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase border border-emerald-500/30 rounded-md text-emerald-400 bg-emerald-500/10 mb-1">
          {data.roleType}
        </span>
        <h3 className="text-3xl md:text-4xl font-black text-slate-100 uppercase tracking-wide group-hover/card:text-white transition-colors duration-300">
          {data.role}
        </h3>
        <p className="text-xl font-bold text-[#E8D5C4]">
          {data.company} • <span className="text-sm text-slate-400 font-normal">{data.location}</span>
        </p>
        
        <div className={`space-y-1.5 pt-2 text-slate-400 font-mono text-xs tracking-wider flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
          <p>
            <span className="font-bold text-slate-600">TENURE:</span> {data.duration}
          </p>
        </div>
      </div>

      <div className={`w-full md:w-1/2 space-y-6 flex flex-col items-center ${!isEven && 'md:order-1'}`}>
        
        <div className="relative group p-1.5 rounded-xl bg-gradient-to-tr from-slate-800 to-slate-700/50 shadow-[0_15px_35px_rgba(0,0,0,0.6)] transform transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_20px_45px_rgba(16,185,129,0.1)]">
          <div className="bg-[#0E1626] p-2 rounded-lg border border-slate-700/50">
            <div className="overflow-hidden aspect-video w-full max-w-sm rounded-md">
              <img 
                src={data.imageUrl || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'} 
                alt={data.company}
                className="w-full h-full object-cover filter saturate-75 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700 ease-out" 
              />
            </div>
          </div>
          
          <div className="absolute top-3 right-3 flex space-x-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed text-left md:text-justify max-w-sm group-hover/card:text-slate-100 transition-colors duration-300">
          {data.contribution}
        </p>
      </div>

    </div>
  );
};

const ProfessionalTimeline = ({ experienceData = [] }) => {
  if (!experienceData || experienceData.length === 0) {
    return (
      <div className="min-h-screen bg-[#0A0F1D] text-slate-100 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-mono text-sm tracking-widest text-slate-400">Searching for Tech Opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0F1D] text-slate-100 px-6 py-20 md:px-12 font-sans selection:bg-emerald-500/20">
      <div className="max-w-5xl mx-auto">
        
        <header className="text-center mb-24 space-y-3">
          <h1 className="text-4xl md:text-6xl font-black tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500">
            Career Expedition
          </h1>
          <p className="text-emerald-400 font-mono tracking-widest text-xs uppercase">
            // Professional Milestones & Engineering Experience
          </p>
          <div className="w-16 h-[2px] bg-emerald-500/30 mx-auto mt-4" />
        </header>

        <main className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-8 w-0 h-[92%] border-l-2 border-dashed border-slate-800 z-0" />

          <div className="space-y-4 relative z-10">
            {experienceData.map((item, index) => (
              <ProfessionalCard 
                key={item.id || index} 
                data={item} 
                index={index} 
              />
            ))}
          </div>
        </main>
        
      </div>
    </div>
  );
};

export default ProfessionalTimeline;