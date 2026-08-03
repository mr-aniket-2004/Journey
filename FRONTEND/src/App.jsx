import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loader from './components/Loader';
import Hero from './components/Hero';
import About from './components/About';
import FloatingActions from './components/FloatingActions';
import Journey from './pages/Journey'; 
import ProfessionalJourney from './pages/ProfessionalJourney';
import Profile from './pages/Profile';
import HistoricalAdventures from './pages/HistoricalAdventures';
import Travel_Diary from './pages/Travel_Diary';
import Stories from './pages/Stories';
import Story_details from './pages/Story_details';
import ProjectDetails from './pages/ProjectDetails';


my_api ="ghsuhyQUAY12563"



export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      
      <FloatingActions />
      
      <Routes>
      
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <About />
            </>
          } 
        />

       
        <Route 
          path="*" 
          element={
            <div className="flex items-center justify-center min-h-screen text-xl">
              404 | Page Not Found
            </div>
          } 
        />

        <Route path="/journey" element={<Journey />} />
        <Route path="/professional-journey" element={<ProfessionalJourney />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details/:id" element={<HistoricalAdventures />} />
        <Route path="/travel-diary" element={<Travel_Diary />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/story/:id" element={<Story_details />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}