import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--dark-brown)',
      color: 'rgba(255,255,255,0.7)',
      padding: '60px 0 30px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48, marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'var(--saffron)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20,
              }}>🍱</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'white' }}>TiffinWala</div>
                <div style={{ fontSize: 11, letterSpacing: '1px', opacity: 0.5 }}>GHAR JAISA KHANA</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>
              Hostel aur PG mein rehne waale students ke liye fresh, hygienic, aur ghar jaisa khana. Roz, time pe.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {['📘', '📷', '🐦'].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,101,10,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Quick Links</h4>
            {['Home', 'Menu', 'How It Works', 'Pricing', 'Contact'].map(link => (
              <a key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  display: 'block', marginBottom: 12, fontSize: 14,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--saffron)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
              >{link}</a>
            ))}
          </div>

          {/* Plans */}
          <div>
            <h4 style={{ color: 'white', fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Our Plans</h4>
            {[
              'Lunch Only – ₹1500/mo',
              'Dinner Only – ₹1600/mo',
              'Full Day – ₹2500/mo',
              'Weekly Trial',
            ].map(plan => (
              <div key={plan} style={{ marginBottom: 12, fontSize: 14 }}>{plan}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Sampark Karein</h4>
            {[
              { icon: '📱', text: '+91 99999 99999' },
              { icon: '📧', text: 'tiffinwala@gmail.com' },
              { icon: '📍', text: 'Greater Noida, UP' },
              { icon: '🕐', text: 'Mon–Sun | 9AM–9PM' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12, fontSize: 14 }}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}

            <a
              href="https://wa.me/919927195492"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: 16, fontSize: 14, padding: '10px 20px' }}
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: 1, background: 'rgba(255,255,255,0.1)', margin: '0 0 24px',
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13 }}>
            © 2025 TiffinWala. Sabke liye ghar jaisa khana. ❤️ Made with love in Greater Noida
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 13 }}>
            <a href="#" style={{ transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--saffron)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >Privacy Policy</a>
            <a href="#" style={{ transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--saffron)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
