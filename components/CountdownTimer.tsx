// CountdownTimer.tsx
import React from 'react';

const Colon = () => (
  <div className="relative flex items-center justify-center mx-1 sm:mx-3">
    <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
      <span className="w-3 h-3 rounded-full bg-[#00b0ff]/30 blur-sm"></span>
      <span className="w-3 h-3 rounded-full bg-[#00b0ff]/30 blur-sm"></span>
      <span className="absolute top-0 w-2.5 h-2.5 rounded-full bg-[#00b0ff]"></span>
      <span className="absolute bottom-0 w-2.5 h-2.5 rounded-full bg-[#00b0ff]"></span>
    </div>
    <div className="w-16" />
  </div>
);

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type Props = {
  timeLeft: TimeLeft;
};

const CountdownTimer = ({ timeLeft }: Props) => (
  <div className="relative mb-16">
    <div className="absolute inset-0 bg-gradient-to-r from-[#00b0ff]/20 via-[#00ffff]/30 to-[#00b0ff]/20 rounded-3xl blur-2xl transform scale-110"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00b0ff]/10 to-transparent rounded-3xl blur-xl"></div>
    <div className="relative flex items-center justify-center space-x-8 p-8">
      {(['days', 'hours', 'minutes', 'seconds'] as const).map((k, i) => (
        <React.Fragment key={k}>
          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00b0ff]/30 rounded-8xl blur-sm transform scale-90"></div>
              <div className="relative rounded-2xl border-2 border-[#00b0ff]/50 bg-white/95 p-6 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="h-full w-full bg-gradient-to-b from-transparent via-blue-200 to-transparent bg-[length:100%_20px] bg-repeat-y"></div>
                </div>
                <span className="relative text-8xl font-light text-black drop-shadow-sm font-['Orbitron']">
                  {String(timeLeft[k]).padStart(2, '0')}
                </span>
              </div>
            </div>
            <span className="mt-4 block text-lg font-light text-blue-300 capitalize">
              {k}
            </span>
          </div>
          {i < 3 && <Colon />}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default CountdownTimer;
