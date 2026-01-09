
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section className="space-y-10 py-20">
      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-center md:text-left">
        1 YEAR OF<br />
        <span className="text-outline uppercase">Experience</span>
      </h2>

      <div className="space-y-4">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="p-6 md:p-8 rounded-3xl border border-white/5 bg-white/5 flex flex-col items-center lg:flex-row lg:items-start justify-between gap-6"
          >
            <div className="space-y-4 max-w-xl text-center lg:text-left w-full">
              <div className="flex items-center justify-center lg:justify-between gap-4">
                <h3 className="text-2xl font-bold tracking-tight">{exp.company}</h3>
                <Briefcase className="lg:hidden w-5 h-5 text-gray-500" />
              </div>
              <p className="text-[#998f8f] leading-relaxed text-sm lg:text-base font-inter">
                {exp.description}
              </p>
              <p className="text-sm font-medium text-[#998f8f]">{exp.period}</p>
            </div>
            <div className="flex items-center justify-between lg:justify-end gap-4 min-w-[150px]">
              <Briefcase className="hidden lg:block w-5 h-5 text-gray-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
