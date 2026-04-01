import React, { useState } from 'react'

const plans = [
  {
    name: 'Lunch Only',
    icon: '☀️',
    monthly: 1500,
    weekly: 450,
    color: '#FFF8E1',
    accent: '#D97706',
    features: [
      '1 meal/day (Lunch)',
      'Dal + Sabzi + Roti + Rice',
      'Salad & Pickle included',
      'Delivered by 1:00 PM',
      'WhatsApp support',
    ],
    popular: false,
  },
  {
    name: 'Full Day Tiffin',
    icon: '🍱',
    monthly: 2500,
    weekly: 750,
    color: 'var(--dark)',
    accent: '#E8650A',
    features: [
      '2 meals/day (Lunch + Dinner)',
      'Complete balanced diet',
      'Special Sunday Thali FREE',
      'Delivered on time daily',
      'Priority WhatsApp support',
      'Monthly menu card',
    ],
    popular: true,
  },
  {
    name: 'Dinner Only',
    icon: '🌙',
    monthly: 1600,
    weekly: 480,
    color: '#EEF2FF',
    accent: '#4F46E5',
    features: [
      '1 meal/day (Dinner)',
      'Dal + Sabzi + Roti + Rice',
      'Raita/Chaas alternate days',
      'Delivered by 8:00 PM',
      'WhatsApp support',
    ],
    popular: false,
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')

  return (
    <section id="pricing" style={{ padding: '100px 0', background: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-tag">💰 Pricing Plans</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, color: 'var(--dark)', marginTop: 8 }}>
            Aapke Budget Mein,<br />
            <span style={{ color: 'var(--saffron)' }}>Best Quality</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, marginTop: 12, maxWidth: 480, margin: '12px auto 0' }}>
            No hidden charges. Seedha aur transparent pricing.
          </p>

          {/* Billing Toggle */}
          <div style={{
            display: 'flex', gap: 0, justifyContent: 'center',
            margin: '32px auto 0',
            background: 'var(--border)',
            borderRadius: 100, padding: 4,
            width: 'fit-content',
          }}>
            {['weekly', 'monthly'].map(b => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                style={{
                  padding: '10px 28px', borderRadius: 100, border: 'none',
                  background: billing === b ? 'white' : 'transparent',
                  color: billing === b ? 'var(--saffron)' : 'var(--text-muted)',
                  fontWeight: 600, fontSize: 15, cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  boxShadow: billing === b ? 'var(--shadow-sm)' : 'none',
                  transition: 'all 0.2s',
                  textTransform: 'capitalize',
                }}
              >
                {b === 'monthly' ? '🗓️ Monthly (Best Value)' : '📅 Weekly'}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24, alignItems: 'start',
        }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              background: plan.popular ? plan.color : 'white',
              border: plan.popular ? '2px solid var(--saffron)' : '2px solid var(--border)',
              borderRadius: 24,
              padding: '36px 28px',
              position: 'relative',
              transition: 'all 0.3s ease',
              transform: plan.popular ? 'scale(1.03)' : 'scale(1)',
            }}
              onMouseEnter={e => {
                if (!plan.popular) {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)'
                }
              }}
              onMouseLeave={e => {
                if (!plan.popular) {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--saffron)',
                  color: 'white', fontSize: 12, fontWeight: 700,
                  padding: '5px 18px', borderRadius: 100,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 12px rgba(232,101,10,0.4)',
                }}>⭐ Most Popular</div>
              )}

              {/* Plan header */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>{plan.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22, fontWeight: 700,
                  color: plan.popular ? 'white' : 'var(--dark)',
                }}>{plan.name}</h3>
              </div>

              {/* Price */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 48, fontWeight: 900,
                    color: plan.popular ? 'white' : 'var(--saffron)',
                  }}>₹{plan[billing]}</span>
                  <span style={{ color: plan.popular ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)', fontSize: 15 }}>
                    / {billing === 'monthly' ? 'month' : 'week'}
                  </span>
                </div>
                {billing === 'monthly' && (
                  <div style={{
                    fontSize: 13,
                    color: plan.popular ? 'rgba(255,255,255,0.7)' : 'var(--green)',
                    marginTop: 6, fontWeight: 500,
                  }}>
                    💚 Save ₹{plan.weekly * 4 - plan.monthly} vs weekly plan
                  </div>
                )}
              </div>

              {/* Features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {plan.features.map((feat, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: '50%',
                      background: plan.popular ? 'rgba(255,255,255,0.2)' : 'var(--green-light)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, fontSize: 12,
                    }}>✓</div>
                    <span style={{
                      fontSize: 15,
                      color: plan.popular ? 'rgba(255,255,255,0.85)' : 'var(--text)',
                    }}>{feat}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '14px',
                  borderRadius: 100,
                  background: plan.popular ? 'white' : 'var(--saffron)',
                  color: plan.popular ? 'var(--saffron)' : 'white',
                  fontWeight: 700, fontSize: 15,
                  transition: 'all 0.2s',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  boxShadow: '0 4px 16px rgba(232,101,10,0.25)',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Yeh Plan Lein 🍱
              </a>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 32, color: 'var(--text-muted)', fontSize: 14 }}>
          🔒 No contract. Cancel anytime. First day free trial available on request.
        </p>
      </div>
    </section>
  )
}
