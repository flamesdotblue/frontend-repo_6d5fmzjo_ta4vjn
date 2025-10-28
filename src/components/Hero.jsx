import React from 'react';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 py-20 relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-indigo-700 shadow-sm mb-6">
          <Rocket className="h-3.5 w-3.5" />
          <span>Welcome aboard</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900">
          Hello, World!
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600">
          Your starter page is ready. Tweak the text, add more sections, and make it yours.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-indigo-700 transition-colors"
          >
            Explore Features
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-zinc-800 font-medium shadow-sm ring-1 ring-zinc-200 hover:bg-zinc-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
