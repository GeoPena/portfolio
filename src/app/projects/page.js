export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
};

import ProjectCard from '@/components/ProjectCard';
import { LinkIcon } from 'lucide-react';

const projects = [
  {
    id: 1,
    imageSrc: '/HIcon.png',  // Path to project image
    company: 'Company',
    description: 'Creating technology to empower civilians to explore space on their own terms.',
    projectUrl: 'https://company.com',
  },
  {
    id: 2,
    imageSrc: '/HIcon.png',
    company: 'Company',
    description: 'Creating technology to empower civilians to explore space on their own terms.',
    projectUrl: 'https://company.com',
  },
  {
    id: 3,
    imageSrc: '/HIcon.png',
    company: 'Company',
    description: 'Creating technology to empower civilians to explore space on their own terms.',
    projectUrl: 'https://company.com',
  },
  {
    id: 4,
    imageSrc: '/HIcon.png',  // Path to project image
    company: 'Company',
    description: 'Creating technology to empower civilians to explore space on their own terms.',
    projectUrl: 'https://company.com',
  },
  {
    id: 5,
    imageSrc: '/HIcon.png',  // Path to project image
    company: 'Company',
    description: 'Creating technology to empower civilians to explore space on their own terms.',
    projectUrl: 'https://company.com',
  },
  {
    id: 6,
    imageSrc: '/HIcon.png',
    company: 'Company',
    description: 'Creating technology to empower civilians to explore space on their own terms.',
    projectUrl: 'https://company.com',
  },
];

export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-left mb-4">Things I’ve made trying to put my dent in the universe.</h1>
      <p className="text-gray-600 dark:text-gray-400 text-left max-w-2xl mx-auto mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna. Praesent consectetur velit vel lacus feugiat, in maximus lacus eleifend.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              {/* Logo image, aligned to the left */}
              <img src="/HIcon.png" alt="Logo" className="w-12 h-12 mb-2" />
              {/* Company name */}
              <h2 className="text-lg font-semibold text-left">{project.company}</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="flex items-center space-x-2">
              <LinkIcon className="text-gray-500" size={18} />
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {project.projectUrl}
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}