
import React from 'react';
import { Dribbble, Twitter, Instagram, Youtube, Flame, Play } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    /* 
       We use a combination of sticky and specific top/bottom handling.
       The top-[calc(100vh-900px)] is a heuristic to help taller sidebars stick at the bottom 
       instead of being cut off at the top on smaller viewports.
    */
    <aside className="lg:sticky lg:top-[calc(100vh-880px)] w-full lg:w-[380px] shrink-0 z-30 mb-10 lg:mb-0">
      <div className="bg-white rounded-[32px] p-8 pb-10 flex flex-col items-center relative overflow-visible text-[#151312] shadow-2xl">
        
        {/* Video Tutorial Tab (Attached to the left of the card) */}
        <div className="absolute top-[75%] -left-4 z-50 transform -translate-y-1/2">
           <a 
             href="#" 
             className="bg-[#ff3b00] text-white flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform active:scale-95 group"
           >
             <div className="bg-white/20 p-1 rounded-full group-hover:bg-white/30">
               <Play className="w-4 h-4 fill-current" />
             </div>
             <span className="font-black text-sm uppercase tracking-tight">Video Tutorial</span>
           </a>
        </div>

        {/* Decorative Dotted Patterns */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden rounded-[32px]">
          {/* Top dotted curve */}
          <svg viewBox="0 0 400 400" className="absolute -top-10 -left-10 w-48 h-48 opacity-100">
            <path 
              d="M 20 180 Q 80 50 250 20" 
              fill="none" 
              stroke="#f46c38" 
              strokeWidth="4" 
              strokeDasharray="8 8" 
              strokeLinecap="round"
            />
          </svg>

          {/* Middle dotted curve */}
          <svg viewBox="0 0 400 200" className="absolute top-[55%] -left-10 w-full h-40 opacity-100">
            <path 
              id="curve"
              d="M 10 150 Q 150 150 280 20" 
              fill="none" 
              stroke="#f46c38" 
              strokeWidth="4" 
              strokeDasharray="8 8" 
              strokeLinecap="round"
            />
          </svg>

          {/* Floating Flame Icon on path */}
          <div className="absolute top-[52%] left-[28%] bg-[#f46c38] p-3 rounded-full shadow-lg z-10">
             <Flame className="w-5 h-5 text-white fill-current" />
          </div>
        </div>

        {/* Content - Z-index to be above patterns */}
        <div className="relative z-20 w-full flex flex-col items-center gap-8">
          <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl ring-1 ring-black/5">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
              alt="Aaabad Ahmed" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black tracking-tight leading-none">Aaabad Ahmed</h2>
            <p className="text-lg font-bold text-gray-400 leading-snug px-4">
              A Software Engineer who has developed countless innovative solutions.
            </p>
          </div>

          <div className="flex gap-5 mt-4">
            <SocialButton icon={Dribbble} href="#" />
            <SocialButton icon={Twitter} href="#" />
            <SocialButton icon={Instagram} href="#" />
            <SocialButton icon={Youtube} href="#" />
          </div>
        </div>
      </div>
    </aside>
  );
};

const SocialButton = ({ icon: Icon, href }: { icon: any, href: string }) => (
  <a 
    href={href} 
    className="transition-transform hover:scale-110 p-2"
  >
    <Icon className="w-7 h-7 text-[#f46c38]" strokeWidth={1.5} />
  </a>
);
