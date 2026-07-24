import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import { Play } from 'lucide-react';

import {StoryData} from '../database/StroyData';


export default function StoriesPage() {
  return (
    <>
      <Navbar />  
      <div className="min-h-screen bg-[#0B0F17] text-[#E2E8F0]">
        <section className="py-20 px-6 md:px-16 font-serif">
          <div className="max-w-6xl mx-auto space-y-24">
            
            {/* Header */}
            <header className="text-center space-y-1">
              <span className="text-xs font-sans tracking-[0.3em] text-[#94A3B8] uppercase block">
                THE
              </span>
              <h1 className="text-4xl md:text-5xl font-black tracking-widest text-[#F8FAFC] uppercase">
                STORIES
              </h1>
            </header>

            {/* Stories Grid */}
            <div className="space-y-32">
              {StoryData.map((story, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={story.id}
                    className={`flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 ${
                      isEven ? '' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Soft Feathered Masked Image */}
                    <div className="w-full md:w-1/2 flex justify-center relative group">
                      
                      {/* Subtle Ambient Glow behind the fade */}
                      <div className="absolute inset-0 bg-[#38BDF8]/5 blur-3xl rounded-full -z-10 group-hover:bg-[#38BDF8]/15 transition-all duration-700" />

                      <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <img
                          src={story.primaryImage}
                          alt={story.title}
                          className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                          style={{
                            // Smooth radial feathering fading all edges into dark theme (#0B0F17)
                            maskImage:
                              'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
                            WebkitMaskImage:
                              'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
                          }}
                        />
                      </div>
                    </div>

                    {/* Content Block */}
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                      <div className="space-y-5 max-w-md text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-serif font-bold tracking-wide text-[#F8FAFC] leading-snug">
                          {story.title}
                        </h2>

                        <p className="text-xs md:text-sm font-sans text-[#94A3B8] leading-relaxed">
                          {story.summary}
                        </p>

                        {/* Minimalist Pill Button from Reference Image */}
                        <div className="pt-2">
                          <Link 
                          to={`/story/${story.id}`} 
                          state = {{story}}
                          className="inline-flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-[#E2E8F0] hover:text-[#38BDF8] transition-colors pt-2 group/btn"
                        >
                          <span className="p-1.5 rounded-full border border-[#334155] group-hover/btn:border-[#38BDF8] group-hover/btn:bg-[#38BDF8]/10 transition-all duration-300">
                            <Play className="w-3 h-3 fill-current" />
                          </span>
                          Play story
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      </div>
    </>
  );
}