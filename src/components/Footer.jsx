import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Hello World. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Terms</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
