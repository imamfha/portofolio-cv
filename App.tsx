
import React from 'react';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Tools } from './components/Tools';

import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-orange-500 selection:text-white">
      <Navigation />



      <main className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <Sidebar />

          <div className="flex-1 min-w-0">
            <Hero />
            <div id="projects">
              <Projects />
            </div>
            <div id="experience">
              <Experience />
            </div>
            <div id="tools">
              <Tools />
            </div>

            <Contact />


          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
