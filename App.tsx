
import React from 'react';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Tools } from './components/Tools';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-orange-500 selection:text-white">
      <Navigation />
      
      {/* Floating CTA Buttons - Bottom right */}
      <div className="fixed bottom-10 right-10 z-40 flex flex-col gap-3 pointer-events-none">
          <a href="#" className="pointer-events-auto bg-[#c5ff41] text-[#151312] px-6 py-4 rounded-2xl font-black text-sm shadow-2xl shadow-[#c5ff41]/20 hover:scale-105 transition-all active:scale-95 uppercase tracking-wider">
            Download Resume
          </a>
      </div>

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
            <div id="thoughts">
              <Blog />
            </div>
            <Contact />
            
            <footer className="pt-20 border-t border-white/5 text-center text-sm text-[#998f8f] font-inter">
              <p>
                Made with <span className="text-orange-500">♥</span> by <a href="#" className="text-white hover:underline font-bold">Templyo</a> | Powered by <a href="#" className="text-white hover:underline font-bold">React</a>
              </p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
