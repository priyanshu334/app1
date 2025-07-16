import React from 'react';

const Header = () => (
  <header className="relative z-10 flex justify-center p-6">
    <div className="relative">
      <div className="absolute inset-0 bg-[#00b0ff]/20 rounded-xl blur-xl"></div>
      <img
        src="/logo/dark.png"
        alt="VikaasGarh logo"
        className="relative w-64 h-16 object-contain drop-shadow-lg"
      />
    </div>
  </header>
);

export default Header;

