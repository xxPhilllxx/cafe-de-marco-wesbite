import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';
import { restaurantConfig } from '../assetsConfig';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1000,
        transition: 'var(--transition-smooth)',
        backgroundColor: isScrolled ? 'rgba(9, 9, 11, 0.95)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(197, 168, 128, 0.15)' : '1px solid transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
      }}
      id="main-header"
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Brand Logo */}
        <a 
          href="#home" 
          style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            flexDirection: 'column',
            transition: 'var(--transition-smooth)'
          }}
        >
          <span 
            className="serif-font" 
            style={{ 
              fontSize: '1.8rem', 
              color: 'var(--text-primary)', 
              letterSpacing: '0.05em',
              fontWeight: '600'
            }}
          >
            Café <span style={{ color: 'var(--color-gold)' }}>de Marco</span>
          </span>
          <span 
            style={{ 
              fontSize: '0.65rem', 
              color: 'var(--text-muted)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em',
              marginTop: '-3px'
            }}
          >
            Marco Island, Florida
          </span>
        </a>

        {/* Desktop Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-only">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: '400',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Table Call Booking Button */}
          <a 
            href={`tel:${restaurantConfig.contact.phone}`}
            className="btn-primary"
            style={{ 
              padding: '0.5rem 1.2rem', 
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Phone size={14} />
            <span>{restaurantConfig.contact.phoneDisplay}</span>
          </a>
        </nav>

        {/* Hamburger Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-only"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-fast)'
          }}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} style={{ color: 'var(--color-gold)' }} /> : <MenuIcon size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 'var(--header-height)',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(9, 9, 11, 0.98)',
          zIndex: 999,
          display: mobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: mobileMenuOpen ? 1 : 0,
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'var(--transition-smooth)',
          paddingBottom: '4rem',
        }}
        className="mobile-menu-drawer"
      >
        <ul style={{ listStyle: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2rem', padding: 0 }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="serif-font"
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '1.8rem',
                  letterSpacing: '0.05em',
                  transition: 'var(--transition-fast)',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <a
            href={`tel:${restaurantConfig.contact.phone}`}
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
          >
            <Phone size={16} />
            <span>Call Us</span>
          </a>
          <p style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {restaurantConfig.contact.phoneDisplay}
          </p>
        </div>
      </div>

      {/* CSS stylesheet rule inject to handle hide/show desktop/mobile nav cleanly */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}} />
    </header>
  );
}
