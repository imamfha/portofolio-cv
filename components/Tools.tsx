
import React from 'react';
import { TOOLS } from '../constants';

export const Tools: React.FC = () => {
  return (
    <section className="space-y-10 py-20">
      <h2 className="text-6xl font-bold tracking-tighter">
        PREMIUM<br />
        <span className="text-outline uppercase">Tools</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TOOLS.map((tool) => (
          <a
            key={tool.id}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all flex items-center gap-4 bg-white/5 group"
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-2 flex items-center justify-center transition-transform group-hover:scale-110">
              <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold">{tool.name}</h3>
              <p className="text-xs text-[#998f8f] font-inter">{tool.category}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
