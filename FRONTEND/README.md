# Journey Frontend

![Live Website Screenshot](./live-website-screenshot.png)

## Live Demo

Explore the deployed portfolio here:

- https://journey-eight-gamma.vercel.app/

## Project Overview

`Journey` is a React + Vite portfolio that blends travel stories, professional milestones, and interactive UI animations in a modern landing page experience.

The website includes:

- Animated homepage hero section
- Interactive timeline and story cards
- Smooth navigation with React Router
- Icon-based floating actions and social links
- Responsive layout and modern dark theme styling

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Icons
- @icons-pack/react-simple-icons

## Setup Instructions

Use the commands below to run this project locally.

```bash
# Clone the repository
git clone https://github.com/your-username/Journey.git
cd FRONTEND

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then open the local URL shown by Vite in your browser.

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint checks

## Adding Interactive Pages

To add new interactive content:

1. Create components in `src/components/`.
2. Add page files in `src/pages/`.
3. Register routes in `src/App.jsx` using `react-router-dom`.
4. Use `framer-motion` for animations and `react-icons` for iconography.

## Recommended Improvements

- Add more story cards and travel locations in `src/database/`.
- Enhance the mobile menu experience in `src/components/Navbar.jsx`.
- Use `framer-motion` for page transitions in route components.

## Project Structure

```
src/
  App.jsx
  main.jsx
  index.css
  components/
    About.jsx
    Contact.jsx
    FloatingActions.jsx
    Footer.jsx
    Hero.jsx
    JourneyTimeline.jsx
    Loader.jsx
    Navbar.jsx
    Portfolio.jsx
    ProfessionalTimeline.jsx
    ProfileAbout.jsx
    ProfileHero.jsx
    Skills.jsx
  database/
    ProjectData.js
    StroyData.js
    TravelData.js
    TravelDiaryData.js
  pages/
    HistoricalAdventures.jsx
    Journey.jsx
    ProfessionalJourney.jsx
    Profile.jsx
    ProjectDetails.jsx
    Stories.jsx
    Story_details.jsx
    Travel_Diary.jsx
```

## Notes

- The screenshot above shows the live site preview.
- The app is deployed at the provided Vercel URL.
- Customize the experience by updating `src/components` and `src/pages`.
