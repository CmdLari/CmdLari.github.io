
import { useState } from 'react';

import FallingStars from './components/FallingStars';
import CursorStars from './components/CursorStars';
import Navigation from './components/Navigation';
import Content from './components/Content';

import './App.css';

export type Section = 'Games' | 'Galleries' | 'About';

export const submenus = {
  Games: [
    'out_of_water',
    'read_3am',
    'banishing_you',
    'ccc',
    'orpheus_revenge',
    'tenfold_tales',
  ],
  Galleries: [
    'tokyo',
    'photography',
    'design',
    'illustration',
  ],
  About: [
    'about_me',
    'imprint',
  ],
} as const;


export type Subsection = (typeof submenus)[Section][number];

export const submenuLabels: Record<Subsection, string> = {
  out_of_water: 'Out of Water',
  read_3am: 'Read: 3AM',
  banishing_you: 'Banishing You',
  ccc: "Crow's Curated Closet",
  orpheus_revenge: "Orpheus' Revenge",
  tenfold_tales: 'Tenfold Tales',

  tokyo: 'Tokyo Travels',
  photography: 'Photography',
  design: 'Design',
  illustration: 'Illustration',

  about_me: 'About Me',
  imprint: 'Imprint',
};

function App() {
  const [activePage, setActivePage] = useState<Section | null>(null);
  const [activeSubpage, setActiveSubpage] = useState<Subsection | null>(null);

  const handleSelectSection = (section: Section | null) => {
    setActivePage(section);
    setActiveSubpage(section ? submenus[section][0] : null);
  };

  return (
    <main className={`app-layout ${activePage ? 'has-content' : ''}`}>
      <FallingStars />

      <Navigation
        selectedSection={activePage}
        selectedSubsection={activeSubpage}
        onSelectSection={handleSelectSection}
        onSelectSubsection={setActiveSubpage}
      />

      {activePage && activeSubpage && (
        <Content
          activePage={activePage}
          activeSubpage={activeSubpage}
        />
      )}

      <CursorStars />
    </main>
  );
}

export default App;
