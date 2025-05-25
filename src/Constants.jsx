export const COMMANDS = [
    'about', 'skills', 'cv', 'contact',
    'bob', 'larry', 'party', 'beer', 'quest',
    'help', 'clear'
  ];
  
  export const RESPONSES = {
    about: `I'm Nicholas Lo, a full-stack developer.`,
    skills: 'React.js, Tailwind CSS, Vite, Node.js, Python',
    cv: 'Download my CV at: https://your-domain.com/cv.pdf',
    contact: 'Email: nicolatte@gmail.com | GitHub: github.com',
    bob: '👋 Bob says hello!',
    larry: '🍋 Larry is feeling zesty.',
    party: '🎉 Let’s get this party started!',
    beer: '🍺 Cheers! Enjoy a cold one.',
    quest: '🗡️ Your quest awaits... good luck!',
    help: `Type any of: ${COMMANDS.join(', ')}`,
    clear: ''
  };