import { Bolt, BookImage, CalendarRange, FlameKindling, Landmark, LucideLampDesk, PenTool } from "lucide-react"

type Project = {
  icon: any
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
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

type Hackathon = {
  name: string
  desc: string
  url: string
  image: string
  wonFor: string
}

export const PROJECTS: Project[] = [
  {
    icon: Bolt,
    name: 'Build With AI',
    description:
      'A collection of 10K+ AI tools to help you build better products.',
    link: 'https://buildwithai.co.in/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    icon: Landmark,
    name: 'Drooul',
    description: 'A digital marketplace for UI Kits, Templates and Icons.',
    link: 'https://github.com/Diveshmahajan4/drooul',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    icon: LucideLampDesk,
    name: 'Urbancasa',
    description: 'A furniture catalog website with a modern design.',
    link: 'https://urbancasa.vercel.app/',
    video:
      'https://res.cloudinary.com/de7hzefas/video/upload/v1744887555/Urbancasa_trim_ikwljm.mp4',
    id: 'project3',
  },
  {
    icon: FlameKindling,
    name: 'AnimeHub',
    description: 'Anime streamin platform with clean and minimal design.',
    link: 'https://github.com/Diveshmahajan4/AnimeHub',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project4',
  },
  {
    icon: BookImage,
    name: 'Chatter',
    description: 'A blogging platform for developers to share their thoughts.',
    link: 'https://github.com/Diveshmahajan4/Chatter-A-Blogging-Website',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project5',
  },
  {
    icon: CalendarRange,
    name: 'Project Pilot',
    description: 'A project management app for freelancers and teams.',
    link: 'https://github.com/Diveshmahajan4/Project-Pilot',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project5',
  },

]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Software Engineer',
    start: 'Feb 2025',
    end: 'Present',
    link: '',
    id: 'work3',
  },
  {
    company: 'IIT Hyderabad',
    title: 'Research Intern',
    start: 'August 2024',
    end: 'Jan 2025',
    link: '',
    id: 'work1',
  },
  {
    company: 'Deutsch Bank AG',
    title: 'Software Engineer Intern',
    start: 'May 2024',
    end: 'July 2024',
    link: '',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Introduction to Callbacks Promise an Async Await Functions in JavaScript',
    description: 'Understand how JavaScript handles asynchronous code using callbacks, promises, and async/await.',
    link: '/blog/Introduction-to-Callbacks-Promises-and-Async-Await-Functions-in-JavaScript',
    uid: 'blog-1',
  },
  {
    title: 'Exploring Middleware in JavaScript Building Modular and Extensible Applications',
    description:
      'A simple explanation of Middleware in JavaScript',
    link: '/blog/Exploring-Middleware-in-JavaScript-Building-Modular-and-Extensible-Applications',
    uid: 'blog-2',
  },
  {
    title: 'An Introduction to GraphQL Building Better APIs with GraphQL',
    description:
      'A beginner-friendly guide to what GraphQL is and how it helps in creating flexible APIs.',
    link: '/blog/An-Introduction-to-GraphQL-Building-Better-APIs-with-GraphQL',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Diveshmahajan4',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/diveshtwt',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/divesh-mahajan',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/diveshmahajan_',
  },
]

export const EMAIL = 'diveshmahajan04@gmail.com'

export const HACKATHONS :Hackathon[] = [
  {
    name: 'ETH Mumbai 2024',
    desc: 'We created ConsultX, a revolutionary global network of trusted experts, offering a secure and decentralized consultation platform.',
    url: 'https://devfolio.co/projects/consultx-2934',
    image: 'https://res.cloudinary.com/de7hzefas/image/upload/v1745001006/hack2_oezwmg.jpg',
    wonFor: 'Best Project Built on Lumio'
},
{
    name: 'ETH India 2023',
    desc: 'We created Creditsco, a NFT collateral lending platform which empowers individuals to secure on-chain loans on NFTs with enhanced monitoring and security.',
    url: 'https://devfolio.co/projects/creditsco-baa9',
    image: 'https://res.cloudinary.com/de7hzefas/image/upload/v1745002029/hack3_qfmxdn.jpg',
    wonFor: 'Sponsors price by Scroll'
},
]