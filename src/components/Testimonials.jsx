import React, { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Rahul Sharma',
    college: 'B.Tech CSE, GNIOT',
    hostel: 'Sunrise PG, Sector 62',
    review: 'Pehle bahar se khana order karta tha aur paise bhi zyada jaate the aur quality bhi kharab hoti thi. Ab TiffinWala se subscribe kiya hai — bhai, sach mein ghar jaisa lagta hai! Maa yaad aa gayi.',
    rating: 5,
    emoji: '😍',
    color: '#FFF3EA',
  },
  {
    name: 'Priya Singh',
    college: 'MCA 2nd Year, Sharda University',
    hostel: 'Girls PG, Knowledge Park',
    review: 'Main vegetarian hoon aur bahar ke khane mein trust nahi hota tha. Yahan sab pure veg hai, hygienic hai, aur taste bhi kamaal ka hai. Lunch time pe tiffin dekh ke genuinely khush ho jaati hoon!',
    rating: 5,
    emoji: '🥰',
    color: '#EBF7EF',
  },
  {
    name: 'Arjun Patel',
    college: 'B.Tech ECE, GL Bajaj',
    hostel: 'Boys Hostel, Greater Noida',
    review: 'Sunday ka special thali toh bhai next level hai. Puri, chole, halwa — exactly ghar wala feel. Pricing bhi bohot fair hai college students ke liye. Highly recommend!',
    rating: 5,
    emoji: '🤩',
    color: '#EEF2FF',
  },
  {
    name: 'Neha Gupta',
    college: 'MBA 1st Year, Bennett University',
    hostel: 'Comfort Stay PG, Alpha 2',
    review: 'Delivery kabhi late nahi hoti, yeh cheez mujhe sabse zyada pasand hai. Studies ke time pe distraction nahi chahiye — aur TiffinWala ne yeh ensure kiya hai. 10/10!',
    rating: 5,
    emoji: '💯',
    color: '#FDF2F8',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[current]

  return (
    <section style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-tag">❤️ Student Reviews</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, color: 'var(--dark)', marginTop: 8 }}>
            Unhe Poochho Jinhe<br />
            <span style={{ color: 'var(--saffron)' }}>Khud Experience Hai</span>
          </h2>
        </div>

        {/* Main Testimonial Card */}
        <div style={{
          background: t.color,
          borderRadius: 28,
          padding: '48px',
          maxWidth: 740,
          margin: '0 auto 40px',
          border: '1px solid var(--border)',
          transition: 'all 0.4s ease',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Quote mark */}
          <div style={{
            position: 'absolute', top: 24, right: 32,
            fontFamily: 'Georgia, serif',
            fontSize: 120, lineHeight: 1,
            color: 'var(--saffron)', opacity: 0.12,
            pointerEvents: 'none',
          }}>"</div>

          {/* Stars */}
          <div style={{ fontSize: 20, marginBottom: 20, letterSpacing: 2 }}>
            {'★'.repeat(t.rating)}
          </div>

          {/* Review */}
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(16px, 2.2vw, 21px)',
            color: 'var(--dark)',
            lineHeight: 1.7,
            marginBottom: 32,
            fontStyle: 'italic',
            fontWeight: 400,
          }}>
            "{t.review}"
          </p>

          {/* Person */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 54, height: 54,
              borderRadius: '50%',
              background: 'var(--saffron)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 24,
              flexShrink: 0,
            }}>{t.emoji}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 17, color: 'var(--dark)' }}>{t.name}</div>
              <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>{t.college}</div>
              <div style={{ fontSize: 13, color: 'var(--saffron)', marginTop: 2 }}>📍 {t.hostel}</div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 32 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 28 : 8,
                height: 8, borderRadius: 100,
                background: i === current ? 'var(--saffron)' : 'var(--border)',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Mini cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 16, maxWidth: 740, margin: '0 auto',
        }}>
          {testimonials.map((t2, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                padding: '14px 16px',
                borderRadius: 14,
                background: i === current ? 'var(--saffron-pale)' : 'white',
                border: i === current ? '2px solid var(--saffron)' : '2px solid var(--border)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ fontSize: 18, marginBottom: 6 }}>{t2.emoji}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--dark)' }}>{t2.name}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{t2.hostel.split(',')[0]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
