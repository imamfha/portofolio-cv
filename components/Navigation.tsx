
import React from 'react';
import { Home, FolderOpen, Briefcase, Wrench, SquarePen } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <div className="relative group cursor-pointer flex items-center justify-center p-3 rounded-xl transition-all hover:bg-white/10">
    <Icon className={`w-6 h-6 transition-colors duration-300 ${active ? 'text-[#f46c38]' : 'text-white'}`} strokeWidth={active ? 2.5 : 2} />
    <span className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-md text-[11px] font-medium text-white whitespace-nowrap pointer-events-none z-50">
      {label}
    </span>
  </div>
);

export const Navigation: React.FC = () => {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-max px-4">
      <nav className="flex items-center gap-2 bg-[#151312]/80 backdrop-blur-xl border border-white/5 px-4 py-2 rounded-[24px] shadow-2xl">
        <NavItem icon={Home} label="Home" active />
        <NavItem icon={FolderOpen} label="Projects" />
        <NavItem icon={Briefcase} label="Experience" />
        <NavItem icon={Wrench} label="Tools" />
        <NavItem icon={SquarePen} label="Thoughts" />
      </nav>
    </div>
  );
};
