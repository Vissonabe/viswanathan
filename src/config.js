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
      'Hello! I\'m Viswanathan, a Senior Engineering Leader based in Bengaluru, INDIA.',
    sub1:
      'A Senior Engineering Leader with 12 years of experience specializing in the design, development, and delivery of secure, scalable payment systems. [cite_start]Proven success in leading full-stack teams (Java, React, iOS/Android) to launch high-impact products, serving millions of users globally.      ',
    sub2:
      'My experience includes leadership roles at Super.Money, CRED, PayPal, Swiggy, OlaCabs, and Accenture.',
    skills: [
      'Java',
      'HTML & (S)CSS',
      'Gatsby',
      'Kotlin',
      'Dart',
      'Android',
      'iOS',
      'KMP',
      'Compose',
      'Flutter',
      'Protobuf',
      'React',
      'React Native',
      'Typescript',
      'Node.js',
    ],
  },

  hero: {
    name: 'Viswanathan',
    domain: 'I lead engineering teams to build secure, scalable payment systems.',
    description:
      'I\'m a Senior Engineering Leader with 12 years of experience specializing in the design, development, and delivery of secure, scalable payment systems, currently based in Bengaluru, INDIA.',
  },

  artImages: [
    {
      filename: 'birds.jpg',
      order: 1,
      title: 'Birds',
      description: 'Colorful bird artwork'
    },
    {
      filename: 'black panther.jpg',
      order: 2,
      title: 'Black Panther',
      description: 'Black Panther character artwork'
    },
    {
      filename: 'face.jpg',
      order: 3,
      title: 'Face',
      description: 'Portrait artwork'
    },
    {
      filename: 'forest.jpg',
      order: 4,
      title: 'Forest',
      description: 'Forest landscape artwork'
    },
    {
      filename: 'guruvayurappan.jpg',
      order: 5,
      title: 'Guruvayurappan',
      description: 'Lord Guruvayurappan artwork'
    },
    {
      filename: 'ironman.jpg',
      order: 6,
      title: 'Iron Man',
      description: 'Iron Man character artwork'
    },
    {
      filename: 'lamborghini.jpg',
      order: 7,
      title: 'Lamborghini',
      description: 'Lamborghini car artwork'
    },
    {
      filename: 'lord ganesh.jpg',
      order: 8,
      title: 'Lord Ganesh',
      description: 'Lord Ganesh artwork'
    },
    {
      filename: 'lord murugan.jpg',
      order: 9,
      title: 'Lord Murugan',
      description: 'Lord Murugan artwork'
    },
    {
      filename: 'mother.jpg',
      order: 10,
      title: 'Mother',
      description: 'Mother portrait artwork'
    },
    {
      filename: 'owl.jpg',
      order: 11,
      title: 'Owl',
      description: 'Owl artwork'
    },
    {
      filename: 'tower.jpg',
      order: 12,
      title: 'Tower',
      description: 'Tower architecture artwork'
    }
  ],

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
