import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { projectDetails } from '../database/ProjectData';

export default function ProjectDetails() {
  const location = useLocation();
  const params = useParams();

  // Handle parameter name flexibility (:id or :projectId)
  const currentId = params.id || params.projectId;

  // 1. Try location state passed from <Link state={{ project }} />
  // 2. Fall back to finding project by matching ID as a string from static import
  const projectData = 
    location.state?.project || 
    projectDetails.find((p) => String(p.id) === String(currentId)) || 
    {};

  // Check title or projectName to confirm project data exists
  const title = projectData.projectName || projectData.title;
  const github = projectData.githubLink || projectData.GitLink;

  if (!title) {
    return (
      <div className="bg-[#0B111E] text-slate-100 min-h-screen flex flex-col items-center justify-center font-sans p-4">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        {/* Updated Back Link to Profile / Portfolio */}
        <Link 
          to="/profile" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 rounded-lg"
        >
          &larr; Back to Profile
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0B111E] text-slate-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation / Back Button */}
        <div className="mb-6">
          <Link 
            to="/profile" 
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-lg transition-all duration-200 hover:border-slate-700 active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Profile
          </Link>
        </div>

        {/* Header Section */}
        <header className="mb-8 border-b border-slate-800/80 pb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="uppercase text-xs font-bold tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
              {projectData.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-4">
            {title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-lg shadow-cyan-500/10 active:scale-95"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View Source Code
              </a>
            )}
          </div>
        </header>

        {/* Hero Banner Image */}
        {projectData.image && (
          <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl mb-10 group">
            <img 
              src={projectData.image} 
              alt={title} 
              className="w-full h-[300px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-transparent opacity-80" />
          </div>
        )}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Description & Features */}
          <main className="lg:col-span-2 space-y-6">
            <section className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-3">
                Overview
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {projectData.description}
              </p>
            </section>

            {projectData.keyFeatures && projectData.keyFeatures.length > 0 && (
              <section className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-3">
                  Key Modules & Breakdown
                </h2>
                <ul className="space-y-3 text-sm sm:text-base text-slate-400">
                  {projectData.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                      <span>
                        <strong className="text-slate-200">{feature.title}:</strong> {feature.details}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            {projectData.techStack && projectData.techStack.length > 0 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-lg font-bold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-3">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {projectData.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-md hover:border-cyan-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-3">
                Project Specs
              </h2>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Category</span>
                  <span className="text-slate-200 font-medium capitalize">{projectData.category}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Architecture</span>
                  <span className="text-slate-200 font-medium">Responsive Flex/Grid</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>UI Prototyping</span>
                  <span className="text-slate-200 font-medium">Figma</span>
                </div>
                <div className="flex justify-between">
                  <span>Accessibility</span>
                  <span className="text-slate-200 font-medium">WCAG Compliant</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}