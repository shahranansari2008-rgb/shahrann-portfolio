import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Profiles', href: '#profiles' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0c10]/85 backdrop-blur-md border-b border-[#1e2433]/80 py-3.5 shadow-subtle'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-slate-100 hover:text-sky-400 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#11141c] border border-[#1e2433] flex items-center justify-center text-sky-400 group-hover:border-sky-500/50 group-hover:shadow-glow-sm transition-all">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-semibold text-base tracking-tight text-slate-100">
              Shahran<span className="text-sky-400">.</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#11141c]/60 p-1.5 rounded-full border border-[#1e2433]/60 backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-[#1e2433]/50 rounded-full transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium text-slate-200 bg-[#161b26] border border-[#1e2433] hover:border-sky-500/40 hover:text-sky-300 transition-all duration-200 shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg bg-[#11141c] border border-[#1e2433] text-slate-400 hover:text-slate-100 focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1017]/95 border-b border-[#1e2433] backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 transition-all">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-[#161b26] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#1e2433]/60 mt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-medium text-slate-100 bg-[#161b26] border border-[#1e2433] hover:border-sky-500/50 hover:text-sky-300 transition-colors"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
