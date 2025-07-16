import React from 'react';

type Props = {
  setShowPrivacyModal: (val: boolean) => void;
};

const HeroSection = ({ setShowPrivacyModal }: Props) => (
  <div className="mb-16 text-center space-y-6">
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="absolute inset-0 bg-[#00b0ff]/5 rounded-2xl blur-lg"></div>
      <p className="relative text-lg font-light tracking-wide text-blue-200 leading-relaxed">
        We're developing a thoughtfully designed platform that brings together an institute, an incubator, an accelerator, and a network forum, especially for the youth of Chhattisgarh.
      </p>
    </div>
    <div className="relative">
      <div className="absolute inset-0 bg-[#00b0ff]/10 rounded-lg blur-md"></div>
      <p className="relative text-xl font-bold tracking-wide text-[#00b0ff] drop-shadow-lg font-['Orbitron']">
        #MereSathVikaasgarh
      </p>
    </div>
  </div>
);

export default HeroSection;
