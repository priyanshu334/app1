import React from 'react';

interface Props {
  email: string;
  isLoading: boolean;
  isSubscribed: boolean;
  errorMessage: string;
  setEmail: (email: string) => void;
  handleSubmit: () => void;
}

const EmailSignup = ({ email, isLoading, isSubscribed, errorMessage, setEmail, handleSubmit }: Props) => (
  <section className="space-y-8 w-full max-w-xl">
    <div className="relative">
      <div className="absolute inset-0 bg-[#00b0ff]/10 rounded-xl blur-lg"></div>
      <h2 className="relative text-center text-5xl font-bold leading-tight text-white font-['Orbitron']">
        Get Notified<br />
        When we Launch
      </h2>
    </div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col gap-4 lg:flex-row"
    >
      <div className="relative flex-1">
        <div className="absolute inset-0 bg-[#00b0ff]/20 rounded-full blur-md"></div>
        <input
          type="email"
          required
          aria-label="Email address"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="relative w-full rounded-full border border-[#00b0ff]/30 bg-gray-800/70 px-8 py-4 text-white placeholder-gray-400 shadow-lg shadow-[#00b0ff]/10 focus:border-[#00b0ff] focus:outline-none focus:ring-2 focus:ring-[#00b0ff] focus:shadow-[#00b0ff]/30 disabled:opacity-50"
        />
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00b0ff] to-[#0066ff] rounded-full blur-md opacity-50"></div>
        <button
          type="submit"
          disabled={isLoading}
          className="relative whitespace-nowrap rounded-full bg-gradient-to-r from-[#00b0ff] to-[#0066ff] px-8 py-4 font-semibold text-black shadow-lg shadow-[#00b0ff]/30 transition-all duration-300 hover:scale-105 hover:from-[#339dff] hover:to-[#0051cc] hover:shadow-[#00b0ff]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading ? 'Subscribing...' : isSubscribed ? 'Subscribed!' : 'Notify Me'}
        </button>
      </div>
    </form>
    {errorMessage && (
      <div className="relative">
        <div className="absolute inset-0 bg-red-500/10 rounded-lg blur-md"></div>
        <p className="relative text-center text-sm text-red-400 bg-red-500/20 rounded-lg px-4 py-2 border border-red-500/30">
          {errorMessage}
        </p>
      </div>
    )}
    <p className="text-center text-sm text-blue-300">
      *Don't worry, we won't spam you, we respect your privacy :)
    </p>
  </section>
);

export default EmailSignup;