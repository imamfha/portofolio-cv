
import React from 'react';
import { Dribbble, Twitter, Instagram, Flame, Play } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    /* 
       We use a combination of sticky and specific top/bottom handling.
       The top-[calc(100vh-900px)] is a heuristic to help taller sidebars stick at the bottom 
       instead of being cut off at the top on smaller viewports.
    */
    <aside className="lg:sticky lg:top-10 w-full lg:w-[380px] shrink-0 z-30 mb-10 lg:mb-0">
      <div className="bg-white rounded-[32px] p-6 pb-8 flex flex-col items-center relative overflow-visible text-[#151312] shadow-2xl">

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
        <div className="relative z-20 w-full flex flex-col items-center gap-4">
          <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src="/profile.jpg"
              alt="Imam Fajar Hudaya"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black tracking-tight leading-none">Imam Fajar Hudaya</h2>
            <p className="text-sm font-bold text-gray-400 leading-snug px-4">
              An Informatics Engineering student with a strong curiosity and a continuous desire to learn and improve.
            </p>
          </div>

          <div className="flex gap-4 mt-2">
            <SocialButton icon={Dribbble} href="https://dribbble.com/imam-fajar-hudaya" />
            <SocialButton icon={Twitter} href="https://x.com/imfh_10" />
            <SocialButton icon={Instagram} href="https://www.instagram.com/imamfrha/" />
          </div>
        </div>
      </div>
    </aside>
  );
};

const SocialButton = ({ icon: Icon, href }: { icon: any, href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform hover:scale-110 p-2"
  >
    <Icon className="w-7 h-7 text-[#f46c38]" strokeWidth={1.5} />
  </a>
);
