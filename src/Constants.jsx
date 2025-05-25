export const COMMANDS = [
    'about', 'skills', 'cv', 'contact', 'beer', 'ls', 'clear'
  ];
  
  export const RESPONSES = {
    about: `Hi, I’m Nicholas Lo, an Information Systems undergraduate at Singapore Management University. I'm passionate about leveraging technology to solve real-world problems and continuously exploring new ways to build impactful digital experiences.`,
    skills: 'Python, SQL, PHP',
    cv: 'CV work in progress, check back later.',
    contact: 'Email: nicolatte25@gmail.com | LinkedIn: https://www.linkedin.com/in/nickz_leh/',
    beer: '🍺 Cheers! Enjoy a cold one.',
    ls: `Menu\n----\n${COMMANDS.join('\n')}`,
    clear: ''
  };