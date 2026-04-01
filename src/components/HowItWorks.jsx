import React from 'react'

const steps = [
  {
    step: '01',
    icon: '📱',
    title: 'WhatsApp Karein',
    desc: 'Apna naam, address aur preferred plan WhatsApp par share karein. Koi form nahi, koi jhanjhat nahi.',
    color: '#EBF7EF',
    accent: '#2D7A47',
  },
  {
    step: '02',
    icon: '📋',
    title: 'Plan Choose Karein',
    desc: 'Lunch, Dinner ya dono — weekly ya monthly. Apni zaroorat ke hisaab se best plan select karein.',
    color: '#FFF3EA',
    accent: '#E8650A',
  },
  {
    step: '03',
    icon: '💳',
    title: 'Payment Karein',
    desc: 'UPI, PhonePe, GPay — jaise bhi easy lage. Advance payment pe extra discount milta hai.',
    color: '#EEF2FF',
    accent: '#4F46E5',
  },
  {
    step: '04',
    icon: '🍱',
    title: 'Khana Enjoy Karein',
    desc: 'Aapke hostel room tak fresh tiffin deliver hoga — bilkul time pe, daily without fail.',
    color: '#FDF2F8',
    accent: '#BE185D',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '100px 0', background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(232,101,10,0.08) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(232,101,10,0.15) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(232,101,10,0.2)',
            color: 'var(--saffron-light)',
            fontSize: 13, fontWeight: 600, letterSpacing: '1.5px',
            textTransform: 'uppercase', padding: '6px 16px', borderRadius: 100,
            marginBottom: 16,
          }}>🚀 Simple Process</span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: 700,
            color: 'white',
            marginTop: 8,
          }}>
            Sirf 4 Steps Mein<br />
            <span style={{ color: 'var(--saffron)' }}>Shuru Karein</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 24,
          position: 'relative',
        }}>
          {/* Connector line (desktop) */}
          <div style={{
            position: 'absolute',
            top: 56, left: '12.5%', right: '12.5%',
            height: 2,
            background: 'linear-gradient(90deg, var(--saffron), rgba(232,101,10,0.1))',
            pointerEvents: 'none',
            display: 'none',
          }} className="connector-line" />

          {steps.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 24,
              padding: '32px 24px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(232,101,10,0.1)'
                e.currentTarget.style.border = '1px solid rgba(232,101,10,0.4)'
                e.currentTarget.style.transform = 'translateY(-8px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Step number */}
              <div style={{
                fontSize: 12, fontWeight: 700, letterSpacing: '2px',
                color: 'var(--saffron)', marginBottom: 16, opacity: 0.7,
              }}>STEP {s.step}</div>

              {/* Icon circle */}
              <div style={{
                width: 72, height: 72,
                borderRadius: '50%',
                background: s.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 32,
                margin: '0 auto 24px',
                border: `2px solid ${s.accent}30`,
              }}>{s.icon}</div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 20, fontWeight: 700,
                color: 'white', marginBottom: 12,
              }}>{s.title}</h3>

              <p style={{
                fontSize: 15, color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.65,
              }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <a
            href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20subscribe%20to%20TiffinWala%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: 16, padding: '15px 36px' }}
          >
            💬 WhatsApp Karein – Abhi Shuru Karein
          </a>
        </div>
      </div>
    </section>
  )
}
