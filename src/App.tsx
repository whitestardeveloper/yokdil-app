import { NavLink, Route, Routes } from 'react-router-dom'
import { daysToExam } from './data/plan'
import Dashboard from './pages/Dashboard'
import Words from './pages/Words'
import Grammar from './pages/Grammar'
import GrammarDetail from './pages/GrammarDetail'
import Quiz from './pages/Quiz'
import Karne from './pages/Karne'
import Plan from './pages/Plan'
import Reference from './pages/Reference'
import Anatomy from './pages/Anatomy'
import Progress from './pages/Progress'

const tabs = [
  { to: '/', ico: '🏠', label: 'Panel', end: true },
  { to: '/kelime', ico: '🗂️', label: 'Kelime', end: false },
  { to: '/gramer', ico: '📘', label: 'Gramer', end: false },
  { to: '/ilerleme', ico: '📈', label: 'İlerleme', end: false },
  { to: '/plan', ico: '🗓️', label: 'Plan', end: false },
  { to: '/karne', ico: '📊', label: 'Karne', end: false },
]

export default function App() {
  const days = daysToExam()
  return (
    <>
      <header className="topbar">
        <div className="brand">
          YÖKDİL <span>Koç</span>
        </div>
        <div className="countdown">
          Sınava <b>{days}</b> gün · 9 Ağustos
        </div>
      </header>

      <nav className="tabs">
        {tabs.map((t) => (
          <NavLink key={t.to} to={t.to} end={t.end} className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="ico">{t.ico}</span>
            <span>{t.label}</span>
          </NavLink>
        ))}
      </nav>

      <main className="page">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/kelime" element={<Words />} />
          <Route path="/gramer" element={<Grammar />} />
          <Route path="/gramer/:id" element={<GrammarDetail />} />
          <Route path="/referans/zaman" element={<Reference />} />
          <Route path="/anatomi" element={<Anatomy />} />
          <Route path="/ilerleme" element={<Progress />} />
          <Route path="/test/:id" element={<Quiz />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/karne" element={<Karne />} />
        </Routes>
      </main>
    </>
  )
}
