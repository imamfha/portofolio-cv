
import React from 'react';
import { BLOG_ARTICLES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <section className="space-y-10 py-20">
      <h2 className="text-6xl font-bold tracking-tighter">
        DESIGN<br />
        <span className="text-outline uppercase">Thoughts</span>
      </h2>

      <div className="space-y-4">
        {BLOG_ARTICLES.map((article) => (
          <a 
            key={article.id}
            href={article.link}
            className="block group p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-all relative overflow-hidden"
          >
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
               <ArrowUpRight className="w-5 h-5" />
            </div>
            <div className="space-y-4 max-w-xl">
              <h3 className="text-2xl font-bold leading-tight group-hover:text-orange-500 transition-colors">{article.title}</h3>
              <p className="text-[#998f8f] text-sm leading-relaxed font-inter">
                {article.summary}
              </p>
              <div className="flex gap-6 text-xs text-gray-500 font-medium">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
