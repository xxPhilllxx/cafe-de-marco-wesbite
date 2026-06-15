import React from 'react';
import { Phone, MapPin, Mail, Sparkles } from 'lucide-react';
import { restaurantConfig } from '../assetsConfig';

export default function Contact() {
  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-obsidian)', position: 'relative' }}>
      
      {/* Visual glowing background accent */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(197, 168, 128, 0.02) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <span style={{ color: 'var(--color-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '0.5rem' }}>
            Location & Hours
          </span>
          <h2 className="serif-font" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-primary)' }}>
            Visit Us <span className="gold-text">In Old Marco</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0.8rem auto 0', fontSize: '0.95rem' }}>
            We look forward to welcoming you to our historic dining room. Direct phone lines are open daily for inquiries.
          </p>
        </div>

        {/* Two-Column Grid: Left Contact Card, Right Opening Hours Card */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4.5rem' }}>
          
          {/* Column 1: Elegant Contact Info Panel */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: '3rem 2.5rem', 
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              borderWidth: '1.5px',
              borderColor: 'rgba(197, 168, 128, 0.2)'
            }}
          >
            <h3 className="serif-font" style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Sparkles size={20} style={{ color: 'var(--color-gold)' }} />
              <span>Get In Touch</span>
            </h3>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2rem', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'start', gap: '1.2rem' }}>
                <div style={{ backgroundColor: 'rgba(197,168,128,0.08)', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-gold)' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>Address</span>
                  <a 
                    href={restaurantConfig.contact.addressUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.05rem', fontWeight: '500', transition: 'var(--transition-fast)', lineHeight: '1.5' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                  >
                    {restaurantConfig.contact.address}
                  </a>
                </div>
              </li>
              
              <li style={{ display: 'flex', alignItems: 'start', gap: '1.2rem' }}>
                <div style={{ backgroundColor: 'rgba(197,168,128,0.08)', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-gold)' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>Telephone</span>
                  <a 
                    href={`tel:${restaurantConfig.contact.phone}`} 
                    style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.25rem', fontWeight: '600', transition: 'var(--transition-fast)', fontFamily: 'var(--font-serif)' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                  >
                    {restaurantConfig.contact.phoneDisplay}
                  </a>
                </div>
              </li>

              <li style={{ display: 'flex', alignItems: 'start', gap: '1.2rem' }}>
                <div style={{ backgroundColor: 'rgba(197,168,128,0.08)', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-gold)' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>General Email</span>
                  <a 
                    href={`mailto:${restaurantConfig.contact.email}`} 
                    style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.05rem', fontWeight: '500', transition: 'var(--transition-fast)' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                  >
                    {restaurantConfig.contact.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: Elegant Dinner Hours Panel */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: '3rem 2.5rem', 
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              borderWidth: '1.5px',
              borderColor: 'rgba(197, 168, 128, 0.2)'
            }}
          >
            <h3 className="serif-font" style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span className="gold-text">Dinner Hours</span>
            </h3>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <tbody>
                {restaurantConfig.hours.map((h, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.85rem 0', color: 'var(--text-primary)', fontWeight: '500' }}>
                      {h.day}
                    </td>
                    <td style={{ padding: '0.85rem 0', textAlign: 'right', color: h.time === 'Closed' ? 'var(--color-accent)' : 'var(--text-secondary)', fontWeight: h.time === 'Closed' ? '600' : '400' }}>
                      {h.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* Full-width Responsive Google Map */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(197, 168, 128, 0.2)', boxShadow: '0 15px 30px rgba(0,0,0,0.5)' }}>
          <iframe 
            src={restaurantConfig.contact.mapsIframeUrl}
            title="Google Maps Location of Café de Marco"
            width="100%" 
            height="450" 
            style={{ border: 0, display: 'block' }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}
