import React from 'react'
import Navbar from '../components/Navbar';
import ProfessionalTimeline from '../components/ProfessionalTimeline';  

const ProfessionalJourney = () => {

const tempExperienceData = [
  // {
  //   id: "prof-1",
  //   role: "Lead Full-Stack Engineer",
  //   roleType: "Full-Time / Remote",
  //   company: "Apex Tech Labs",
  //   location: "Mumbai, MH",
  //   duration: "June 2025 - Present",
  //   imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  //   contribution: "Spearheaded the migration of a legacy system to a modern React and Node.js microservices architecture, reducing page load latency by 42% and implementing real-time data tracking pipelines."
  // },
  // {
  //   id: "prof-2",
  //   role: "Frontend Developer",
  //   roleType: "Full-Time / Hybrid",
  //   company: "Nexus Digital Systems",
  //   location: "Pune, MH",
  //   duration: "Jan 2024 - May 2025",
  //   imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  //   contribution: "Designed and engineered interactive component libraries using React and Tailwind CSS, improving code reusability across three core platform teams and boosting mobile responsiveness."
  // },
  // {
  //   id: "prof-3",
  //   role: "Software Engineering Intern",
  //   roleType: "Internship",
  //   company: "ByteCraft Solutions",
  //   location: "Bangalore, KA",
  //   duration: "Aug 2023 - Dec 2023",
  //   imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
  //   contribution: "Collaborated on designing RESTful APIs and optimized database search indexing using SQL, reducing critical query response times by 15% and assisting in production bug resolution."
  // }
];

  return (
    <>
    <Navbar />
    <ProfessionalTimeline experienceData={tempExperienceData} />    
    </>
  )
}

export default ProfessionalJourney