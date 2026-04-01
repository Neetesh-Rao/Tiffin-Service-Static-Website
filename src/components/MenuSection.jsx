import React, { useState } from 'react'

const menuData = {
  Monday: {
    lunch: ['Dal Tadka', 'Jeera Rice', 'Mix Sabzi', 'Roti (4)', 'Salad', 'Papad'],
    dinner: ['Rajma', 'Steamed Rice', 'Aloo Gobi', 'Roti (4)', 'Raita'],
  },
  Tuesday: {
    lunch: ['Chana Masala', 'Rice', 'Palak Paneer', 'Roti (4)', 'Salad'],
    dinner: ['Dal Makhani', 'Jeera Rice', 'Bhindi Fry', 'Roti (4)', 'Pickle'],
  },
  Wednesday: {
    lunch: ['Yellow Dal', 'Rice', 'Aloo Matar', 'Roti (4)', 'Salad', 'Chaas'],
    dinner: ['Paneer Butter Masala', 'Rice', 'Roti (4)', 'Salad'],
  },
  Thursday: {
    lunch: ['Kadhi Chawal', 'Pakoda', 'Mix Veg', 'Roti (4)', 'Salad'],
    dinner: ['Chole', 'Rice', 'Gobhi Matar', 'Roti (4)', 'Raita'],
  },
  Friday: {
    lunch: ['Dal Fry', 'Rice', 'Lauki Chana Dal', 'Roti (4)', 'Salad'],
    dinner: ['Special Paneer Dish', 'Naan (2)', 'Rice', 'Salad', 'Kheer 🍮'],
  },
  Saturday: {
    lunch: ['Rajma Rice (Special)', 'Boondi Raita', 'Salad', 'Papad', 'Aam ka Achar'],
    dinner: ['Shahi Dal Makhani', 'Butter Naan (2)', 'Jeera Rice', 'Gulab Jamun 🍡'],
  },
  Sunday: {
    lunch: ['Special Sunday Thali – Puri + Chole + Halwa + Salad + Raita + Pickle'],
    dinner: ['Dum Biryani', 'Raita', 'Salan', 'Papad', 'Sweet (Surprise!)'],
  },
}

const days = Object.keys(menuData)

export default function MenuSection() {
  const [activeDay, setActiveDay] = useState('Monday')
  const [mealType, setMealType] = useState('lunch')

  const menu = menuData[activeDay]

  return (
    <section id="menu" style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-tag">📋 Weekly Menu</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, color: 'var(--dark)', marginTop: 8 }}>
            Roz Nayi <span style={{ color: 'var(--saffron)' }}>Variety</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, marginTop: 12 }}>
            Weekly rotating menu — kabhi bore nahi hoge!
          </p>
        </div>

        {/* Day Selector */}
        <div style={{
          display: 'flex', gap: 8, justifyContent: 'center',
          flexWrap: 'wrap', marginBottom: 32,
        }}>
          {days.map(day => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              style={{
                padding: '10px 20px',
                borderRadius: 100,
                border: activeDay === day ? 'none' : '2px solid var(--border)',
                background: activeDay === day ? 'var(--saffron)' : 'white',
                color: activeDay === day ? 'white' : 'var(--text)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600, fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: activeDay === day ? '0 4px 16px rgba(232,101,10,0.35)' : 'none',
              }}
            >
              {day === 'Sunday' ? `${day} 🎉` : day}
            </button>
          ))}
        </div>

        {/* Meal Type Toggle */}
        <div style={{
          display: 'flex', gap: 0, justifyContent: 'center',
          marginBottom: 40,
          background: 'var(--border)',
          borderRadius: 100,
          padding: 4,
          width: 'fit-content', margin: '0 auto 40px',
        }}>
          {['lunch', 'dinner'].map(type => (
            <button
              key={type}
              onClick={() => setMealType(type)}
              style={{
                padding: '10px 28px',
                borderRadius: 100,
                border: 'none',
                background: mealType === type ? 'white' : 'transparent',
                color: mealType === type ? 'var(--saffron)' : 'var(--text-muted)',
                fontWeight: 600, fontSize: 15,
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                boxShadow: mealType === type ? 'var(--shadow-sm)' : 'none',
                transition: 'all 0.2s',
                textTransform: 'capitalize',
              }}
            >
              {type === 'lunch' ? '☀️ Lunch' : '🌙 Dinner'}
            </button>
          ))}
        </div>

        {/* Menu Card */}
        <div style={{
          background: 'white',
          borderRadius: 24,
          padding: '40px',
          maxWidth: 700,
          margin: '0 auto',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 26, fontWeight: 700, color: 'var(--dark)',
              }}>
                {activeDay}'s {mealType === 'lunch' ? '☀️ Lunch' : '🌙 Dinner'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 4 }}>
                Freshly prepared daily
              </p>
            </div>
            <div style={{
              background: 'var(--saffron-pale)',
              color: 'var(--saffron)',
              padding: '6px 16px',
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 600,
            }}>
              {mealType === 'lunch' ? '1:00 PM' : '8:00 PM'}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {menu[mealType].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 18px',
                background: i % 2 === 0 ? 'var(--cream)' : 'var(--saffron-pale)',
                borderRadius: 12,
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateX(6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <span style={{ fontSize: 20 }}>
                  {['🍛', '🍚', '🥗', '🫓', '🥣', '🧅', '🍜'][i % 7]}
                </span>
                <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--text)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 24,
            padding: '14px 18px',
            background: 'var(--green-light)',
            borderRadius: 12,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ fontSize: 18 }}>ℹ️</span>
            <span style={{ fontSize: 14, color: 'var(--green)' }}>
              Menu may vary slightly based on seasonal vegetables. Quality is always maintained!
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
