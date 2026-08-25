import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Eye, Tag } from 'lucide-react';
import { restaurantConfig } from '../assetsConfig';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const rawGallery = restaurantConfig.images.gallery || [];
  const categories = restaurantConfig.images.galleryCategories || [
    { id: "all", name: "All Photos" }
  ];

  // Normalize gallery items to ensure uniform object structure
  const normalizedGallery = rawGallery.map((item, idx) => {
    if (typeof item === 'string') {
      return {
        title: `Dish Presentation ${idx + 1}`,
        category: 'seafood',
        categoryName: 'Seafood Selections',
        image: item,
        description: 'Authentic Marco Island culinary preparation.'
      };
    }
    return item;
  });

  // Filter items according to active category
  const filteredGallery = activeCategory === 'all'
    ? normalizedGallery
    : normalizedGallery.filter(item => item.category === activeCategory);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredGallery.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: '#0d0d11', borderTop: '1px solid rgba(197, 168, 128, 0.08)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: 'var(--color-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Camera size={14} />
            Visual Gallery
          </span>
          <h2 className="serif-font" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-primary)' }}>
            Interior & <span className="gold-text">Culinary Display</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0.8rem auto 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Explore our curated culinary selections, signature specialties, and historic dining spaces.
          </p>
        </div>

        {/* Category Filter Pill Buttons */}
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '0.6rem', 
            marginBottom: '3rem' 
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = cat.id === 'all' 
              ? normalizedGallery.length 
              : normalizedGallery.filter(i => i.category === cat.id).length;

            // Optional: Hide category button if it currently has 0 images
            if (cat.id !== 'all' && count === 0) return null;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  backgroundColor: isActive ? 'var(--color-gold)' : 'rgba(22, 22, 26, 0.7)',
                  color: isActive ? '#09090b' : 'var(--text-primary)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--color-gold)' : 'rgba(197, 168, 128, 0.2)',
                  padding: '0.5rem 1.1rem',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontWeight: isActive ? '600' : '400',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: isActive ? '0 4px 15px rgba(197, 168, 128, 0.3)' : 'none'
                }}
              >
                <span>{cat.name}</span>
                <span 
                  style={{ 
                    fontSize: '0.7rem', 
                    opacity: isActive ? 0.9 : 0.6,
                    backgroundColor: isActive ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.08)',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '10px'
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.8rem' }}>
          {filteredGallery.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              onClick={() => openLightbox(idx)}
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                cursor: 'pointer',
                height: '280px',
                position: 'relative',
                border: '1px solid rgba(197, 168, 128, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                animation: 'fadeIn 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.06)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
              />

              {/* Name Card Bottom Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(9, 9, 11, 0.95) 0%, rgba(9, 9, 11, 0.75) 60%, rgba(9, 9, 11, 0) 100%)',
                  padding: '2.5rem 1.2rem 1.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                  pointerEvents: 'none'
                }}
              >
                {item.categoryName && (
                  <span 
                    style={{ 
                      color: 'var(--color-gold)', 
                      fontSize: '0.68rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.1em',
                      fontWeight: '600'
                    }}
                  >
                    {item.categoryName}
                  </span>
                )}
                <h4 
                  className="serif-font" 
                  style={{ 
                    fontSize: '1.05rem', 
                    color: 'var(--text-primary)',
                    margin: 0,
                    lineHeight: '1.3'
                  }}
                >
                  {item.title}
                </h4>
              </div>

              {/* Top-Right Quick Zoom Badge */}
              <div 
                style={{
                  position: 'absolute',
                  top: '0.8rem',
                  right: '0.8rem',
                  backgroundColor: 'rgba(9, 9, 11, 0.75)',
                  border: '1px solid rgba(197, 168, 128, 0.3)',
                  color: 'var(--color-gold)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <Eye size={15} />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal with Detailed Name Card */}
        {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
          <div
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(7, 7, 10, 0.97)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'fadeIn 0.25s ease',
              padding: '1.5rem',
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                zIndex: 2010
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            {filteredGallery.length > 1 && (
              <>
                <button
                  onClick={showPrev}
                  style={{
                    position: 'absolute',
                    left: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                    zIndex: 2010
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
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                    zIndex: 2010
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  aria-label="Next Image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Lightbox Content Container */}
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{ 
                maxWidth: '900px', 
                width: '100%',
                maxHeight: '90vh', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                backgroundColor: '#121216',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(197, 168, 128, 0.25)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.9)'
              }}
            >
              {/* Main Image Frame */}
              <div 
                style={{ 
                  width: '100%', 
                  height: '58vh', 
                  backgroundColor: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={filteredGallery[lightboxIndex].image}
                  alt={filteredGallery[lightboxIndex].title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>

              {/* Lightbox Name Card Panel */}
              <div 
                style={{ 
                  width: '100%', 
                  padding: '1.4rem 2rem',
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid rgba(197, 168, 128, 0.15)',
                  backgroundColor: 'rgba(18, 18, 22, 0.95)',
                  gap: '1.5rem',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ flex: 1, minWidth: '240px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                    <span 
                      style={{ 
                        fontSize: '0.7rem', 
                        color: '#09090b', 
                        backgroundColor: 'var(--color-gold)', 
                        padding: '0.15rem 0.5rem', 
                        borderRadius: '3px', 
                        textTransform: 'uppercase', 
                        fontWeight: 'bold',
                        letterSpacing: '0.05em' 
                      }}
                    >
                      {filteredGallery[lightboxIndex].categoryName || 'Featured'}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      Item {lightboxIndex + 1} of {filteredGallery.length}
                    </span>
                  </div>

                  <h3 
                    className="serif-font" 
                    style={{ 
                      fontSize: '1.4rem', 
                      color: 'var(--text-primary)', 
                      margin: '0.2rem 0 0.4rem' 
                    }}
                  >
                    {filteredGallery[lightboxIndex].title}
                  </h3>

                  {filteredGallery[lightboxIndex].description && (
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
                      {filteredGallery[lightboxIndex].description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
