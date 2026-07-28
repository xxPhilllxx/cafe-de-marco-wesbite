import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Featured() {
  // Curated list of signature specialties extracted from the reviews & original copy
  const specialties = [
    {
      title: "USDA Prime Ribeye",
      subtitle: "Fire-Grilled Premium Cut",
      description: "A hand-selected USDA Prime Ribeye, beautifully marbled for rich flavor, aged to tender perfection, and fire-grilled to your precise preference.",
      image: "/images/specialty_ribeye.png",
      tag: "Premium Cut",
    },
    {
      title: "Alaskan King Crab Legs",
      subtitle: "Sweet & Succulent Seafood",
      description: "Colossal Alaskan King Crab Legs, steamed to lock in their natural sweetness, served piping hot with drawn butter and fresh lemon wedges.",
      image: "/images/specialty_crab_legs.png",
      tag: "Guest Favorite",
    },
    {
      title: "Signature NY Cheesecake",
      subtitle: "A Decadent Sweet Ending",
      description: "A classic New York-style cheesecake, exceptionally rich and creamy, baked on a sweet graham cracker crust and topped with a fresh strawberry glaze.",
      image: "/images/specialty_cheesecake.png",
      tag: "Chef's Dessert Selection",
    }
  ];

  return (
    <section id="specialties" className="section-padding" style={{ backgroundColor: '#0d0d11', borderTop: '1px solid rgba(197, 168, 128, 0.08)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Sparkles size={14} />
            Chef's Specialties
          </span>
          <h2 className="serif-font" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-primary)' }}>
            Signature <span className="gold-text">Culinary Creations</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0.8rem auto 0', fontSize: '0.95rem' }}>
            Savor our celebrated masterpieces, crafted with pure passion, culinary history, and the finest local seafood selections.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {specialties.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
              }}
            >
              {/* Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(9, 9, 11, 0.85)',
                  border: '1px solid var(--color-gold)',
                  color: 'var(--color-gold)',
                  padding: '0.35rem 0.8rem',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  borderRadius: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  zIndex: 10,
                  backdropFilter: 'blur(4px)',
                }}
              >
                {item.tag}
              </div>

              {/* Card Image */}
              <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
                />
              </div>

              {/* Card Details */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '0.4rem', display: 'block' }}>
                  {item.subtitle}
                </span>
                <h3 className="serif-font" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', flexGrow: 1 }}>
                  {item.description}
                </p>

                {/* Explore menu trigger */}
                <a
                  href="#menu"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--color-gold)',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginTop: '2rem',
                    transition: 'var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.gap = '0.7rem'}
                  onMouseLeave={(e) => e.currentTarget.style.gap = '0.4rem'}
                >
                  <span>View All Menu Items</span>
                  <ArrowRight size={14} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
