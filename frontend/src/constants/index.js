import {
    mobile,
    logo,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    expressjs,
    redux,
    tailwind,
    angular,
    bootstrap,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    mySQL,
    wcs,
    intellij,
    php,
    symfony,
    threejs,
    python,
    django,
    llms,
    openai,
    seriesLib,
    formations,
    blogAi,
  } from "../assets";
  
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];
  
const technologies = [
  {
    name: "Php",
    icon: php,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "Symfony",
    icon: symfony,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: mySQL,
  },
  {
    name: "IntelliJ",
    icon: intellij,
  },
];
  
const experiences = [
  {
    title: "React full-stack DevWeb",
    company_name: "Wild Code School",
    icon: wcs,
    iconBg: "#ED6C6D",
    date: "Sept. 2022 - Feb. 2023",
    points: [
      "Attending a 5-month intensive full-stack web development bootcamp.",
      "Developing and maintaining web applications using React.js for front-end and Express.js for back-end.",
      "Implementing a product backlog, build wireframes, use APIs, integrate engaging user interfaces with HTML5 and CSS3, and much more",
    ],
    skills: [
      reactjs,
      nodejs,
      mongodb,
      mySQL,
      expressjs,
      html,
      css,
      javascript,
    ],
  },
  {
    title: "Angular full-stack DevWeb",
    company_name: "Wild Code School",
    icon: wcs,
    iconBg: "#ED6C6D",
    date: "May 2023 - August 2023",
    points: [
      "Attending a 3-month intensive full-stack web development online bootcamp.",
      "Developing and maintaining web applications using Angular for front-end and IntelliJ-IDEA for back-end.",
      "Using APIs, Figma build wireframes, integrate engaging user interfaces with Tailwind Css, and much more",
    ],
    skills: [angular, intellij, figma, tailwind, bootstrap, mySQL],
  },
  {
    title: "PHP full-stack DevWeb",
    company_name: "Wild Code School",
    icon: wcs,
    iconBg: "#ED6C6D",
    date: "Dec. 2023 - Feb. 2024",
    points: [
      "Attending a 3-month intensive full-stack web development online bootcamp.",
      "Developing and maintaining web applications using PHP for front-end and Symfony for back-end.",
      "Using APIs, Figma build wireframes, integrate engaging user interfaces with Tailwind, Bootstrap and much more",
    ],
    skills: [php, symfony, figma, tailwind, bootstrap, mySQL],
  },
  {
    title: "Full-stack Developer",
    company_name: "Self-learning",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "March 2024 - Present",
    points: [
      "Integrated AI to build web applications that provide personalized user experiences.",
      "Using Python, Django, and Flask to develop and maintain web applications.",
      "Developing and maintaining web applications using React.js for front-end and Django for back-end.",
    ],
    skills: [django, python, openai, llms, reactjs, expressjs],
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
    name: "Series Library",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "anuglar",
        color: "pink-text-gradient",
      },
      {
        name: "intellij",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: seriesLib,
    source_code_link: "https://github.com/",
  },
  {
    name: "Courses Manager",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "symfony",
        color: "violet-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: formations,
    source_code_link: "https://github.com/",
  },
  {
    name: "Blog Apss AI",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: blogAi,
    source_code_link: "https://github.com/",
  },
];
  
export { services, technologies, experiences, testimonials, projects };
  