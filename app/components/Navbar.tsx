'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Layanan', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Proses', href: '#process' },
  { name: 'FAQ', href: '#faq' },
];

const WA_URL = 'https://wa.me/6285727346620?text=Halo%20Adi%20Primanto,%20saya%20ingin%20membuat%20website%20untuk%20bisnis%20saya.';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4'
          : 'py-6'
      }`}
      style={{
        background: isScrolled ? 'rgba(12, 12, 14, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        borderBottomColor: isScrolled ? 'rgba(255,255,255,0.07)' : 'transparent',
      }}
    >
      <div style={{ width: '78%', margin: '0 auto' }} className="grid grid-cols-3 items-center max-md:flex max-md:justify-between max-md:w-[92%]">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 no-underline">
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{
              background: '#2b7fff',
              boxShadow: '0 0 10px #2b7fff',
              animation: 'pulse-dot 2s ease infinite',
            }}
          />
          <span className="font-display font-black text-sm tracking-[0.06em] gradient-text">
            ADI PRIMANTO
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-display text-xs font-semibold tracking-[0.08em] uppercase transition-all duration-300"
              style={{ color: 'var(--color-muted)', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex justify-end">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-style">
            Konsultasi <ChevronRight size={15} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden transition-colors"
          style={{ color: 'var(--color-white)' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} /> }
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'var(--color-bg-2)', borderBottom: '1px solid var(--color-border)' }}
          >
            <div className="flex flex-col p-6 gap-5" style={{ width: '92%', margin: '0 auto' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-display font-semibold text-base tracking-[0.04em] transition-colors"
                  style={{ color: 'var(--color-muted)', textDecoration: 'none' }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-style justify-center"
              >
                Mulai Konsultasi Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
