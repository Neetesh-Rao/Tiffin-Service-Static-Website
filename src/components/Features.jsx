import React from 'react'

const features = [
  {
    icon: '🌿',
    title: 'Fresh & Hygienic',
    desc: 'Roz subah fresh vegetables se taiyaar khana. Koi preservative nahi, sirf pure ingredients.',
    color: '#EBF7EF',
    accent: '#2D7A47',
  },
  {
    icon: '🏠',
    title: 'Ghar Jaisa Swad',
    desc: 'Authentic North Indian recipes jo aapko maa ke haath ka khana yaad dilayega.',
    color: '#FFF3EA',
    accent: '#E8650A',
  },
  {
    icon: '⏰',
    title: 'Time Pe Delivery',
    desc: 'Lunch aur dinner bilkul time par. Late delivery pe paise wapas — hamari guarantee.',
    color: '#EEF2FF',
    accent: '#4F46E5',
  },
  {
    icon: '💰',
    title: 'Pocket Friendly',
    desc: 'Student budget mein best quality. Monthly plans available starting just ₹1500.',
    color: '#FFF8E1',
    accent: '#D97706',
  },
  {
    icon: '🔄',
    title: 'Flexible Plans',
    desc: 'Lunch only, Dinner only, ya dono. Weekly, monthly — aapki marzi ka plan.',
    color: '#FDF2F8',
    accent: '#BE185D',
  },
  {
    icon: '📱',
    title: 'Easy Connect',
    desc: 'WhatsApp se order karo, track karo. Koi complicated app nahi chahiye.',
    color: '#ECFDF5',
    accent: '#059669',
  },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 0', background: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-tag">✨ Why Choose Us</span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: 700,
            color: 'var(--dark)',
            marginTop: 8,
          }}>
            Sirf Khana Nahi,<br />
            <span style={{ color: 'var(--saffron)' }}>Ek Complete Experience</span>
          </h2>
          <p style={{
            maxWidth: 520,
            margin: '16px auto 0',
            color: 'var(--text-muted)',
            fontSize: 17,
            lineHeight: 1.7,
          }}>
            Har detail sochke design ki gayi hai — aapko sirf enjoy karna hai.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: f.color,
                borderRadius: 20,
                padding: '32px 28px',
                border: `1px solid ${f.accent}20`,
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = `0 20px 50px ${f.accent}22`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Decorative circle */}
              <div style={{
                position: 'absolute', top: -20, right: -20,
                width: 100, height: 100,
                borderRadius: '50%',
                background: `${f.accent}0D`,
                pointerEvents: 'none',
              }} />

              <div style={{
                width: 56, height: 56,
                borderRadius: 16,
                background: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28,
                marginBottom: 20,
                boxShadow: `0 4px 16px ${f.accent}20`,
              }}>
                {f.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 20,
                fontWeight: 700,
                color: 'var(--dark)',
                marginBottom: 10,
              }}>{f.title}</h3>

              <p style={{
                fontSize: 15,
                color: 'var(--text-muted)',
                lineHeight: 1.65,
              }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
