import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import user from './assets/user.svg'

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';



export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Renz Andrew',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Vitug',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years old',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Filipino',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Mabalacat City',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '(+63) 967-396-6440',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'renzavitug@mail.com',
  },

  {
    id: 9,
    title: 'Upwork : ',
    description: 'Renz V.',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'Filipino, English',
  },
];


export const skills = [
  {
    id: 1,
    title: 'Html',
    logo: "https://cdn.svgporn.com/logos/html-5.svg"
  },

  {
    id: 2,
    title: 'Javascript',
     logo: "https://cdn.svgporn.com/logos/javascript.svg"
  },

  {
    id: 3,
    title: 'NodeJS',
     logo: "https://cdn.svgporn.com/logos/nodejs-icon.svg"
  },

  {
    id: 4,
    title: 'ReactJS',
     logo: "https://cdn.svgporn.com/logos/react.svg"
  },

  {
    id: 5,
    title: 'JAVA',
     logo: "https://cdn.svgporn.com/logos/java.svg"
  },

  {
    id: 6,
    title: 'Figma',
     logo: "https://cdn.svgporn.com/logos/figma.svg"
  },

  {
    id: 7,
    title: 'Angular',
     logo: "https://cdn.svgporn.com/logos/angular.svg"
  },

  {
    id: 8,
    title: 'VueJS',
     logo: "https://cdn.svgporn.com/logos/vue.svg"
  },

  {
    id: 9,
    title: 'Flutter',
     logo: "https://cdn.svgporn.com/logos/flutter.svg"
  },

  {
    id: 7,
    title: 'CSS',
     logo: "https://cdn.svgporn.com/logos/css-3.svg"
  },

  {
    id: 7,
    title: 'Vite',
     logo: "https://cdn.svgporn.com/logos/vitejs.svg"
  },

  {
    id: 7,
    title: 'Python',
     logo: "https://cdn.svgporn.com/logos/python.svg"
  },

  {
    id: 7,
    title: 'PHP',
     logo: "https://cdn.svgporn.com/logos/php.svg"
  },

  {
    id: 7,
    title: 'MongoDB',
     logo: "https://cdn.svgporn.com/logos/mongodb.svg"
  },

  {
    id: 7,
    title: 'AWS',
     logo: "https://cdn.svgporn.com/logos/aws.svg"
  },

  {
    id: 7,
    title: 'Photoshop',
     logo: "https://www.cdnlogo.com/logos/p/8/photoshop.svg"
  },

  {
    id: 7,
    title: 'WordPress',
     logo: "https://cdn.svgporn.com/logos/wordpress.svg"
  },




];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'WordPress',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'A client project based on wordpress with SEO practices',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'InfinityKicks',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'WordPress',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },


  
];

export const testimonials = [
  {
    id: 1,
    profilePic: user,
    rating: 5,
    comment: 'This is a great product! Highly recommend it.',
    name: 'John Doe',
  },
  {
    id: 2,
    profilePic: user,
    rating: 4.5,
    comment: 'Good quality and excellent customer service.',
    name: 'Jane Smith',
  },
  {
    id: 3,
    profilePic: user,
    rating: 4.5,
    comment: 'Good quality and excellent customer service.',
    name: 'Jojo',
  },
  // Add more testimonials as needed
];







