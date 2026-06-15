import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ChevronDown } from 'lucide-react';
import { restaurantConfig } from '../assetsConfig';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = restaurantConfig.images.heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Crossfade every 6 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      id="home" 
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {/* Background Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: idx === currentSlide ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: idx === currentSlide ? 5 : 1,
            pointerEvents: idx === currentSlide ? 'auto' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Cover image overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(9, 9, 11, 0.65)', // Dark overlay for rich gold text contrast
              backgroundImage: 'linear-gradient(to bottom, rgba(9,9,11,0.3) 0%, rgba(9,9,11,0.85) 100%)',
              zIndex: 2,
            }}
          />
          <img
            src={slide.url}
            alt={slide.title}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: idx === currentSlide ? 'scale(1.05)' : 'scale(1.0)',
              transition: 'transform 6.5s ease-in-out',
              zIndex: 1,
            }}
          />

          {/* Hero Content Container */}
          <div 
            className="container" 
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              paddingBottom: '2rem',
              transform: idx === currentSlide ? 'translateY(0)' : 'translateY(20px)',
              transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s ease-in-out',
            }}
          >
            <span 
              style={{ 
                color: 'var(--color-gold)', 
                fontSize: '0.85rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.3em',
                marginBottom: '1rem',
                fontWeight: '600'
              }}
            >
              Welcome to {restaurantConfig.name}
            </span>
            
            {/* Title */}
            <h1 
              className="serif-font"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                textShadow: '0 4px 20px rgba(0,0,0,0.6)',
                maxWidth: '900px'
              }}
            >
              {slide.title}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                color: 'var(--text-secondary)',
                maxWidth: '650px',
                margin: '0 auto 2.5rem',
                lineHeight: 1.6,
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              }}
            >
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: '1.25rem',
              }}
            >
              <a href="#menu" className="btn-primary" style={{ animation: 'glowPulse 3s infinite' }}>
                <span>Explore Menu</span>
              </a>
              <a href="#contact" className="btn-secondary">
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Manual Slide Navigation Arrows */}
      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(9, 9, 11, 0.4)',
          border: '1px solid rgba(197, 168, 128, 0.15)',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          zIndex: 15,
          transition: 'var(--transition-fast)',
          backdropFilter: 'blur(4px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-gold)';
          e.currentTarget.style.color = 'var(--color-gold)';
          e.currentTarget.style.background = 'rgba(9, 9, 11, 0.7)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(197, 168, 128, 0.15)';
          e.currentTarget.style.color = 'var(--text-primary)';
          e.currentTarget.style.background = 'rgba(9, 9, 11, 0.4)';
        }}
        className="desktop-only"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(9, 9, 11, 0.4)',
          border: '1px solid rgba(197, 168, 128, 0.15)',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          zIndex: 15,
          transition: 'var(--transition-fast)',
          backdropFilter: 'blur(4px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-gold)';
          e.currentTarget.style.color = 'var(--color-gold)';
          e.currentTarget.style.background = 'rgba(9, 9, 11, 0.7)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(197, 168, 128, 0.15)';
          e.currentTarget.style.color = 'var(--text-primary)';
          e.currentTarget.style.background = 'rgba(9, 9, 11, 0.4)';
        }}
        className="desktop-only"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators / Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.8rem',
          zIndex: 15,
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            style={{
              width: idx === currentSlide ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: idx === currentSlide ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'var(--transition-fast)',
              padding: 0,
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '2.5rem',
          color: 'var(--color-gold)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textDecoration: 'none',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          zIndex: 15,
          gap: '0.3rem',
          animation: 'fadeIn 1.5s ease',
          opacity: 0.8
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
        onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
        className="desktop-only"
      >
        <span>Scroll</span>
        <ChevronDown size={14} style={{ animation: 'slideUp 1.5s infinite alternate' }} />
      </a>
    </section>
  );
}
