
// ShareModal.tsx
import React from 'react';
import { Check, Copy, Link, X } from 'lucide-react';

interface ShareOption {
  name: string;
  icon: React.ReactNode | string;
  url: string;
  color: string;
}

interface Props {
  inviteLink: string;
  shareMessage: string;
  shareOptions: ShareOption[];
  onClose: () => void;
  onCopy: () => void;
  copySuccess: boolean;
}

const ShareModal = ({ inviteLink, shareMessage, shareOptions, onClose, onCopy, copySuccess }: Props) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-black/90 border border-[#00b0ff]/30 rounded-2xl p-6 w-full max-w-md shadow-2xl shadow-[#00b0ff]/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white font-['Orbitron']">Share Your Invite</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-blue-300 mb-2">Your Invite Link</label>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2">
            <input
              type="text"
              value={inviteLink}
              readOnly
              className="w-full bg-transparent text-white text-sm outline-none"
            />
          </div>
          <button
            onClick={onCopy}
            className="bg-[#00b0ff] hover:bg-[#0088cc] text-black p-2 rounded-lg transition-colors"
          >
            {copySuccess ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
        {copySuccess && (
          <p className="text-green-400 text-sm mt-2">Link copied to clipboard!</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-blue-300 mb-3">Share on Social Media</label>
        <div className="grid grid-cols-2 gap-3">
          {shareOptions.map((option) => (
            <a
              key={option.name}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border border-gray-700 bg-gray-900 text-white transition-all duration-200 ${option.color} hover:border-gray-600 hover:scale-105`}
            >
              {typeof option.icon === 'string' ? (
                <span className="text-lg font-bold">{option.icon}</span>
              ) : (
                option.icon
              )}
              <span className="text-sm font-medium">{option.name}</span>
            </a>
          ))}
        </div>
      </div>
      <button
        onClick={onCopy}
        className="w-full bg-gradient-to-r from-[#0066ff] to-[#00b0ff] hover:from-[#004cb3] hover:to-[#33ccff] text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
      >
        <Link size={18} />
        Copy Invite Link
      </button>
    </div>
  </div>
);

export default ShareModal;
