import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { restaurantConfig } from '../assetsConfig';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = restaurantConfig.reviews;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 8500); // Transitions reviews every 8.5 seconds
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="reviews" className="section-padding" style={{ backgroundColor: '#0d0d11', position: 'relative', borderTop: '1px solid rgba(197, 168, 128, 0.08)' }}>
      
      {/* Decorative quotes background graphic */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          opacity: 0.02,
          color: 'var(--color-gold)',
          pointerEvents: 'none'
        }}
      >
        <Quote size={200} />
      </div>

      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '0.5rem' }}>
            Guest Testimonials
          </span>
          <h2 className="serif-font" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-primary)' }}>
            Patron <span className="gold-text">Rave Reviews</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0.8rem auto 0', fontSize: '0.95rem' }}>
            Discover what long-time locals and visiting epicureans have shared about their dining experiences at Café de Marco.
          </p>
        </div>

        {/* Outer Testimonials Wrapper with Glassmorphism */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          
          {/* Main Card */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: '3rem', 
              borderRadius: '12px',
              boxShadow: '0 20px 45px rgba(0,0,0,0.5)',
              position: 'relative',
              zIndex: 5,
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            {/* Quote icon at top */}
            <div style={{ color: 'var(--color-gold)', opacity: 0.8, marginBottom: '1.5rem' }}>
              <Quote size={32} />
            </div>

            {/* Review text */}
            <p 
              className="serif-font"
              style={{ 
                fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', 
                lineHeight: '1.6', 
                color: 'var(--text-primary)', 
                marginBottom: '2rem',
                fontStyle: 'italic',
                animation: 'fadeIn 0.5s ease'
              }}
            >
              "{reviews[currentIndex].text}"
            </p>

            {/* Stars and details */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
              
              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Avatar circle */}
                <div 
                  style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(197, 168, 128, 0.1)', 
                    border: '1px solid var(--color-gold)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--color-gold)',
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}
                >
                  {reviews[currentIndex].avatar}
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: '600' }}>
                    {reviews[currentIndex].author}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Verified Diner • {reviews[currentIndex].date}
                  </span>
                </div>
              </div>

              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--color-gold)' }}>
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

            </div>

          </div>

          {/* Navigation Controls */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem', 
              marginTop: '2.5rem' 
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                background: 'none',
                border: '1px solid rgba(197, 168, 128, 0.25)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gold)';
                e.currentTarget.style.color = 'var(--color-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(197, 168, 128, 0.25)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={handleNext}
              style={{
                background: 'none',
                border: '1px solid rgba(197, 168, 128, 0.25)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gold)';
                e.currentTarget.style.color = 'var(--color-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(197, 168, 128, 0.25)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
