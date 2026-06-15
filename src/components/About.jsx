import React, { useState } from 'react';
import { restaurantConfig } from '../assetsConfig';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');
  const about = restaurantConfig.about;

  const tabs = [
    { id: 'story', label: 'Our Story' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'vision', label: 'Our Vision' },
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-obsidian)', position: 'relative' }}>
      {/* Visual background accents */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(197, 168, 128, 0.03) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Column 1: Info & Tabs */}
          <div>
            <span style={{ color: 'var(--color-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '0.5rem' }}>
              Culinary Heritage
            </span>
            <h2 className="serif-font" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-primary)', marginBottom: '2rem', lineHeight: '1.2' }}>
              A Story of Taste <br />
              <span className="gold-text">& Authentic Hospitality</span>
            </h2>

            {/* Tabs Navigation */}
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(197,168,128,0.15)', marginBottom: '2rem', gap: '1.5rem' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '0.8rem 0',
                    color: activeTab === tab.id ? 'var(--color-gold)' : 'var(--text-muted)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    fontWeight: activeTab === tab.id ? '600' : '400',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'var(--transition-fast)',
                  }}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: -1,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-gold)',
                        animation: 'fadeIn 0.3s ease'
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div style={{ minHeight: '180px', color: 'var(--text-secondary)' }}>
              {activeTab === 'story' && (
                <div style={{ animation: 'fadeIn 0.5s ease' }}>
                  <p style={{ marginBottom: '1rem' }}>{about.story}</p>
                  <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--color-gold)', borderLeft: '2px solid var(--color-gold)', paddingLeft: '1rem', marginTop: '1.5rem' }}>
                    "Fine dining with a warm, welcoming atmosphere in Old Marco's historical district."
                  </p>
                </div>
              )}
              {activeTab === 'mission' && (
                <div style={{ animation: 'fadeIn 0.5s ease' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>{about.mission}</p>
                  <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                    <div>
                      <h4 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', marginBottom: '0.2rem' }}>100%</h4>
                      <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fresh Seafood</p>
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', marginBottom: '0.2rem' }}>Prime</h4>
                      <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Aged Hand-Cuts</p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'vision' && (
                <div style={{ animation: 'fadeIn 0.5s ease' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>{about.vision}</p>
                </div>
              )}
            </div>
          </div>

          {/* Column 2: Elegant Image Card */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Visual Gold Backing Square */}
            <div 
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '10px',
                width: '100%',
                height: '100%',
                border: '1.5px solid var(--color-gold)',
                borderRadius: '8px',
                zIndex: 1,
                pointerEvents: 'none',
                opacity: 0.5,
              }}
              className="desktop-only"
            />
            
            <div 
              className="glass-panel" 
              style={{ 
                padding: '0.8rem', 
                borderRadius: '8px', 
                zIndex: 5, 
                width: '100%',
                maxWidth: '480px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', height: '360px' }}>
                <img 
                  src={restaurantConfig.images.aboutImage} 
                  alt="Fine culinary plating at Cafe de Marco" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          #about { padding-bottom: 6rem; }
        }
      `}} />
    </section>
  );
}
