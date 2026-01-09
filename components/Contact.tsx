
import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20">
            <div className="bg-[#1c1a19] rounded-[2rem] p-8 lg:p-12 border border-white/5 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5ff41]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row gap-12 justify-between items-center md:items-start">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                            Let's work <br />
                            <span className="text-[#998f8f]">together.</span>
                        </h2>
                        <p className="text-[#998f8f] text-lg mb-8 leading-relaxed">
                            I'm currently available for freelance projects and open to full-time opportunities.
                            If you have a project that needs some creative touch, let's chat.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <a href="mailto:imamfajar060@gmail.com" className="flex-1 w-full inline-flex items-center justify-center gap-3 bg-[#c5ff41] text-[#151312] px-8 py-5 rounded-xl font-bold hover:bg-[#b0e63a] transition-colors text-lg">
                                <Mail size={24} />
                                Send Email
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 w-full md:w-auto min-w-[300px]">
                        <div>
                            <h3 className="text-sm font-bold text-[#998f8f] uppercase tracking-wider mb-4 text-center md:text-left">Socials</h3>
                            <div className="flex flex-col gap-3">
                                <a href="https://www.linkedin.com/in/imamfh/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                    <span className="font-medium">LinkedIn</span>
                                    <ArrowUpRight size={18} className="text-[#998f8f] group-hover:text-white transition-colors" />
                                </a>
                                <a href="https://github.com/imamfha" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                    <span className="font-medium">GitHub</span>
                                    <ArrowUpRight size={18} className="text-[#998f8f] group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
