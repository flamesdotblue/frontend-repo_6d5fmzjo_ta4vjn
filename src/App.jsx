import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <section id="about" className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">About this page</h2>
            <p className="mt-2 text-zinc-600">
              This is a clean, friendly “Hello, World!” starter built with React and Tailwind CSS. It’s organized into simple components so you can extend it effortlessly.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
