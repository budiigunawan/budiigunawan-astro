import type { Site, Page, Links, Socials, Stacks } from '@types';

// Global
export const SITE: Site = {
  TITLE: 'Budi Indra Gunawan',
  DESCRIPTION:
    'Welcome to my presonal website. A place to show my profile, projects, and blog.',
  AUTHOR: 'Budi I. Gunawan',
};

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
};

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Showcase of my works on web development',
};

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
};

// Links
export const LINKS: Links = [
  {
    TEXT: 'Home',
    HREF: '/',
  },
  {
    TEXT: 'Work',
    HREF: '/work',
  },
  {
    TEXT: 'Projects',
    HREF: '/projects',
  },
  // {
  //   TEXT: 'Blog',
  //   HREF: '/blog',
  // },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'email',
    TEXT: 'budiindra.g@gmail.com',
    HREF: 'mailto:budiindra.g@gmail.com',
  },
  {
    NAME: 'LinkedIn',
    ICON: 'linkedin',
    TEXT: 'Budi Indra Gunawan',
    HREF: 'https://www.linkedin.com/in/budiigunawan/',
  },
  {
    NAME: 'Github',
    ICON: 'github',
    TEXT: 'budiigunawan',
    HREF: 'https://github.com/budiigunawan',
  },
];

export const STACKS: Stacks = [
  {
    TITLE: 'HTML',
  },
  {
    TITLE: 'CSS',
  },
  {
    TITLE: 'Tailwind CSS',
  },
  {
    TITLE: 'Javascript',
  },
  {
    TITLE: 'Typescript',
  },
  {
    TITLE: 'React JS',
  },
  {
    TITLE: 'Next JS',
  },
  {
    TITLE: 'Vue',
  },
  {
    TITLE: 'Node JS',
  },
  {
    TITLE: 'Express JS',
  },
  {
    TITLE: 'PostgreSQL',
  },
  {
    TITLE: 'Prisma',
  },
  {
    TITLE: 'Git',
  },
  {
    TITLE: 'Jira',
  },
  {
    TITLE: 'Jest',
  },
  {
    TITLE: 'Cypress',
  },
  {
    TITLE: 'Figma',
  },
];
