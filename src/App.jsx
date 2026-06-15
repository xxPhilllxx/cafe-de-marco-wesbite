import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import { restaurantConfig } from './assetsConfig';
import { Phone, MapPin, ArrowUp } from 'lucide-react';

export default function App() {
  
  // Custom IntersectionObserver logic to handle scroll reveal animations
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleReveal);
    // Initial call to reveal elements already in view
    setTimeout(handleReveal, 300);

    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-obsidian)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      {/* Structural Header Navigation */}
      <Header />

      {/* Main Sections */}
      <main>
        <Hero />
        
        <div className="reveal-on-scroll">
          <About />
        </div>

        <div className="reveal-on-scroll">
          <Featured />
        </div>

        <div className="reveal-on-scroll">
          <MenuSection />
        </div>

        <div className="reveal-on-scroll">
          <Gallery />
        </div>

        <div className="reveal-on-scroll">
          <Reviews />
        </div>

        <div className="reveal-on-scroll">
          <Contact />
        </div>
      </main>

      {/* Elegant Brand Footer */}
      <footer 
        style={{ 
          backgroundColor: '#07070a', 
          borderTop: '1px solid rgba(197, 168, 128, 0.15)',
          padding: '5rem 0 3rem',
          position: 'relative'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '3rem',
              marginBottom: '4rem'
            }}
          >
            {/* Column 1: Brand Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <a href="#home" style={{ textDecoration: 'none' }}>
                <h2 className="serif-font" style={{ fontSize: '1.8rem', color: 'var(--text-primary)', letterSpacing: '0.04em' }}>
                  Café <span style={{ color: 'var(--color-gold)' }}>de Marco</span>
                </h2>
              </a>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                A landmark seafood and steakhouse dining destination on Marco Island. Serving our famous prawns and fresh catches with classic, heartfelt hospitality.
              </p>
            </div>

            {/* Column 2: Navigation Quicklinks */}
            <div>
              <h4 className="serif-font" style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1.5rem', letterSpacing: '0.03em' }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem' }}>
                {['Home', 'About', 'Specialties', 'Menu', 'Reviews', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'var(--transition-fast)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Location */}
            <div>
              <h4 className="serif-font" style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1.5rem', letterSpacing: '0.03em' }}>
                Find Us
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'start', gap: '0.5rem', lineHeight: '1.6' }}>
                <MapPin size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '0.15rem' }} />
                <span>
                  {restaurantConfig.contact.address} <br />
                  Marco Island, FL 34145
                </span>
              </p>
            </div>

            {/* Column 4: Contact Booking */}
            <div>
              <h4 className="serif-font" style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1.5rem', letterSpacing: '0.03em' }}>
                Inquiries
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Phone size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <a 
                  href={`tel:${restaurantConfig.contact.phone}`}
                  style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500', transition: 'var(--transition-fast)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                >
                  {restaurantConfig.contact.phoneDisplay}
                </a>
              </p>
              <a 
                href="#contact" 
                className="btn-primary" 
                style={{ padding: '0.4rem 1.2rem', fontSize: '0.75rem' }}
              >
                Contact Us
              </a>
            </div>

          </div>

          {/* Sub-footer Copyright */}
          <div 
            style={{ 
              borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
              paddingTop: '2rem', 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              gap: '1rem',
              fontSize: '0.78rem',
              color: 'var(--text-muted)'
            }}
          >
            <span>
              &copy; {new Date().getFullYear()} {restaurantConfig.name}. All Rights Reserved.
            </span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <span>Café de Marco</span>
              <a 
                href="#home" 
                style={{ 
                  color: 'var(--color-gold)', 
                  textDecoration: 'none', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.2rem',
                  fontWeight: '500'
                }}
              >
                <span>Back to Top</span>
                <ArrowUp size={12} />
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Embedded CSS rules for scroll reveals and general styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-on-scroll.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />
    </div>
  );
}
