"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
  Brain, Heart, Bot, Mail, Github, Linkedin, Twitter,
  ChevronDown, Sparkles, Zap, Target
} from 'lucide-react';
import toast from 'react-hot-toast';

const TorchbitsHomepage = () => {
  const [email, setEmail] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState({});
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleEmailSubmit = async () => {
  if (!email) return alert('Please enter a valid email');

  try {
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
   if (res.ok) {
      toast.success('🎉 You’ve joined the waitlist!');
      setEmail('');
    } else {
      toast.error(data.message || 'Something went wrong.');
    }
  } catch (error) {
    console.error(error);
    toast.error('Server error. Please try again later.');
  }
};


  const handleContactSubmit = () => {
    if (contactForm.name && contactForm.email && contactForm.message) {
      console.log('Contact form:', contactForm);
      setContactForm({ name: '', email: '', message: '' });
      alert('Message received. We’ll respond shortly.');
    }
  };

  const fadeInClass = (id: string) =>
    isVisible[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  // Scroll to email input
  const scrollToEmailInput = () => {
    emailInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    emailInputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-white mr-2" />
              <span className="text-2xl font-bold">Torchbits</span>
            </div>
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="#work" className="hover:text-gray-300">Work</a>
              <a href="#about" className="hover:text-gray-300">About</a>
              <a href="#coming" className="hover:text-gray-300">Coming</a>
              <a href="#contact" className="hover:text-gray-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">Torchbits</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">Pioneering AI Innovation</p>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Unleashing the power of AI to transform health, autonomy, and human potential with cutting-edge solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
          <input
            ref={emailInputRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 placeholder-gray-500"
          />
          <button
            onClick={handleEmailSubmit}
            className="px-6 py-3 bg-white text-black rounded-md font-bold hover:bg-gray-200 transition"
          >
            Join Us
          </button>
        </div>
        <ChevronDown className="h-6 w-6 text-gray-600 mt-10 animate-bounce" />
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6 bg-[#0a0a0a]">
        <div className={`text-center mb-12 ${fadeInClass('work')}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Focus Areas</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring key domains where AI drives transformative change.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <Heart className="text-pink-400" />, title: "Health AI", description: "Revolutionizing diagnosis and drug discovery." },
            { icon: <Bot className="text-green-400" />, title: "Agentic Tools", description: "Autonomous AI agents for real tasks." },
            { icon: <Brain className="text-purple-400" />, title: "AI Research", description: "Pushing the boundaries of ML." }
          ].map((item, i) => (
            <div key={i} className="bg-black border border-gray-800 rounded-xl p-6 text-center hover:border-white transition-all">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-[#101010] px-6">
        <div className={`max-w-4xl mx-auto text-center ${fadeInClass('about')}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-400 mb-4">
            Torchbits is building AI that empowers and uplifts. We blend research and real-world tools to drive progress in health, autonomy, and beyond.
          </p>
        </div>
      </section>

      {/* Coming */}
      <section id="coming" className="py-20 bg-[#0a0a0a] px-6">
        <div className={`text-center max-w-3xl mx-auto ${fadeInClass('coming')}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What’s Coming</h2>
          <div className="bg-black border border-gray-800 p-8 rounded-xl mt-6">
            <div className="flex justify-center space-x-4 mb-4">
              <Zap className="text-yellow-300" />
              <Target className="text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Mobile Assistant</h3>
            <p className="text-gray-400 mb-4">
              A next-gen AI assistant redefining interaction with real reasoning. Sign up early.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-6 py-3 bg-white text-black rounded-md font-bold hover:bg-gray-200"
                onClick={scrollToEmailInput}
              >
                Early Access
              </button>
              <button className="px-6 py-3 border border-gray-700 text-white rounded-md hover:border-white">
                Collaborate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#101010] px-6">
        <div className={`max-w-xl mx-auto ${fadeInClass('contact')}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Us</h2>
          <div className="space-y-4">
            <input
              value={contactForm.name}
              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white placeholder-gray-500"
            />
            <input
              value={contactForm.email}
              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white placeholder-gray-500"
            />
            <textarea
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white placeholder-gray-500 resize-none"
            />
            <button
              onClick={handleContactSubmit}
              className="w-full px-6 py-3 bg-white text-black rounded-md font-bold hover:bg-gray-200"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 px-6 py-10 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-white" />
            <span className="text-white font-semibold">Torchbits</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><Linkedin /></a>
            <a href="#" className="hover:text-white"><Twitter /></a>
            <a href="#" className="hover:text-white"><Github /></a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
        <div className="text-center mt-6">© 2025 Torchbits. Built for the future.</div>
      </footer>
    </div>
  );
};

export default TorchbitsHomepage;
