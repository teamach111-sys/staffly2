import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'

function Placeholder({ title }) {
  return (
    <div style={{ padding: '120px 28px', textAlign: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 32, fontWeight: 900, color: '#8C3E01', marginBottom: 12 }}>{title}</h1>
      <p style={{ color: '#6b3a1a' }}>
        Cette page est en cours de construction. Naviguez vers l'accueil pour explorer la plateforme.
      </p>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/accueil" replace />} />
      <Route path="/accueil" element={<Home />} />
      <Route path="/login" element={<Placeholder title="Connexion" />} />
      <Route path="/inscription/client" element={<Placeholder title="Inscription Client" />} />
      <Route path="/inscription/extra" element={<Placeholder title="Inscription Extra" />} />
      <Route path="/privacy" element={<Placeholder title="Confidentialité" />} />
      <Route path="/terms" element={<Placeholder title="CGU" />} />
      <Route path="/mentions" element={<Placeholder title="Mentions légales" />} />
      <Route path="*" element={<Navigate to="/accueil" replace />} />
    </Routes>
  )
}
