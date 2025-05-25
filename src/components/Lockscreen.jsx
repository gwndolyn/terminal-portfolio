import React, { useEffect, useState } from 'react';

function LockScreen({ onUnlock }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeString = time.toLocaleTimeString('en-SG', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const dateString = time.toLocaleDateString('en-SG', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div
      onClick={onUnlock}
      className="fixed inset-0 flex flex-col items-center justify-center text-white cursor-pointer select-none bg-gradient-to-br from-black via-[#230033] to-black"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
      }}
    >
        <div className="text-8xl font-bold tracking-tight mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-white/90 to-white/30">
            Nicholas Lo
        </span>
        </div>

      {/* Date */}
      <div className="text-md tracking-wide mb-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-white/80 to-white/20">
          {dateString}
        </span>
      </div>

      {/* Time */}
      <div className="text-lg font-light tracking-wide mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-white/90 to-white/30">
          {timeString}
        </span>
      </div>

      <div className="text-sm text-gray-500 animate-pulse">Click anywhere to enter</div>

            {/* Footer bottom zone */}
            <div className="absolute bottom-20 flex flex-col items-center space-y-4">
        {/* User profile image */}
        <img
          src="img/profile.jpg"
          alt="User"
          className="w-12 h-12 rounded-full border border-white/30 shadow-md object-cover"
        />

        {/* Smaller fake password field */}
        <div className="w-40 h-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20"></div>
      </div>


    </div>
  );
}

export default LockScreen;
