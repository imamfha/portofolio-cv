
import React from 'react';

export const Navigation: React.FC = () => {
    const [activeHash, setActiveHash] = React.useState('');

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = ['projects', 'experience', 'tools', 'contact'];
            const scrollPosition = window.scrollY + 100; // Offset for sticky header

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveHash(`#${section}`);
                    return;
                }
            }

            if (window.scrollY < 100) {
                setActiveHash('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLinkClass = (hash: string) => {
        const isActive = activeHash === hash;
        return `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-[#998f8f] hover:text-white'
            }`;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#151312]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tighter" onClick={() => setActiveHash('')}>
                    PORTO<span className="text-[#c5ff41]">.</span>
                </a>

                <div className="hidden md:flex items-center gap-8 px-8 py-3 bg-white/5 rounded-full border border-white/5">
                    <a href="#" className={getLinkClass('')} onClick={() => setActiveHash('')}>Home</a>
                    <a href="#projects" className={getLinkClass('#projects')}>Projects</a>
                    <a href="#experience" className={getLinkClass('#experience')}>Experience</a>
                    <a href="#tools" className={getLinkClass('#tools')}>Tools</a>

                </div>

                <a href="#contact" className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#c5ff41] transition-colors">
                    Let's Talk
                </a>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-white">
                    <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                </button>
            </div>
        </nav>
    );
};
