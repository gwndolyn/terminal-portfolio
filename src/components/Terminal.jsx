import React, { useState, useRef, useEffect } from 'react';
import { COMMANDS, RESPONSES } from '../Constants';

function Terminal() {
    const [history, setHistory] = useState([
      "|\\  \nZZZzz /,'-.--._,-\\ `-.\\ _,-'",
      '',
      '✨ Welcome ✨ – Type help for a list of supported commands.',
      ''
    ]);
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
        setHistory(h => [...h, `$ ~ ${cmd}`, RESPONSES[cmd], '']);
      } else {
        setHistory(h => [...h, `$ ~ ${cmd}`, `command not found: ${cmd}`, '']);
      }
      setInput('');
    };
  
    return (
      <div className="w-full max-w-2xl bg-black text-green-400 rounded-lg shadow-xl overflow-hidden font-mono">
        {/* Mac title bar */}
        <div className="flex items-center bg-gray-800 px-4 py-2">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex-1 text-center text-gray-300 text-sm font-sans">
            guest@aditya: ~
          </div>
        </div>
  
        {/* Terminal body */}
        <div className="p-6">
          {history.map((line, i) => (
            <div key={i} className={i === 0 ? 'whitespace-pre' : ''}>
              {line}
            </div>
          ))}
  
          <form onSubmit={handleSubmit} className="flex mt-2">
            <span className="mr-2">$ ~</span>
            <input
              className="flex-1 bg-transparent caret-green-400 focus:outline-none"
              value={input}
              onChange={e => setInput(e.target.value)}
              autoFocus
            />
          </form>
  
          <div ref={endRef} />
        </div>
      </div>
    );
  }
  
  export default Terminal;