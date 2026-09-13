import React, { useState, useEffect } from 'react';
import { Download, FileText, CheckCircle, Upload, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { restaurantConfig } from '../assetsConfig';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('seafood');
  const [activePage, setActivePage] = useState(0);
  const [fullscreenPage, setFullscreenPage] = useState(null);
  const menuConfig = restaurantConfig.menuPreview;
  const menuImage = restaurantConfig.images.menuPlaceholder;
  const pdfUrl = restaurantConfig.images.menuPdfUrl;
  const menuPages = restaurantConfig.images.menuRedacted || [];

  // Pre-load all menu page images on mount to ensure instantaneous switching
  useEffect(() => {
    menuPages.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [menuPages]);

  return (
    <section id="menu" className="section-padding" style={{ backgroundColor: 'var(--bg-obsidian)', position: 'relative' }}>
      
      {/* Decorative vector background */}
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '2%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(197, 168, 128, 0.02) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        
        {/* Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '0.5rem' }}>
            Culinary Offerings
          </span>
          <h2 className="serif-font" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-primary)' }}>
            The <span className="gold-text">Dinner Menu</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0.8rem auto 0', fontSize: '0.95rem' }}>
            {menuConfig.description}
          </p>
        </div>

        {/* Outer Grid: Left Digital Menu, Right Official PDF Menu Upload slot */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left Column: Interactive Digital Menu */}
          <div>
            {/* Category Nav buttons */}
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.8rem', 
                marginBottom: '2.5rem',
                borderBottom: '1px solid rgba(197, 168, 128, 0.12)',
                paddingBottom: '1rem'
              }}
            >
              {menuConfig.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    backgroundColor: activeCategory === cat.id ? 'var(--color-gold)' : 'transparent',
                    border: '1px solid',
                    borderColor: activeCategory === cat.id ? 'var(--color-gold)' : 'rgba(197, 168, 128, 0.25)',
                    color: activeCategory === cat.id ? '#09090b' : 'var(--text-primary)',
                    padding: '0.5rem 1.2rem',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: activeCategory === cat.id ? '600' : '400',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Displaying active category menu items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {menuConfig.categories
                .find((cat) => cat.id === activeCategory)
                ?.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      paddingBottom: '1.5rem', 
                      borderBottom: '1px dashed rgba(255, 255, 255, 0.08)',
                      animation: 'fadeIn 0.4s ease'
                    }}
                  >
                    {/* Name row */}
                    <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                      <h4 
                        className="serif-font" 
                        style={{ 
                          fontSize: '1.2rem', 
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem'
                        }}
                      >
                        <span>{item.name}</span>
                        {item.tags && item.tags.includes('Signature') && (
                          <span style={{ fontSize: '0.6rem', color: '#09090b', backgroundColor: 'var(--color-gold)', padding: '0.1rem 0.4rem', borderRadius: '2px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>
                            Chef Choice
                          </span>
                        )}
                      </h4>
                    </div>
                    {/* Description */}
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      {item.description}
                    </p>
                    {/* Tag highlights */}
                    {item.tags && (
                      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                        {item.tags.map((t, tIdx) => (
                          <span key={tIdx} style={{ fontSize: '0.65rem', color: 'var(--color-gold)', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                            • {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* Right Column: Interactive Redacted Menu Images Slideshow & Viewer */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <div 
              className="glass-panel" 
              style={{ 
                padding: '2.5rem', 
                borderRadius: '12px', 
                textAlign: 'center', 
                borderWidth: '1.5px',
                borderColor: 'rgba(197, 168, 128, 0.25)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.5)'
              }}
            >
              <div 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  border: '1px solid var(--color-gold)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'var(--color-gold)'
                }}
              >
                <FileText size={28} />
              </div>

              <h3 className="serif-font" style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
                Print Menu Pages
              </h3>
              
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Browse our official printed menu pages below. Click any page to view it in full screen.
              </p>

              {/* Multi-page Menu Image Viewer */}
              {menuPages && menuPages.length > 0 ? (
                <div>
                  {/* Current Active Menu Page Frame */}
                  <div 
                    onClick={() => setFullscreenPage(activePage)}
                    style={{ 
                      position: 'relative', 
                      cursor: 'pointer', 
                      borderRadius: '8px', 
                      overflow: 'hidden', 
                      height: '380px', 
                      border: '1px solid rgba(197,168,128,0.2)',
                      backgroundColor: '#16161a',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                    }}
                    title="Click to zoom menu full screen"
                  >
                    <img 
                      key={activePage}
                      src={menuPages[activePage]} 
                      alt={`Cafe de Marco Menu Page ${activePage + 1}`}
                      style={{ 
                        maxHeight: '100%', 
                        maxWidth: '100%', 
                        objectFit: 'contain',
                        transition: 'transform 0.3s ease',
                        animation: 'fadeIn 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
                    />
                    
                    {/* Zoom icon overlay */}
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: '0.8rem',
                        right: '0.8rem',
                        backgroundColor: 'rgba(9, 9, 11, 0.85)',
                        border: '1px solid var(--color-gold)',
                        color: 'var(--color-gold)',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
                      }}
                    >
                      <Eye size={16} />
                    </div>

                    {/* Previous/Next overlay controls */}
                    {menuPages.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePage((prev) => (prev === 0 ? menuPages.length - 1 : prev - 1));
                          }}
                          style={{
                            position: 'absolute',
                            left: '0.5rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(9, 9, 11, 0.75)',
                            border: '1px solid rgba(197, 168, 128, 0.3)',
                            color: 'var(--text-primary)',
                            borderRadius: '50%',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                          }}
                          aria-label="Previous Page"
                        >
                          <ChevronLeft size={18} />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePage((prev) => (prev + 1) % menuPages.length);
                          }}
                          style={{
                            position: 'absolute',
                            right: '0.5rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(9, 9, 11, 0.75)',
                            border: '1px solid rgba(197, 168, 128, 0.3)',
                            color: 'var(--text-primary)',
                            borderRadius: '50%',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                          }}
                          aria-label="Next Page"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Page Selector Tabs */}
                  {menuPages.length > 1 && (
                    <div 
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '0.5rem', 
                        flexWrap: 'wrap',
                        marginBottom: '1.5rem' 
                      }}
                    >
                      {menuPages.map((_, idx) => {
                        const pageLabels = ["Page 1 (Starters & Land)", "Page 2 (Seafood & Specials)", "Page 3 (Kids Menu)"];
                        const label = pageLabels[idx] || `Page ${idx + 1}`;
                        const isActive = activePage === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => setActivePage(idx)}
                            style={{
                              backgroundColor: isActive ? 'var(--color-gold)' : 'rgba(9, 9, 11, 0.6)',
                              color: isActive ? '#09090b' : 'var(--text-secondary)',
                              border: '1px solid',
                              borderColor: isActive ? 'var(--color-gold)' : 'rgba(197, 168, 128, 0.2)',
                              padding: '0.4rem 0.8rem',
                              borderRadius: '4px',
                              fontSize: '0.75rem',
                              fontWeight: isActive ? '700' : '500',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              boxShadow: isActive ? '0 2px 8px rgba(197, 168, 128, 0.3)' : 'none'
                            }}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ padding: '2rem 0', color: 'var(--text-muted)' }}>
                  No menu pages loaded.
                </div>
              )}

              {/* View/Download buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <a 
                  href={pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ 
                    justifyContent: 'center', 
                    fontSize: '0.85rem',
                    pointerEvents: pdfUrl ? 'auto' : 'none',
                    opacity: pdfUrl ? 1 : 0.6
                  }}
                >
                  <Eye size={16} />
                  <span>View Print Menu (PDF)</span>
                </a>
              </div>
            </div>

            {/* Fullscreen Overlay Lightbox for Menu Page */}
            {fullscreenPage !== null && (
              <div
                onClick={() => setFullscreenPage(null)}
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
                  padding: '1.5rem'
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setFullscreenPage(null)}
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
                    zIndex: 2010
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                >
                  <X size={24} />
                </button>

                {/* Lightbox Navigation Arrows */}
                {menuPages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFullscreenPage((prev) => (prev === 0 ? menuPages.length - 1 : prev - 1));
                      }}
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
                        zIndex: 2010
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                    >
                      <ChevronLeft size={24} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFullscreenPage((prev) => (prev + 1) % menuPages.length);
                      }}
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
                        zIndex: 2010
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Big Image Frame */}
                <div 
                  onClick={(e) => e.stopPropagation()}
                  style={{ 
                    maxWidth: '92vw', 
                    maxHeight: '90vh', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center' 
                  }}
                >
                  <img
                    key={fullscreenPage}
                    src={menuPages[fullscreenPage]}
                    alt={`Cafe de Marco Menu Page ${fullscreenPage + 1}`}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '82vh',
                      objectFit: 'contain',
                      borderRadius: '4px',
                      boxShadow: '0 25px 60px rgba(0,0,0,0.9)',
                      border: '1px solid rgba(197, 168, 128, 0.25)',
                      animation: 'fadeIn 0.2s ease'
                    }}
                  />
                  <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: 'bold' }}>
                      Menu Page {fullscreenPage + 1} of {menuPages.length}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
