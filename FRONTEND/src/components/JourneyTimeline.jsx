import React from 'react';
import { Link } from 'react-router-dom';

const JourneyCard = ({ data = {}, index }) => {
  const isEven = index % 2 === 0;



  return (
    <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16 group/card">
      
      {/* Central Timeline Dot & Glowing Light Spot */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-20 items-center justify-center">
        {/* Outer Pulsing Glow */}
        <div className="absolute w-6 h-6 bg-amber-400/30 rounded-full animate-ping opacity-75 group-hover/card:scale-125 transition-transform duration-500" />
        {/* Inner Bright Spot */}
        <div className="relative w-3.5 h-3.5 bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-full border border-[#0B111E] shadow-[0_0_10px_rgba(251,191,36,0.8)] transition-transform duration-500 group-hover/card:scale-110" />
      </div>

      {/* Left / Primary Details Block */}
      <div 
        className={`w-full md:w-1/2 space-y-4 transition-all duration-500 ease-out ${
          isEven ? 'md:text-right md:items-end' : 'md:text-left md:order-2 md:items-start'
        }`}
      >
        <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase border border-[#E8D5C4]/20 rounded-full text-amber-300 bg-amber-400/5 mb-1">
          {data.category || 'Memory'}
        </span>
        
        <div>
          <Link 
            to={data.link || `/details/${data.id}` } 
            state={{ journeyItem: data }}
            className="inline-block text-3xl md:text-4xl font-black text-[#E8D5C4] uppercase tracking-wide hover:text-white transition-colors duration-300"
          >
            <h3>{data.placeName || 'Untitled Memory'}</h3>
          </Link>
        </div>

        <p className="text-sm text-[#E8D5C4]/60 font-mono tracking-wider">
          {data.smallSummary}
        </p>

        {/* Metadata section (Location & Date) */}
        <div className={`space-y-1 pt-2 text-[#E8D5C4]/60 font-mono text-xs tracking-wider flex flex-col ${
          isEven ? 'md:items-end' : 'md:items-start'
        }`}>
          {data.state && (
            <p>
              <span className="font-bold text-[#E8D5C4]/40">LOCATION:</span> {data.city}, {data.state}
            </p>
          )}
          {data.date && (
            <p>
              <span className="font-bold text-[#E8D5C4]/40">DATE:</span> {data.date}
            </p>
          )}
        </div>
      </div>

      {/* Right / Scrapbook Image & Extended Note Block */}
      <div className={`w-full md:w-1/2 space-y-6 flex flex-col items-center ${!isEven ? 'md:order-1' : ''}`}>
        
        {/* Scrapbook Frame with Smooth Hover Lift, Zoom, and Tilt */}
        <div className={`relative group p-4 transform transition-all duration-500 ease-out ${
          isEven ? 'hover:rotate-3' : 'hover:-rotate-3'
        } hover:-translate-y-3`}>
          
          {/* Main Polaroid Frame */}
          <div className="bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-sm border border-white/10 transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(251,191,36,0.15)]">
            <div className="overflow-hidden aspect-video w-full max-w-sm">
              <img 
                src={data.primaryImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'} 
                alt={data.title || 'Memory Image'}
                className="w-full h-full object-cover filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out" 
              />
            </div>
          </div>

          {/* Semi-transparent Tape element */}
          <div className="absolute -top-1 left-[35%] w-20 h-7 bg-amber-200/40 backdrop-blur-[1px] shadow-sm -rotate-2 transform pointer-events-none border-l border-r border-dashed border-amber-300/30 transition-transform duration-500 group-hover:rotate-1" />
        </div>

        {/* Detailed Quote/Description under Image */}
        {data.shortDescription && (
          <p className="text-[#E8D5C4]/80 text-sm leading-relaxed text-left md:text-justify italic max-w-sm group-hover/card:text-[#E8D5C4] transition-colors duration-300">
            "{data.shortDescription}"
          </p>
        )}
      </div>

    </div>
  );
};

const JourneyTimeline = ({ journeyData = [] }) => {
  if (!journeyData || journeyData.length === 0) {
    return (
      <div className="min-h-screen bg-[#0B111E] text-white flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-mono text-sm tracking-widest text-[#E8D5C4]/60">LOADING MEMORIES...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B111E] text-white px-6 py-20 md:px-12 font-sans selection:bg-amber-400/30">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Header */}
        <header className="text-center mb-24 space-y-3">
          <h1 className="text-4xl md:text-6xl font-black text-[#E8D5C4] tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#E8D5C4] to-[#E8D5C4]/60">
            Our Adventure Log
          </h1>
          <p className="text-amber-300/60 font-serif italic text-lg">
            A path of memories mapped in time
          </p>
          <div className="w-16 h-[2px] bg-amber-400/30 mx-auto mt-4" />
        </header>

        {/* Timeline Container */}
        <main className="relative">
          {/* Vertical Dotted Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-8 w-0 h-[92%] border-l-2 border-dashed border-[#E8D5C4]/20 z-0" />

          <div className="space-y-4 relative z-10">
            {journeyData.map((item, index) => (
              <JourneyCard 
                key={item.id || `journey-item-${index}`} 
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

export default JourneyTimeline;