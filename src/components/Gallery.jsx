import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { restaurantConfig } from '../assetsConfig';

export default function Gallery() {
  const galleryImages = restaurantConfig.images.gallery;
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: '#0d0d11', borderTop: '1px solid rgba(197, 168, 128, 0.08)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Camera size={14} />
            Visual Gallery
          </span>
          <h2 className="serif-font" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-primary)' }}>
            Interior & <span className="gold-text">Culinary Display</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0.8rem auto 0', fontSize: '0.95rem' }}>
            Take a visual tour of our historic dining space and some of our freshly prepared coastal dishes.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {galleryImages.map((imgUrl, idx) => (
            <div
              key={idx}
              className="glass-panel"
              onClick={() => openLightbox(idx)}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                height: '240px',
                position: 'relative',
              }}
            >
              <img
                src={imgUrl}
                alt={`Café de Marco Gallery ${idx + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
              />
              {/* Overlay hover effect */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(9, 9, 11, 0.4)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => e.target.style.opacity = 1}
                onMouseLeave={(e) => e.target.style.opacity = 0}
              >
                <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', border: '1px solid var(--color-gold)', padding: '0.4rem 1rem', borderRadius: '4px', backgroundColor: 'rgba(9,9,11,0.8)' }}>
                  View Fullscreen
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(7, 7, 10, 0.96)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'fadeIn 0.25s ease',
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={showPrev}
              style={{
                position: 'absolute',
                left: '1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={showNext}
              style={{
                position: 'absolute',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Lightbox Image */}
            <div style={{ maxWidth: '90%', maxHeight: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={galleryImages[lightboxIndex]}
                alt={`Café de Marco Lightbox ${lightboxIndex + 1}`}
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
                  borderRadius: '4px',
                  border: '1px solid rgba(197, 168, 128, 0.2)',
                }}
              />
              <span style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                Image {lightboxIndex + 1} of {galleryImages.length}
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
