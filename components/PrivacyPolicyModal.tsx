// PrivacyPolicyModal.tsx
import React from 'react';

type Props = {
  onClose: () => void;
};

const PrivacyPolicyModal = ({ onClose }: Props) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00b0ff]/20 via-[#00ffff]/30 to-[#00b0ff]/20 rounded-3xl blur-2xl transform scale-110"></div>
      <div className="relative bg-black/95 border-2 border-[#00b0ff]/50 rounded-2xl shadow-2xl shadow-[#00b0ff]/20 backdrop-blur-sm overflow-hidden">
        <div className="relative border-b border-[#00b0ff]/30 p-6">
          <div className="absolute inset-0 bg-[#00b0ff]/10 blur-lg"></div>
          <div className="relative flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white font-['Orbitron']">Privacy Policy</h2>
            <button onClick={onClose} className="relative group">
              <div className="absolute inset-0 bg-[#00b0ff]/20 rounded-full blur-md group-hover:bg-[#00b0ff]/30 transition-all duration-300"></div>
              <div className="relative w-10 h-10 rounded-full border border-[#00b0ff]/50 bg-black/70 flex items-center justify-center text-white hover:border-[#00b0ff] hover:bg-[#00b0ff]/10 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="p-6 overflow-y-auto max-h-[60vh] custom-scrollbar">
          {/* Add your policy content here */}
          <p className="text-blue-100">This is placeholder content for privacy policy.</p>
        </div>
        <div className="relative border-t border-[#00b0ff]/30 p-6">
          <div className="absolute inset-0 bg-[#00b0ff]/5 blur-lg"></div>
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00b0ff] to-[#0066ff] rounded-full blur-md opacity-50"></div>
              <button
                onClick={onClose}
                className="relative px-8 py-3 bg-gradient-to-r from-[#00b0ff] to-[#0066ff] text-black font-semibold rounded-full shadow-lg shadow-[#00b0ff]/30 hover:scale-105 transition-all duration-300 hover:from-[#339dff] hover:to-[#0051cc] hover:shadow-[#00b0ff]/50"
              >
                Got it, Thanks!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PrivacyPolicyModal;