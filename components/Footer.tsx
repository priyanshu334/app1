// Footer.tsx
import React from 'react';

type Props = {
  onPrivacyClick: () => void;
};

const Footer = ({ onPrivacyClick }: Props) => (
  <footer className="relative z-10 mt-12 pb-6">
    <div className="relative w-full">
      <div className="absolute inset-0 bg-white/10 "></div>
      <div className="relative bg-white/5 border-t border-white/10 py-4">
        <div className="flex justify-center">
          <div className="text-center">
            <p className="text-sm text-blue-300">© 2025 VikaasGarh. All rights reserved.</p>
            <p className="mt-1 text-xs text-blue-400">An initiative by Vigsia Global</p>
            <div className="mt-3 flex justify-center space-x-6">
              <button
                onClick={onPrivacyClick}
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200 underline hover:no-underline"
              >
                Privacy Policy
              </button>
              <a
                href="mailto:connect@vikaasgarh.com"
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200 underline hover:no-underline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

