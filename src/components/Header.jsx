import React from 'react';

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-sm">H</span>
          <span className="text-lg font-semibold tracking-tight text-zinc-800">Hello World</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
          <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
