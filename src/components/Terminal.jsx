import React, { useState, useRef, useEffect } from 'react';
import { COMMANDS, RESPONSES } from '../Constants';

function Terminal() {
  const isMobile = window.innerWidth < 640;
  const [history, setHistory] = useState(() => {
    const initial = isMobile
      ? ['- Nicholas Lo -']
      : [ " ",
          " _   _ _      _           _             _          ",
          "| \\ | (_) ___| |__   ___ | | __ _ ___  | |    ___  ",
          "|  \\| | |/ __| '_ \\ / _ \\| |/ _` / __| | |   / _ \\ ",
          "| |\\  | | (__| | | | (_) | | (_| \\__ \\ | |__| (_) |",
          "|_| \\_|_|\\___|_| |_|\\___/|_|\\__,_|___/ |_____\\___/ ",
          " "
        ];
    return [
      ...initial,
      '',
      '✨ Welcome ✨ – Type ls for a list of supported commands.',
      ''
    ];
  });

  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleSubmit = e => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === 'clear') {
      setHistory([]);
    } else if (COMMANDS.includes(cmd)) {
      setHistory(h => [...h, `~ % ${cmd}`, RESPONSES[cmd], '']);
    } else {
      setHistory(h => [...h, `~ % ${cmd}`, <span className="text-red-400">command not found: "{cmd}"</span>, '']);
    }
    setInput('');
  };

  return (
    <div className="w-full max-w-[768px] h-[500px] bg-[#1e1e1e] text-gray-100 rounded-xl shadow-xl font-mono text-xs sm:text-sm flex flex-col mx-[25px]">

      {/* Top Bar */}
      <div className="flex items-center bg-[#2d2d2d] px-3 py-1 sm:px-4 sm:py-2 rounded-t-xl">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div className="flex-1 text-center text-gray-300 text-xs font-sans">
          Portfolio@Nicholas: ~
        </div>
      </div>

      {/* Terminal Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-2 sm:px-3 py-1 sm:py-2 space-y-1">
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap text-left break-words">
            {line}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="mr-2 text-green-400">~ %</span>
          <input
            className="flex-1 bg-transparent caret-green-400 text-green-300 focus:outline-none"
            value={input}
            onChange={e => setInput(e.target.value)}
            autoFocus
            spellCheck={false}
          />
        </form>
        <div ref={endRef} />
      </div>
    </div>
  );
}

export default Terminal;
