import React from "react";
import { Compass, Map, Flame, ArrowLeft } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { StoryData } from "../database/StroyData";

export default function Story_details() {
  const location = useLocation();
  const story = location.state?.story || {};
  const storyId = story.id || 201; // Default to first story if no ID is provided

  // Find the story data based on the ID
  const storyData = StoryData.find((item) => item.id === storyId) || StoryData[0];

  return (
    <div className="w-full bg-[#0B111E] text-[#E8D5C4] font-sans overflow-hidden min-h-screen">
      <Navbar />

      {/* Hero Banner with Dynamic Background Image */}
      <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-75 contrast-110 transition-all duration-500"
          style={{
            backgroundImage: `url('${storyData.primaryImage || "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=80"}')`,
          }}
        >
          <div className="absolute inset-0 bg-[#0B111E]/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wider text-[#F3E5D8] drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] font-serif uppercase">
            {storyData.category || "Story"}
            
          </h1>
        </div>

        {/* Jagged Mountain Divider SVG */}
        <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-12 md:h-20 text-[#0B111E] fill-current"
          >
            <path d="M0,0 L35,25 L75,10 L120,40 L180,15 L240,45 L310,12 L380,50 L450,20 L520,55 L600,10 L680,48 L750,15 L830,52 L900,18 L970,42 L1040,10 L1120,38 L1200,5 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </div>

      {/* Summary Section */}
      <section className="max-w-5xl mx-auto px-6 pt-8 pb-12 text-center space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-4xl font-black tracking-widest text-[#E8D5C4] uppercase font-serif">
            {storyData.title || "Story Title"}
          </h2>
          <div className="w-20 h-0.5 bg-amber-400/40 mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4 text-xs md:text-sm text-[#E8D5C4]/70 font-mono leading-relaxed">
          <p>
            {storyData.summary ||
              "Explore the rich tapestry of history through our curated adventures."}
          </p>
        </div>
      </section>

      {/* NEW: Two-Column Section (Left: Images | Right: Long Storyline) */}
      <section className="max-w-6xl mx-auto px-6 pb-20 border-t border-[#1a2d42] pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Partition: Story Photo Gallery */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#4a9aaa] flex items-center gap-2">
              <Map className="w-4 h-4" /> Visual Gallery
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {storyData.photos && storyData.photos.length > 0 ? (
                storyData.photos.map((photo, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border border-[#1a2d42] bg-[#080d17] shadow-lg"
                  >
                    <img
                      src={photo.url}
                      alt={photo.name}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {photo.name && (
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B111E] via-[#0B111E]/80 to-transparent p-3 pt-6">
                        <p className="text-xs font-mono text-[#E8D5C4]/90 truncate">
                          {photo.name}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                /* Fallback if no gallery photos exist */
                <div className="overflow-hidden rounded-lg border border-[#1a2d42]">
                  <img
                    src={storyData.primaryImage}
                    alt={storyData.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Partition: Detailed Storyline */}
          <div className="lg:col-span-7 space-y-6 bg-[#080d17]/60 border border-[#1a2d42] p-6 md:p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400/80 flex items-center gap-2">
              <Compass className="w-4 h-4" /> The Full Journey
            </h3>

            <div className="text-sm md:text-base text-[#E8D5C4]/85 leading-relaxed font-serif space-y-4 whitespace-pre-line">
              {storyData.longStoryline ||
                "No detailed storyline available for this adventure yet."}
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#4a9aaa] hover:text-[#E8D5C4] transition-colors border border-[#1a2d42] hover:border-[#4a9aaa] px-5 py-2.5 rounded-lg bg-[#080d17]"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Stories
          </Link>
        </div>
      </section>
    </div>
  );
}
