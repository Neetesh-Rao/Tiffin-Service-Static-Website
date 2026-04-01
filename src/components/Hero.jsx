import React, { useEffect, useRef } from 'react'

const floatingEmojis = [
  { emoji: '🍛', top: '18%', left: '8%', delay: '0s', size: 42 },
  { emoji: '🥗', top: '60%', left: '5%', delay: '0.8s', size: 34 },
  { emoji: '🍲', top: '25%', right: '6%', delay: '0.4s', size: 46 },
  { emoji: '🥙', top: '65%', right: '8%', delay: '1.2s', size: 36 },
  { emoji: '🫓', top: '80%', left: '15%', delay: '1.6s', size: 30 },
  { emoji: '🍜', top: '12%', right: '20%', delay: '0.2s', size: 32 },
]

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #fff8f0 0%, #fffbf5 40%, #fff3e0 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 100,
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(232,101,10,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      {/* Glow blobs */}
      <div style={{
        position: 'absolute', top: '20%', left: '-5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(232,101,10,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(232,101,10,0.08) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      {/* Floating food emojis */}
      {floatingEmojis.map((item, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: item.top, left: item.left, right: item.right,
          fontSize: item.size,
          animation: `float 4s ease-in-out ${item.delay} infinite`,
          pointerEvents: 'none',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
          opacity: 0.8,
        }}>
          {item.emoji}
        </div>
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
        {/* Badge */}
        <div style={{ animation: 'fadeUp 0.6s ease forwards', opacity: 0, animationFillMode: 'forwards' }}>
          <span className="section-tag">🏠 For Hostel & PG Students</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 7vw, 80px)',
          fontWeight: 900,
          color: 'var(--dark)',
          lineHeight: 1.1,
          margin: '20px 0 16px',
          animation: 'fadeUp 0.7s 0.15s ease forwards',
          opacity: 0,
          animationFillMode: 'forwards',
        }}>
          Ghar Ka Khana,<br />
          <span style={{ color: 'var(--saffron)', position: 'relative' }}>
            Aapke Darwaze Par
            <svg style={{ position: 'absolute', bottom: -8, left: 0, width: '100%' }} viewBox="0 0 400 16" fill="none">
              <path d="M2 12 Q100 2 200 8 Q300 14 398 4" stroke="var(--saffron)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          color: 'var(--text-muted)',
          maxWidth: 560,
          margin: '0 auto 40px',
          lineHeight: 1.7,
          animation: 'fadeUp 0.7s 0.3s ease forwards',
          opacity: 0,
          animationFillMode: 'forwards',
        }}>
          Hostel aur PG mein rehte hain? Ab khane ki tension khatam! 
          Fresh, hygienic, ghar jaisi tiffin service seedha aapke room tak.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap',
          animation: 'fadeUp 0.7s 0.45s ease forwards',
          opacity: 0,
          animationFillMode: 'forwards',
        }}>
          <a href="#pricing" className="btn-primary" style={{ fontSize: 16, padding: '15px 32px' }}>
            🍱 Tiffin Subscribe Karein
          </a>
          <a href="#menu" className="btn-outline" style={{ fontSize: 16, padding: '15px 32px' }}>
            📋 Menu Dekhein
          </a>
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'flex',
          gap: 40,
          justifyContent: 'center',
          marginTop: 64,
          flexWrap: 'wrap',
          animation: 'fadeUp 0.7s 0.6s ease forwards',
          opacity: 0,
          animationFillMode: 'forwards',
        }}>
          {[
            { num: '500+', label: 'Happy Students' },
            { num: '2+', label: 'Years of Service' },
            { num: '30+', label: 'Hostels & PGs Covered' },
            { num: '4.9★', label: 'Average Rating' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 32, fontWeight: 700,
                color: 'var(--saffron)',
              }}>{stat.num}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Delivery Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          background: 'white',
          border: '1px solid var(--border)',
          borderRadius: 100,
          padding: '10px 20px',
          marginTop: 40,
          boxShadow: 'var(--shadow-sm)',
          animation: 'fadeUp 0.7s 0.75s ease forwards',
          opacity: 0,
          animationFillMode: 'forwards',
        }}>
          <span style={{ fontSize: 20 }}>🕐</span>
          <span style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>
            Lunch <strong>1:00 PM</strong> • Dinner <strong>8:00 PM</strong> – Daily Delivery
          </span>
          <span style={{
            background: 'var(--green-light)', color: 'var(--green)',
            fontSize: 12, fontWeight: 600,
            padding: '3px 10px', borderRadius: 100,
          }}>ON TIME</span>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(5deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
