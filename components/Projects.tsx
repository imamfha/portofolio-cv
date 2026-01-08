
import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section className="space-y-10 py-20">
      <h2 className="text-6xl font-bold tracking-tighter">
        RECENT<br />
        <span className="text-outline uppercase">Projects</span>
      </h2>

      <div className="space-y-4">
        {PROJECTS.map((project) => (
          <a 
            key={project.id} 
            href={project.link}
            className="flex items-center justify-between group p-6 rounded-3xl border border-white/5 transition-colors hover:bg-white/5"
          >
            <div className="flex items-center gap-6">
              <div className="w-32 aspect-square rounded-2xl overflow-hidden bg-gray-800">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                <p className="text-[#998f8f] font-inter">{project.category}</p>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
