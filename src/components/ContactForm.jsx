import React, { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', plan: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hi TiffinWala! 🍱\n\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\nPlan: ${form.plan}\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/919999999999?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 12,
    border: '2px solid var(--border)',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    color: 'var(--text)',
    background: 'white',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--white)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64, alignItems: 'center',
        }} className="contact-grid">
          {/* Left */}
          <div>
            <span className="section-tag">📞 Get In Touch</span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700, color: 'var(--dark)',
              marginTop: 12, marginBottom: 20, lineHeight: 1.2,
            }}>
              Aaj Hi<br />
              <span style={{ color: 'var(--saffron)' }}>Subscribe Karein</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
              Form bharo, ya seedha WhatsApp karo. Humari team 30 minutes mein response degi.
            </p>

            {/* Contact Info Cards */}
            {[
              { icon: '📱', label: 'WhatsApp / Call', value: '+91 99999 99999', link: 'https://wa.me/919999999999' },
              { icon: '📧', label: 'Email', value: 'tiffinwala@gmail.com', link: 'mailto:tiffinwala@gmail.com' },
              { icon: '📍', label: 'Service Area', value: 'Greater Noida, Noida', link: null },
              { icon: '🕐', label: 'Delivery Timings', value: 'Lunch 1PM • Dinner 8PM', link: null },
            ].map((c, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '16px 20px',
                background: 'var(--cream)',
                borderRadius: 14,
                marginBottom: 12,
                border: '1px solid var(--border)',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'var(--saffron-pale)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, flexShrink: 0,
                }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 }}>{c.label}</div>
                  {c.link ? (
                    <a href={c.link} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 15, fontWeight: 600, color: 'var(--saffron)' }}>
                      {c.value}
                    </a>
                  ) : (
                    <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--dark)' }}>{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Form */}
          <div style={{
            background: 'var(--cream)',
            borderRadius: 24,
            padding: '40px 36px',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-md)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--dark)', marginBottom: 12 }}>
                  WhatsApp Khul Gaya!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.6 }}>
                  Message bhejiye — humari team jald hi aapko call karegi. Welcome to TiffinWala family! 🍱
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline"
                  style={{ marginTop: 24 }}
                >
                  Dobara Fill Karein
                </button>
              </div>
            ) : (
              <>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22, fontWeight: 700, color: 'var(--dark)',
                  marginBottom: 24,
                }}>Subscription Form</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6, display: 'block' }}>
                      Aapka Naam *
                    </label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      placeholder="Full Name"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--saffron)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      required
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6, display: 'block' }}>
                      WhatsApp Number *
                    </label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--saffron)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      required
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6, display: 'block' }}>
                      Hostel / PG Address *
                    </label>
                    <input
                      name="address" value={form.address} onChange={handleChange}
                      placeholder="Hostel/PG name & area"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--saffron)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      required
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6, display: 'block' }}>
                      Plan Choose Karein *
                    </label>
                    <select
                      name="plan" value={form.plan} onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => e.target.style.borderColor = 'var(--saffron)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      required
                    >
                      <option value="">-- Plan Select Karein --</option>
                      <option value="Lunch Only – ₹1500/month">☀️ Lunch Only – ₹1500/month</option>
                      <option value="Dinner Only – ₹1600/month">🌙 Dinner Only – ₹1600/month</option>
                      <option value="Full Day Tiffin – ₹2500/month">🍱 Full Day Tiffin – ₹2500/month (Best Value)</option>
                      <option value="Weekly Trial">📅 Weekly Trial (Want to try first)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6, display: 'block' }}>
                      Koi Sawaal? (Optional)
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Koi allergies, preferences, ya sawaal..."
                      rows={3}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={e => e.target.style.borderColor = 'var(--saffron)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="btn-primary"
                    style={{ fontSize: 16, padding: '15px', justifyContent: 'center', marginTop: 4 }}
                  >
                    💬 WhatsApp Par Bhejein
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
