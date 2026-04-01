import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'Menu', 'How It Works', 'Pricing', 'Contact']

  const navStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 1000,
    transition: 'all 0.4s ease',
    background: scrolled ? 'rgba(255,251,245,0.96)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
  }

  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'var(--saffron)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, boxShadow: '0 4px 12px rgba(232,101,10,0.4)'
          }}>🍱</div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--dark)', lineHeight: 1 }}>TiffinWala</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '1px' }}>GHAR JAISA KHANA</div>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-links-desktop">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                fontSize: 14, fontWeight: 500,
                color: 'var(--text)',
                transition: 'color 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--saffron)'}
              onMouseLeave={e => e.target.style.color = 'var(--text)'}
            >{link}</a>
          ))}
        </div>

        <a href="#contact" className="btn-primary" style={{ fontSize: 14, padding: '10px 22px' }}>
          📞 Subscribe Now
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 22, color: 'var(--text)'
          }}
          className="hamburger"
        >☰</button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--cream)',
          borderTop: '1px solid var(--border)',
          padding: '16px 24px',
          display: 'flex', flexDirection: 'column', gap: 16
        }}>
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 16, fontWeight: 500, color: 'var(--text)' }}
            >{link}</a>
          ))}
          <a href="#contact" className="btn-primary" style={{ textAlign: 'center', marginTop: 8 }}>
            Subscribe Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .hamburger { display: block !important; }
          nav > div > a.btn-primary { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
