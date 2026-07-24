import React from 'react';
import Footer from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';
import { TravelDiaryData } from '../database/TravelDiaryData';

export default function Travel_Diary() {
  const location = useLocation();
  const journeyItem = location.state?.finaldata || {};

  // Extract ID with fallback
  const journeyItemId = journeyItem.id || 101;

  // Find the single diary entry object (matches travelDataId)
  const data = TravelDiaryData.find(
    (item) => item.travelDataId === journeyItemId || item.id === journeyItemId
  ) || TravelDiaryData[0]; // Fallback to first item if none found

  // Array of rotations/tape styles to alternate dynamically
  const polaroidStyles = [
    { rotation: '-rotate-3', tapeStyle: 'bg-amber-100/40 border-slate-400/30 -top-3 left-10 -rotate-3' },
    { rotation: 'rotate-6', tapeStyle: 'bg-amber-100/40 border-slate-400/30 -top-3 right-10 rotate-12' },
    { rotation: '-rotate-6', tapeStyle: 'bg-amber-100/40 border-slate-400/30 -top-3 left-8 -rotate-6' },
    { rotation: 'rotate-3', tapeStyle: 'bg-amber-100/40 border-slate-400/30 -top-3 right-8 rotate-6' },
  ];

  return (
    <div className="min-h-screen bg-[#0B111E] text-[#E8D5C4] font-sans pt-16 pb-14 px-6 md:px-12 selection:bg-[#4a9aaa]/30 flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full space-y-16 mb-20">
        
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-widest text-[#E8D5C4]">
            {data.destinationName} <span className="font-serif italic capitalize text-[#4a9aaa] tracking-normal">Memories</span>
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#4a9aaa] to-transparent mx-auto" />
        </header>

        {/* Days Timeline */}
        <div className="space-y-20">
          {data.days && data.days.map((item, index) => {
            const isEven = index % 2 === 0;
            // Get alternating polaroid styles based on index
            const style = polaroidStyles[index % polaroidStyles.length];

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Polaroid Photo Frame */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div
                    className={`relative bg-white p-4 pb-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform transition-all duration-500 hover:scale-105 hover:rotate-0 hover:z-20 max-w-sm w-full ${style.rotation}`}
                  >
                    {/* Washi Tape Accent */}
                    <div
                      className={`absolute w-20 h-7 backdrop-blur-sm border-l border-r border-dashed shadow-sm pointer-events-none ${style.tapeStyle}`}
                    />

                    {/* Image */}
                    <div className="overflow-hidden aspect-[4/3] w-full bg-slate-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Day Details */}
                <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                  <span className="font-serif italic text-3xl md:text-4xl text-[#4a9aaa] block">
                    Day {item.dayNumber}
                  </span>

                  <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider text-[#E8D5C4]">
                    {item.title}{' '}
                    <span className="text-sm font-semibold text-[#E8D5C4]/70 tracking-normal block md:inline mt-1 md:mt-0">
                      ( {item.time} )
                    </span>
                  </h2>

                  <p className="text-sm md:text-base text-[#E8D5C4]/80 leading-relaxed font-sans max-w-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Back Button */}
      <div>
        <Link 
          to={'/journey'} 
          className="block text-center text-sm md:text-base font-mono tracking-widest text-[#E8D5C4]/70 hover:text-[#4a9aaa] transition-colors py-2"
        >
          <button className="px-6 py-2 mb-3 border border-[#4a9aaa] rounded-lg hover:bg-[#4a9aaa]/10 transition-colors duration-300">
            Back to Journey Details
          </button>
        </Link>
      </div>
    </div>
  );
}