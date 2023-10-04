import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Native Android App Developer",
    icon: mobile,
    link: ""
  },
  {
    title: "Web Developer",
    icon: web,
    link: ""

  },

  {
    title: "DSA Solver",
    icon: backend,
    link: "https://leetcode.com/NamelesssNerd/"
  },
  {
    title: "Content Creator",
    icon: creator,
    link: "https://www.instagram.com/namelesssnerd"
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Android Developer",
    company_name: "Wikimedia",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "January 2022 - June 2022",
    points: [
      "Open source contributer for the repositiory of Wikimedia Foundation, for GSOC 2022",
      "Collaborated with mentors solved 11+ issues and merged them.",
      "Learned how to contribute to a real life project and solved Good-first issues and major bugs.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Winner Smart India Hackathon",
    company_name: "SIH",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2022 - December 2022",
    points: [
      "Won Smart India Hackathon 2022 software edition.",
      "Implemented responsive android application using Kotlin.",
      "Collaborated with 6 people team  including designers, product managers, and other developers to create high-quality project.",
      "Participating in code reviews,project planning and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Google Developer Student Club (Lead)",
    company_name: "Google",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2022 - July 2023",
    points: [
      "Founded Google Developer Student Club in my College.",
      "Collaborated with 4 Core members to succesfully host bootcamps and seminars for fellow developers.",
      //"Implementing responsive design and ensuring cross-browser compatibility.",
      "Participated in many Google developer groups events like Devfest,Cloud community Days,Flutter Forward etc.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Plastick",
    description:
      "Web-based platform that allows users to recycle any plastic waste product, they generate in thier household through a app based platform in return of amazing cashbacks and offers.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "roomDB",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Rishavgupta12345/plastick",
  },
  {
    name: "Portfolio Website",
    description:
      "Engaging React portfolio website featuring dynamic 3D models that showcase skills, projects, and achievements, creating an immersive and visually captivating user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Rishavgupta12345/rishav_portfolio",
  },
  {
    name: "Minesweeper",
    description:
      "Immerse yourself in the captivating world of Minesweeper game, made in Korlin and featuring immersive gameplay and challenging puzzles for an amazing maze solving experience.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "glideAPI",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Rishavgupta12345/minesweeper",
  },
];

export { services, technologies, experiences, testimonials, projects };