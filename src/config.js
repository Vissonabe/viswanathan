module.exports = {
  email: 'vissonabe@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Vissonabe',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/viswanathan-kp-b7536aa4',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Viswanathankp',
    },
  ],

  aboutMe: {
    text1: "Hello! I'm Viswanathan, a software engineer based in Bengaluru, INDIA.",
    sub1: "I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that providepixel-perfect, performant experiences.",
    sub2: "Shortly after graduating from Northeastern University, I joined the engineering team at Accenture, where I workon a wide variety of interesting and meaningful projects on a daily basis.",
    skills: ['Java', 'HTML & (S)CSS', 'Gatsby', 'Kotlin', 'Flutter']
  },

  hero: {
    name : "Viswanathan",
    domain : "I build things for the Mobile (Android).",
    description : "I'm a software engineer based in Bengaluru, INDIA specializing in building (and occasionally designing) exceptional Android mobile apps."
  },

  navLinks: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 100, viewFactor = 0.10) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 300,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
