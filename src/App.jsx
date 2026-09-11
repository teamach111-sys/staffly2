import { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Cga from './pages/legal/cga.jsx'
import Cgv from './pages/legal/cgv.jsx'
import MentionsLegales from './pages/legal/mentions-legales.jsx'
import PolitiqueDeCookies from './pages/legal/politique-de-cookies.jsx'
import './pages/legal/styles.css'

const legalPages = {
  '#/cga': Cga,
  '#/cgv': Cgv,
  '#/mentions': MentionsLegales,
  '#/cookies': PolitiqueDeCookies,
}

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (legalPages[hash]) window.scrollTo(0, 0)
  }, [hash])

  const LegalPage = legalPages[hash]
  return LegalPage ? <><Header /><LegalPage /></> : <Home />
}