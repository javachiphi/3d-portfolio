import { ninety, kernel, ef } from '../assets/images';
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
];

export const experiences = [
  {
    title: 'Technical Product Manager',
    company_name: 'Kernel Labs',
    icon: kernel,
    iconBg: 'black',
    date: 'Jan 2022 - Mar 2023',
    points: [
      'Delivered projects with 15 Design and Engineering team at the boutique consulting firm that serves major Korean gaming publishers.',
      'Shipped a B2B2C third-party vendor product feature to 300,000 monthly active user; Conducted vendor interviews to identify key metrics and pain points',
      'Improved operational visibility by automating, integrating workflow management tools and adopting bi-weekly sprint cycles.',
    ],
  },
  {
    title: 'Founder in Residence & Technical Product Manager ',
    company_name: 'Entrepreneur First & Reso',
    icon: ef,
    iconBg: '#6400de',
    date: 'Feb 2020 - Dec 2021',
    points: [
      'Narrowed down target audience and problem statement iteratively by conducting in-depth interviews at the Linkedin Founder backed startup accelerator.',
      'Delievered a features for a project between BMW car dealership and a voice A.I. startup with teams in Zurich & Singapore',
      'Aligned technical and non-technical audience with the service flow chart, locking in the first iteration of feature',
    ],
  },
  {
    title: 'Frontend Engineer',
    company_name: '90 Seconds',
    icon: ninety,
    iconBg: '#9cdcd4',
    date: 'Dec 2018 - Nov 2019',
    points: [
      'Contributed to an internal UI component library, updating existing components and creating new ones with reusability in mind across multiple apps. ',
      'Authored unit and integration tests for key use cases and user flows to ensure smooth user experience ',
      'Designed and implemented GraphQL API on Ruby on Rails to be consumed on React app ',
    ],
  },
];

export const socialLinks = [
  // {
  //   name: 'Email',
  //   iconUrl: contact,
  //   link: '/contact',
  // },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/javachiphi',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/sophie-y-702793107/',
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Product Thinking: Blockchain Wallet',
    description:
      'Target user analysis & Feature recommendation for technical PM screening test',
    link: 'https://sophie-yang.notion.site/Blockchain-Wallet-1a8ec2ddf4cd478e9fc3129638650bc1?pvs=4',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'System Design: Ticketing',
    description:
      'Implemented a micro-service based ticketing feature with scalability in mind.',
    link: 'https://github.com/javachiphi/monorepo',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'App: AI photo editing',
    description:
      ' Built SaaS photo editing app using Cloudinary Generative AI’s APIs',
    link: 'https://github.com/javachiphi/photo-studio',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'App: Urban Exploration',
    description:
      'Built a map-based urban exploration app that allows users to find and share hidden gems in their city',
    link: 'https://github.com/javachiphi/urbanx',
  },
  {
    iconUrl: pricewise,
    theme: 'btn-back-green',
    name: 'Tool: Sherlock',
    description:
      'Developed a frontend dependency tracing tool for an open source CDN project, Commons Host ',
    link: 'https://gitlab.com/commonshost/sherlock',
  },
];
