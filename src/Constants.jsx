export const COMMANDS = [
    'about', 'skills', 'experience', 'cv', 'contact', 'beer', 'ls', 'clear'
  ];
  
  export const RESPONSES = {
    about: `Hi, I’m Nicholas Lo, an Information Systems undergraduate at Singapore Management University. I'm passionate about leveraging technology to solve real-world problems and continuously exploring new ways to build impactful digital experiences.`,
    skills: 'Python, SQL, PHP',
    experience: `Singapore Management University - Bachelor of Science, Information Systems\n├─ Samba Masala
    \nAnglo Chinese School (Independent) - International Baccalaureate\n├─ Vice Chairman of ACS(I) Venture Scout Troop \n├─ Member of ACS(I) Badminton Team\n`,
    cv: 'CV work in progress, check back later.',
    contact: 'Email: nicolatte25@gmail.com \nLinkedIn: https://www.linkedin.com/in/nickz_leh/',
    beer: '🍺 Cheers! Enjoy a cold one.',
    ls: `Menu\n----\n${COMMANDS.join('\n')}`,
    clear: ''
  };