import { Project } from '../models/portfolio.models';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'CartVerse',
    tagline: 'Full-stack e-commerce platform',
    description:
      'A complete e-commerce experience with authentication, product management, cart, wishlist, reviews and an admin dashboard for order and inventory control.',
    image: 'assets/images/projects/cartverse.svg',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
    category: 'fullstack',
    features: ['Authentication', 'Product management', 'Cart', 'Reviews', 'Admin dashboard', 'Image upload', 'Order tracking'],
    githubUrl: 'https://github.com/jxspriit/My-shop-web',
    liveUrl: 'https://shopnow-woad.vercel.app',
  },
  {
    id: 2,
    title: 'GenWebAI Saas Application',
    tagline: 'Website Builder Using Ai',
    description:
      'An ai agent fast and responsive website builder Saas application using mern Stack.',
    image: 'assets/images/projects/livechat.svg',
    technologies: ['React', 'Node.js', 'express', 'MongoDB', 'firebase', 'stripe'],
    category: 'fullstack',
    features: ['Saas', 'Firebase', 'Fast and responsive', 'User profiles'],
    githubUrl: 'https://github.com/jxspriit/GenwebAI',
    liveUrl: 'https://genweb-ai-nu.vercel.app/',
  },
  {
    id: 3,
    title: 'Employee Management System',
    tagline: 'Admin dashboard for workforce management',
    description:
      'An internal dashboard for managing employee records, departments, attendance and role-based access across an organization.',
    image: 'assets/images/projects/ems.svg',
    technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
    category: 'fullstack',
    features: ['Role-based access', 'Attendance tracking', 'Department views', 'Data export'],
    githubUrl: 'https://github.com/jaspreetsingh/employee-management-system',
    liveUrl: 'https://ems.demo.dev',
  },
  {
    id: 4,
    title: 'Banking System',
    tagline: 'Secure banking management application',
    description:
      'A secure banking simulation supporting account management, transfers and transaction history with strong authentication.',
    image: 'assets/images/projects/banking.svg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'backend',
    features: ['Secure authentication', 'Fund transfers', 'Transaction history', 'Account statements'],
    githubUrl: 'https://github.com/jaspreetsingh/banking-system',
    liveUrl: 'https://banking.demo.dev',
  },
  {
    id: 5,
    title: 'Restaurant Application',
    tagline: 'Ordering & management interface',
    description:
      'A modern restaurant ordering interface with menu browsing, cart checkout and a management panel for staff to track live orders.',
    image: 'assets/images/projects/restaurant.svg',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    category: 'frontend',
    features: ['Menu browsing', 'Cart & checkout', 'Order tracking', 'Staff panel'],
    githubUrl: 'https://github.com/jaspreetsingh/restaurant-app',
    liveUrl: 'https://restaurant.demo.dev',
  },
];
