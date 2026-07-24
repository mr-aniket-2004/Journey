import React from "react";
import { Compass, Map, Flame } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TravelData } from "../database/TravelData";

export default function HistoricalAdventures() {
  const location = useLocation();
  const journeyItem = location.state?.journeyItem || {};

  const features = [
    {
      id: "guides",
      title: "GUIDES",
      icon: (
        <Compass className="w-10 h-10 text-[#4a9aaa] group-hover:scale-110 transition-transform duration-300" />
      ),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolore magnam aliquam.",
    },
    {
      id: "tours",
      title: "TOURS",
      icon: (
        <Map className="w-10 h-10 text-[#4a9aaa] group-hover:scale-110 transition-transform duration-300" />
      ),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolore magnam aliquam.",
    },
    {
      id: "camping",
      title: "CAMPING",
      icon: (
        <Flame className="w-10 h-10 text-[#4a9aaa] group-hover:scale-110 transition-transform duration-300" />
      ),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolore magnam aliquam.",
    },
  ];

  // Updated image URLs to relevant high-quality historical & archaeological photos
  const finaldata = journeyItem.id ? TravelData.find((item) => item.id === journeyItem.id) : TravelData[0];
  const travelPhotos =
    finaldata.photos?.map((photo) => ({
      name: photo.name,
      url: photo.url,
    })) || [];

  return (
    <div className="w-full bg-[#0B111E] text-[#E8D5C4] font-sans overflow-hidden">
      <Navbar />

      <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-75 contrast-110"
          style={{
            backgroundImage: `url(${finaldata.primaryImage || "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=80"})`,
          }}
        >
          <div className="absolute inset-0 bg-[#0B111E]/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-2">
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-wider text-[#F3E5D8] drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] font-serif uppercase">
            {finaldata.category}
            <span className="block text-[#4a9aaa] tracking-widest mt-1">
              Adventures
            </span>
          </h1>
        </div>

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

      <section className="max-w-5xl mx-auto px-6 pt-8 pb-16 text-center space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-4xl font-black tracking-widest text-[#E8D5C4] uppercase font-serif">
            {journeyItem.placeName || "Untitled Memory"} -{" "}
            {journeyItem.state || "Unknown Location"}
          </h2>
          <div className="w-20 h-0.5 bg-amber-400/40 mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4 text-xs md:text-sm text-[#E8D5C4]/70 font-mono leading-relaxed">
          <p>{journeyItem.longDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#131B2E] border border-[#E8D5C4]/10 hover:border-[#4a9aaa] rounded-xl p-6 flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-aqua-500/5"
            >
              <div className="p-4 rounded-full bg-amber-400/5 border border-[#4a9aaa] group-hover:border-[#4a9aaa] transition-colors duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold font-serif tracking-widest text-[#E8D5C4] group-hover:text-[#4a9aaa] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-[#E8D5C4]/60 font-mono leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto border-t border-[#E8D5C4]/10 my-4" />

      {/* Hexagon Cards Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 place-items-center">
          {travelPhotos.map((item) => (
            <div
              key={item.id}
              className="relative w-full max-w-[320px] aspect-[1/1.15] group transition-transform duration-500 hover:-translate-y-2"
            >
              {/* Outer Glow Effect */}
              <div
                className="absolute inset-0 bg-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />

              {/* Hexagon Border Wrapper */}
              <div
                className="w-full h-full p-[2px] bg-gradient-to-b from-amber-500/40 via-slate-700 to-amber-900/30 transition-colors duration-300 group-hover:from-[#4a9aaa] group-hover:to-[#4a9aaa]"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                {/* Hexagon Inner Container */}
                <div
                  className="w-full h-full relative overflow-hidden bg-[#121A2B]"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-90 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700 ease-out"
                  />

                  {/* Dark gradient overlay behind text area for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-[#0B111E]/70 to-transparent" />

                  {/* Title positioned at ~75% (3/4 height) from the top to ensure full visibility */}
                  <div className="absolute top-[68%] left-0 right-0 -translate-y-1/2 z-10 px-4 text-center">
                    <h3 className="font-serif text-lg md:text-xl font-bold tracking-widest text-[#E8D5C4] group-hover:text-[#4a9aaa] transition-colors duration-300 drop-shadow-md">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div>
        <Link
          to="/travel-diary"
          state={{ finaldata }}
          className="block text-center text-sm md:text-base font-mono tracking-widest text-[#E8D5C4]/70 hover:text-[#4a9aaa] transition-colors py-2"
        >
          <button className="px-6 py-2 mb-3 border border-[#4a9aaa] rounded-lg hover:bg-[#4a9aaa]/10 transition-colors duration-300">
            Go to Travel Diary
          </button>
        </Link>
      </div>
    </div>
  );
}
