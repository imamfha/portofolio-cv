
import { Project, Experience, Tool, BlogArticle } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'NajmAI',
    category: 'SaaS Framer Template',
    image: 'https://picsum.photos/seed/najm/800/600',
    link: '#'
  },
  {
    id: '2',
    title: 'Damas',
    category: 'Free Framer Template',
    image: 'https://picsum.photos/seed/damas/800/600',
    link: '#'
  },
  {
    id: '3',
    title: 'Faseelh',
    category: 'Free Framer Template',
    image: 'https://picsum.photos/seed/faseelh/800/600',
    link: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'PixelForge Studios',
    role: 'Lead Software Engineer',
    period: 'Jan 2020 - Present',
    description: 'Led the engineering team in creating user-centric mobile and web applications, improving the performance and increasing user engagement.'
  },
  {
    id: '2',
    company: 'BlueWave Innovators',
    role: 'Senior Developer',
    period: 'Jun 2017 - Dec 2019',
    description: 'Developed and implemented high-scale backend strategies for new product lines, collaborated closely with designers and product managers.'
  },
  {
    id: '3',
    company: 'TrendCraft Solutions',
    role: 'Full Stack Developer',
    period: 'Mar 2015 - May 2017',
    description: 'Designed and built interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.'
  }
];

export const TOOLS: Tool[] = [
  { id: '1', name: 'React', category: 'Frontend Framework', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { id: '2', name: 'Figma', category: 'Design Tool', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { id: '3', name: 'Next.js', category: 'React Framework', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { id: '4', name: 'Tailwind', category: 'CSS Framework', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { id: '5', name: 'Notion', category: 'Productivity Tool', icon: 'https://cdn.simpleicons.org/notion/white' },
  { id: '6', name: 'ChatGPT', category: 'AI Assistant', icon: 'https://cdn.simpleicons.org/openai/412991' }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: '1',
    title: 'Starting and Growing a Career in Web Design',
    summary: 'As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design.',
    date: 'Apr 8, 2022',
    readTime: '6min read',
    link: '#'
  },
  {
    id: '2',
    title: 'Create a Landing Page That Performs Great',
    summary: 'Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.',
    date: 'Mar 15, 2022',
    readTime: '6min read',
    link: '#'
  },
  {
    id: '3',
    title: 'How Can Designers Prepare for the Future?',
    summary: 'Looking at how emerging technologies like AI and AR are reshaping the way we build digital experiences.',
    date: 'Feb 28, 2022',
    readTime: '6min read',
    link: '#'
  }
];
