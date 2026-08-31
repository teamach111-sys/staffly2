import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, LogIn, User, Briefcase, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.svg';
import './Header.css';

const NAV_LINKS = [
  { label: 'Accueil',          href: '/accueil',          section: 'hero'        },
  { label: 'Prestations',      href: '/accueil#prestations', section: 'prestations' },
  { label: 'Services',         href: '/accueil#services',    section: 'services'    },
  { label: 'Fonctionnement',   href: '/accueil#steps',       section: 'steps'       },
  { label: 'Contact',          href: '/accueil#contact',     section: 'contact'     },
];

export default function Header() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const location  = useLocation();
  const navigate  = useNavigate();
  const regRef    = useRef(null);
  const isHome    = location.pathname === '/accueil';
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const h = () => setIsMobile(window.innerWidth < 768);
  window.addEventListener('resize', h);
  return () => window.removeEventListener('resize', h);
}, []);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    const h = (e) => { if (regRef.current && !regRef.current.contains(e.target)) setRegisterOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  useEffect(() => { setMenuOpen(false); setRegisterOpen(false); }, [location]);

  const handleNav = (e, item) => {
    e.preventDefault();
    if (isHome) {
      document.getElementById(item.section)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/accueil');
      setTimeout(() => document.getElementById(item.section)?.scrollIntoView({ behavior: 'smooth' }), 400);
    }
    setMenuOpen(false);
  };

  const isActive = (item) => {
    if (item.section === 'hero') return location.pathname === '/accueil';
    return false;
  };

  return (
    <>
      <header className={`hdr${scrolled ? ' hdr--scrolled' : ''}`}>
        <div className="hdr__inner">

          {/* Logo */}
          <Link to="/accueil" className="hdr__logo">
            <img src={logo} alt="Staffly" className="hdr__logo-img" />
          </Link>

          {/* Desktop nav */}
          <nav className="hdr__nav">
            {NAV_LINKS.map(item => (
              <a
                key={item.section}
                href={item.href}
                onClick={(e) => handleNav(e, item)}
                className={`hdr__link${isActive(item) ? ' hdr__link--active' : ''}`}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hdr__actions">
            <Link to="/login" className="hdr__btn-login">
              <LogIn size={14} />
              Connexion
            </Link>

            <div ref={regRef} style={{ position: 'relative' }}>
              <button
                className={`hdr__btn-join${registerOpen ? ' hdr__btn-join--open' : ''}`}
                onClick={() => setRegisterOpen(p => !p)}>
                Rejoindre Bookly
                <ChevronDown size={13} />
              </button>

              {registerOpen && (
                <div className="hdr__dropdown">
                  <p className="hdr__dropdown-title">Je suis…</p>
                  <Link to="/inscription/client" className="hdr__dropdown-item">
                    <div className="hdr__dropdown-icon" style={{ background: '#fff7ed' }}>
                      <User size={16} color="#f97316" />
                    </div>
                    <div>
                      <strong>Client / Entreprise</strong>
                      <span>Je cherche du personnel qualifié</span>
                    </div>
                  </Link>
                  <Link to="/inscription/extra" className="hdr__dropdown-item">
                    <div className="hdr__dropdown-icon" style={{ background: '#fdf3ee' }}>
                      <Briefcase size={16} color="#8C3E01" />
                    </div>
                    <div>
                      <strong>Extra / Freelance</strong>
                      <span>Je propose mes services</span>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Burger */}
          <button
            className={`hdr__burger${menuOpen ? ' hdr__burger--open' : ''}`}
            onClick={() => setMenuOpen(p => !p)}
            aria-label={isMobile ? undefined : "Menu"}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="hdr__mobile">
            {NAV_LINKS.map(item => (
              <a
                key={item.section}
                href={item.href}
                onClick={(e) => handleNav(e, item)}
                className="hdr__mobile-link">
                {item.label}
              </a>
            ))}
            <div className="hdr__mobile-sep" />
            <p className="hdr__mobile-label">Rejoindre Staffly</p>
            <Link to="/inscription/client" className="hdr__mobile-cta" style={{ background: 'linear-gradient(135deg,#8C3E01,#B9622C)' }}>
              <div className="hdr__mobile-cta-icon"><User size={15} color="#fff" /></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13 }}>Client / Entreprise</div>
                <div style={{ fontSize: 11, opacity: .8 }}>Je cherche du personnel qualifié</div>
              </div>
            </Link>
            <Link to="/inscription/extra" className="hdr__mobile-cta" style={{ background: 'linear-gradient(135deg,#B9622C,#d4834e)' }}>
              <div className="hdr__mobile-cta-icon"><Briefcase size={15} color="#fff" /></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13 }}>Extra / Freelance</div>
                <div style={{ fontSize: 11, opacity: .8 }}>Je propose mes services</div>
              </div>
            </Link>
            <Link to="/login" className="hdr__mobile-login">Se connecter</Link>
          </div>
        )}
      </header>
    </>
  );
}