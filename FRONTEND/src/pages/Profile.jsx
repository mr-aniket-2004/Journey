import React from 'react'
import Navbar from '../components/Navbar';
import ProfileHero from '../components/ProfileHero';
import ProfileAbout from '../components/ProfileAbout';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

import {projectDetails} from '../database/ProjectData'


const Profile = () => {
  return (
    <>
      <Navbar />
    <div className="bg-[#0B111E] text-[#ebdcd0] min-h-screen font-sans relative antialiased selection:bg-[#12425c]">
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#1a364a] blur-3xl rounded-full pointer-events-none -z-10" />
      

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-32">
        <ProfileHero />
        <ProfileAbout />
        <Skills />
        <Portfolio data={projectDetails}/>
        <Contact />
      </main>

      <footer className="border-t border-[#16293b] py-8 text-center text-sm text-[#7c93a3]">
        <p>© {new Date().getFullYear()} Aniket Chandiwade. Built with React & Vite.</p>
      </footer>
    </div>
    </>
  );
}

export default Profile