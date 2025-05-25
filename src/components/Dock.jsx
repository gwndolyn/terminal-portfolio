import React from 'react';

const apps = [
    { name: 'Terminal', icon: '/dock/terminal.png', link: '#', active: true, reload: true, onClick: () => window.location.reload() },
    { name: 'Linkedin', icon: '/dock/linkedin.png', link: 'https://www.linkedin.com/in/nickz-leh/', active: true, reload: true },
    { name: 'File', icon: '/dock/file.png', link: 'https://www.linkedin.com/in/nickz-leh/', active: true, reload: true },
  { name: 'VSCode', icon: '/dock/vscode.png'},
  { name: 'IntelliJ', icon: '/dock/intellij_macos_bigsur_icon_190061.png' },
  { name: 'Finder', icon: '/dock/finder_macos_bigsur_icon_190173.png' },
  { name: 'Settings', icon: '/dock/settings_macos_bigsur_icon_189754.png' },
  { name: 'Excel', icon: '/dock/microsoft_excel_macos_bigsur_icon_189980.png'},
  { name: 'Steam', icon: '/dock/steam_alt_macos_bigsur_icon_189698.png' },
  { name: 'Chrome', icon: '/dock/google_chrome_macos_bigsur_icon_190133.png'},
  { name: 'Spotify', icon: '/dock/spotify_alt_macos_bigsur_icon_189704.png'}
];

function Dock() {
    return (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-20 backdrop-blur-lg px-3 py-2 rounded-3xl shadow-lg flex space-x-2 border border-white/10 z-50">
        {apps.map(app => (
          <div key={app.name} className="flex flex-col items-center">
            <a href={app.link} target="_blank" rel="noopener noreferrer">
              <img
                src={app.icon}
                alt={app.name}
                title={app.name}
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain hover:scale-110 transition-transform duration-150"
              />
            </a>
            {app.active && <span className="w-1.5 h-1.5 mt-1 rounded-full bg-white"></span>}
          </div>
        ))}
      </div>
    );
  }
  
  export default Dock;

