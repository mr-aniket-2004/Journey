import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 3;

export default function Portfolio({ data = [] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Derive unique categories safely
  const categories = ['All', ...new Set(data.map((project) => project.category))];

  // Filter raw data directly to avoid losing properties like keyFeatures or githubLink
  const filteredProjects = activeCategory === 'All' 
    ? data 
    : data.filter((p) => p.category === activeCategory);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1); 
  };

  return (
    <section className="space-y-8 border-t border-[#16293b] pt-16">
      <h2 className="text-3xl font-serif uppercase tracking-wider text-center text-[#ebdcd0]">
        Portfolio
      </h2>
      
      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Category Menu */}
        <div className="md:col-span-3 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 border-b md:border-b-0 md:border-r border-[#1a364a] whitespace-nowrap md:pr-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`text-left text-sm py-2 px-3 rounded font-mono transition-all duration-150 ${
                activeCategory === cat 
                  ? 'text-[#ebdcd0] bg-[#12425c] font-bold border-l-2 border-[#7c93a3]' 
                  : 'text-[#7c93a3] hover:text-[#ebdcd0] hover:bg-[#16293b]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedProjects.map((project) => (
            <Link 
              key={project.id} 
              to={`/project-details/${project.id}`}
              state={{ project }} // Passes full project object cleanly
              className="group aspect-square bg-[#16293b] border border-[#1a364a] rounded-lg p-4 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-[#12425c] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#12425c]"
            >
              <div className="w-full h-full bg-[#0b1426] border border-[#1a364a]/40 rounded flex items-center justify-center overflow-hidden transition-colors group-hover:bg-[#12425c]/10">
                {project?.image ? (
                  <img
                    src={project.image}
                    alt={project.projectName || "Project Preview"}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-xs text-[#7c93a3]/40 font-mono tracking-wider uppercase group-hover:text-[#ebdcd0]/60">
                    Preview
                  </span>
                )}
              </div>
              
              <div className="mt-3 flex justify-between items-center">
                <h3 className="text-sm font-serif text-[#ebdcd0] font-semibold truncate pr-2">
                  {project.projectName}
                </h3>
                <span className="text-[10px] font-mono uppercase bg-[#0b1426] text-[#7c93a3] px-2 py-0.5 rounded border border-[#1a364a] shrink-0">
                  {project.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-4">
          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                aria-label={`Go to page ${pageNum}`}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === pageNum 
                    ? 'w-3 h-1.5 bg-[#ebdcd0]' 
                    : 'w-1.5 h-1.5 bg-[#7c93a3]/30 hover:bg-[#7c93a3]'
                }`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}