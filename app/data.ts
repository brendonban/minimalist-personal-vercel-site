type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type Education = {
  university: string
  degree: string
  start: string
  end: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const EDUCATION: Education[] = [
  {
    university: 'Universiti Malaya',
    degree: 'Master of Professional Counselling',
    start: '2025',
    end: 'Present',
  },
  {
    university: 'Taylors University',
    degree: 'Bachelor of Psychology (Honours)',
    start: '2020',
    end: '2022',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
  title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'ORCiD',
    link: 'https://orcid.org/0000-0001-9555-1566',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/hunny_bunny1998',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/brendonban',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/zzbban',
  },
]

export const EMAIL = 'brendon.ban@outlook.com'
