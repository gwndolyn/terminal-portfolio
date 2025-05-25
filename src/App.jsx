import React, { useState } from 'react';
import Terminal from './components/Terminal';
import Dock from './components/Dock';
import LockScreen from './components/Lockscreen';

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);

  const handleUnlock = () => {
    setFadeOut(true);
    setTimeout(() => {
      setUnlocked(true);
      setTimeout(() => {
        setShowTerminal(true);
      }, 500); // Terminal appears 0.5s after dock
    }, 800); // Lock screen fades out over 0.8s
  };

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-black via-[#1B0027] to-black overflow-hidden">
      {!unlocked && (
        <div
          onClick={handleUnlock}
          className={`fixed inset-0 transition-opacity duration-700 flex items-center justify-center ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <LockScreen />
        </div>
      )}

      {unlocked && (
        <>
          <Dock />
          {showTerminal && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
              <Terminal />
            </div>
          )}
        </>
      )}
    </div>
  );
}
