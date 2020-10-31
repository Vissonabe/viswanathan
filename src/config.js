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
    text1:
      'Hello! I\'m Viswanathan, a software engineer based in Bengaluru, INDIA.',
    sub1:
      'A forward-thinking developer with more than 7 years of experience in building, integrating, testing, and supporting Android, Windows Mobile and Windows Desktop applications.      ',
    sub2:
      'In my 7 years of experience, I worked in multiple companies, which include Accenture, OlaCabs, Tathasthu, Swiggy & now currently working in PayPal as Lead Android Developer.',
    skills: [
      'Java',
      'HTML & (S)CSS',
      'Gatsby',
      'Kotlin',
      'Flutter',
      'Protobuf',
    ],
  },

  hero: {
    name: 'Viswanathan',
    domain: 'I build things for the Mobile (Android).',
    description:
      'I\'m a software engineer based in Bengaluru, INDIA specializing in building exceptional Android mobile apps.',
  },

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 100, viewFactor = 0.1) => ({
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
