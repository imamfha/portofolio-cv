
import React from 'react';
import { EXPERIENCES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section className="space-y-10 py-20">
      <h2 className="text-6xl font-bold tracking-tighter">
        12 YEARS OF<br />
        <span className="text-outline uppercase">Experience</span>
      </h2>

      <div className="space-y-4">
        {EXPERIENCES.map((exp) => (
          <div 
            key={exp.id}
            className="group p-8 rounded-3xl border border-white/5 bg-transparent hover:bg-white/5 transition-colors flex flex-col lg:flex-row lg:items-start justify-between gap-6"
          >
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight">{exp.company}</h3>
                <ArrowUpRight className="lg:hidden w-5 h-5 text-gray-500" />
              </div>
              <p className="text-[#998f8f] leading-relaxed text-sm lg:text-base font-inter">
                {exp.description}
              </p>
            </div>
            <div className="flex items-center justify-between lg:justify-end gap-4 min-w-[150px]">
              <span className="text-sm font-medium text-[#998f8f]">{exp.period}</span>
              <ArrowUpRight className="hidden lg:block w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
