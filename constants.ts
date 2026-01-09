
import { Project, Experience, Tool } from './types';

export const PROJECTS: Project[] = [
  {

    id: '0',
    title: 'Kembar Toys',
    category: 'E-commerce Website',
    image: '/kembar-toys.png',
    link: 'https://www.linkedin.com/posts/danur-faqih_i-am-pleased-to-share-with-you-the-warehouse-ugcPost-7216505883575353344-zFC9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCTlTcBdwq0mgtiemwzVgbSizk7D4k4KKM'
  },
  {
    id: '1',
    title: 'BKN Presensi',
    category: 'UI Design Figma',
    image: '/bkn-project.png',
    link: 'https://www.figma.com/design/I9CidPUQxBQRyN9VOQmh4T/absen-karyawan--Community-?node-id=0-1&t=ueR71A63PMnmO6yM-1'
  },
  {
    id: '2',
    title: 'Repair ABG',
    category: 'UI Design Figma',
    image: '/repair-abg-project.png',
    link: 'https://www.figma.com/design/vAE3AP4LF94ATyohYJsWjw/UI-Aplikasi-TSU?node-id=0-1&t=x80xwKpqDy6b5pBD-1'
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Kretya Studio - Internship',
    role: 'Intern UI Designer',
    period: 'Oct 2025 - Jan 2026',
    description: 'Learning UI design through practice, studying design principles, layouts, and visual consistency, while gaining insight into real-world design workflows.'
  },
  {
    id: '2',
    company: 'Mulia Industri - Internship',
    role: 'Administration Assistant',
    period: 'Sep 2025 - Oct 2025',
    description: 'Learning administrative workflows, assisting in documentation and data management, and supporting daily operational activities.'
  },
];

export const TOOLS: Tool[] = [
  { id: '1', name: 'Figma', category: 'Design Tool', icon: 'https://cdn.simpleicons.org/figma/F24E1E', link: 'https://www.figma.com/' },
  { id: '2', name: 'Tailwind CSS', category: 'CSS Framework', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', link: 'https://tailwindcss.com/' },
  { id: '3', name: 'Bootstrap', category: 'CSS Framework', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3', link: 'https://getbootstrap.com/' },
  { id: '4', name: 'Laravel', category: 'PHP Framework', icon: 'https://cdn.simpleicons.org/laravel/FF2D20', link: 'https://laravel.com/' },
  { id: '5', name: 'MySQL', category: 'Database', icon: 'https://cdn.simpleicons.org/mysql/4479A1', link: 'https://www.mysql.com/' },
  { id: '6', name: 'JavaScript', category: 'Language', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
];


