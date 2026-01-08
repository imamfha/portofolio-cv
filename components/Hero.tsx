
import React from 'react';
import { Layers, LayoutGrid, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="space-y-16 py-12">
      <div className="space-y-6">
        <h1 className="text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
          <span className="text-white">SOFTWARE</span><br />
          <span className="text-outline uppercase">Engineer</span>
        </h1>
        <p className="text-xl text-[#998f8f] max-w-lg leading-relaxed">
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-16 gap-y-8">
        <StatItem value="+12" label="YEARS OF" subLabel="EXPERIENCE" />
        <StatItem value="+46" label="PROJECTS" subLabel="COMPLETED" />
        <StatItem value="+20" label="WORLDWIDE" subLabel="CLIENTS" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FeatureCard 
          title="DYNAMIC ANIMATION, MOTION DESIGN" 
          color="bg-[#f46c38]" 
          textColor="text-white"
          icon={<Layers className="w-8 h-8" />}
          pattern={
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-50 120 Q 50 80 150 140 T 350 100 T 500 160" stroke="currentColor" strokeWidth="40" fill="none" />
              <path d="M-50 40 Q 50 0 150 60 T 350 20 T 500 80" stroke="currentColor" strokeWidth="40" fill="none" />
            </svg>
          }
          link="/experience"
        />
        <FeatureCard 
          title="FRAMER, FIGMA, WORDPRESS, REACTJS" 
          color="bg-[#c5ff41]" 
          textColor="text-[#151312]"
          icon={<LayoutGrid className="w-8 h-8" />}
          pattern={
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-20 180 L 40 40 L 100 160 L 160 20 L 220 180 L 280 60 L 340 140 L 400 10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M10 200 L 70 60 L 130 180 L 190 40 L 250 200 L 310 80 L 370 160 L 430 30" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          }
          link="/projects"
        />
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
