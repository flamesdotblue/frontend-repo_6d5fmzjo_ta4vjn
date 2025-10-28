import React from 'react';
import { Star, Sparkles, Shield } from 'lucide-react';

const features = [
  {
    title: 'Clean Design',
    description: 'Minimal, modern layout built with Tailwind CSS for fast customization.',
    icon: Sparkles,
  },
  {
    title: 'Ready to Ship',
    description: 'Everything you need for a quick start — just edit text and deploy.',
    icon: Star,
  },
  {
    title: 'Reliable Foundation',
    description: 'Vite + React setup ensures instant reloads and a great dev experience.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">Why you’ll love this starter</h2>
      <p className="mt-2 text-zinc-600 max-w-2xl">
        A simple but polished foundation to help you move fast without sacrificing quality.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">{f.title}</h3>
            <p className="mt-1 text-sm text-zinc-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
