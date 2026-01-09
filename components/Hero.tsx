
import React from 'react';
import { Layers, LayoutGrid, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="space-y-16 py-12">
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
          <span className="text-white">COLLEGE</span><br />
          <span className="text-outline uppercase">STUDENT</span>
        </h1>
        <p className="text-xl text-[#998f8f] max-w-lg leading-relaxed mx-auto lg:mx-0">
          Enjoying learning new technologies, experimenting with code, and growing through hands-on projects.
        </p>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-start gap-x-16 gap-y-8">
        <StatItem value="+1" label="YEAR" subLabel="EXPERIENCE" />
        <StatItem value="+10" label="PROJECTS" subLabel="COMPLETED" />
      </div>


    </section>
  );
};

const StatItem = ({ value, label, subLabel }: { value: string, label: string, subLabel: string }) => (
  <div className="space-y-1">
    <div className="text-6xl font-semibold leading-none">{value}</div>
    <div className="text-xs font-medium text-[#998f8f] tracking-widest uppercase">
      {label}<br />{subLabel}
    </div>
  </div>
);

const FeatureCard = ({ title, color, textColor, link, icon, pattern }: { title: string, color: string, textColor: string, link: string, icon: React.ReactNode, pattern: React.ReactNode }) => (
  <a href={link} className={`${color} ${textColor} p-8 rounded-[32px] h-64 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 relative overflow-hidden shadow-lg`}>
    <div className="absolute inset-0 pointer-events-none">
      {pattern}
    </div>

    <div className="relative z-10">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold max-w-[280px] uppercase leading-tight tracking-tight">{title}</h3>
    </div>

    <div className="relative z-10 flex justify-end">
      <div className={`w-12 h-12 rounded-xl border-2 border-current flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white`}>
        <ArrowRight className="w-6 h-6" />
      </div>
    </div>
  </a>
);
