import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import DitherVeil from './components/DitherVeil';
import './style.css';

function AboutOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6" role="dialog" aria-modal="true" aria-label="About KXK">
      <div className="about-panel relative w-full max-w-lg border border-white/20 bg-[#090909] p-8 sm:p-12">
        <button className="icon-button absolute right-5 top-5" type="button" onClick={onClose} aria-label="Close about page">x</button>
        <img className="mx-auto h-36 w-36 object-contain invert" src="/logo.svg" alt="KXK" />
        <p className="mx-auto mt-10 max-w-sm text-center text-sm leading-6 text-white/55">Built because public servers are a waste of time. if you work, train, and take things seriously, you're good. If you're here to waste time or talk nonsense, don't bother.</p>
        <div className="mt-12 flex items-center justify-between border-t border-white/15 pt-4 text-[10px] uppercase tracking-[.18em] text-white/40">
          <span>ABOUT</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-4 sm:px-10">
        <a className="top-button" href="https://discord.gg/DPmcTX2ne8" target="_blank" rel="noreferrer">JOIN</a>
        <a className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" href="#" aria-label="KXK home">
          <img className="h-8 w-auto object-contain invert" src="/logo.svg" alt="KXK" />
        </a>
        <button className="icon-button" type="button" onClick={() => setAboutOpen(true)} aria-label="Open about page">?</button>
      </header>

      <main className="flex h-full items-center justify-center px-6 pb-6 pt-16 sm:px-10">
        <div className="dither-frame" aria-label="Interactive dither portrait" role="img">
          <DitherVeil
            src="/dither-img.jpeg"
            inkColor="#000000"
            paperColor="#e5e5e5"
            rimColor="#ffffff"
            palette="rgb"
            pattern="floyd"
            fit="contain"
            revealRadius={110}
            clickBurst={true}
          />
        </div>
      </main>

      <a className="fixed bottom-5 right-8 z-50 sm:right-10" href="https://lqmn.page" target="_blank" rel="noreferrer" aria-label="Open Luqa portfolio">
        <img className="h-16 w-auto" src="/luqa-logo.svg" alt="Luqa" />
      </a>

      {aboutOpen && <AboutOverlay onClose={() => setAboutOpen(false)} />}
    </div>
  );
}

createRoot(document.getElementById('app')).render(<App />);
