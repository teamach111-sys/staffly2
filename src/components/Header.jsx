import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, LogIn, User, Briefcase, Menu, X } from 'lucide-react';
import logo from '@/assets/staffly.svg';
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
  const [activeSection, setActiveSection] = useState(null);
  const location  = useLocation();
  const navigate  = useNavigate();
  const regRef    = useRef(null);
  const navTimer  = useRef(null);
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
    if (!isHome) { setActiveSection(null); return; }
    const ids = NAV_LINKS.map(n => n.section);
    let ticking = false;
    const h = () => {
      if (navTimer.current) return;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const offset = 110;
        let current = null;
        let lowest = -Infinity;
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top;
          if (top <= offset) {
            const abs = window.scrollY + top;
            if (abs > lowest) { lowest = abs; current = id; }
          }
        }
        setActiveSection(current || ids[0]);
        ticking = false;
      });
    };
    h();
    window.addEventListener('scroll', h, { passive: true });
    window.addEventListener('resize', h);
    return () => {
      window.removeEventListener('scroll', h);
      window.removeEventListener('resize', h);
      clearTimeout(navTimer.current);
      navTimer.current = null;
    };
  }, [isHome]);

  useEffect(() => {
    const h = (e) => { if (regRef.current && !regRef.current.contains(e.target)) setRegisterOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  useEffect(() => { setMenuOpen(false); setRegisterOpen(false); }, [location]);

  const handleNav = (e, item) => {
    e.preventDefault();
    if (isHome) {
      setActiveSection(item.section);
      clearTimeout(navTimer.current);
      navTimer.current = setTimeout(() => { navTimer.current = null; }, 900);
      document.getElementById(item.section)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/accueil');
      setTimeout(() => document.getElementById(item.section)?.scrollIntoView({ behavior: 'smooth' }), 400);
    }
    setMenuOpen(false);
  };

  const isActive = (item) => isHome && activeSection === item.section;

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
                Rejoindre Staffly
                <ChevronDown size={13} />
              </button>

              {registerOpen && (
                <div className="hdr__dropdown">
                  <p className="hdr__dropdown-title">Je suis…</p>
                  <Link to="/inscription/client" className="hdr__dropdown-item">
                    <div className="hdr__dropdown-icon" style={{ background: 'var(--beige-tint)' }}>
                      <User size={16} color="var(--accent-orange)" />
                    </div>
                    <div>
                      <strong>Client / Entreprise</strong>
                      <span>Je cherche du personnel qualifié</span>
                    </div>
                  </Link>
                  <Link to="/inscription/extra" className="hdr__dropdown-item">
                    <div className="hdr__dropdown-icon" style={{ background: 'var(--beige)' }}>
                      <Briefcase size={16} color="var(--p)" />
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
                className={`hdr__mobile-link${isActive(item) ? ' hdr__mobile-link--active' : ''}`}>
                {item.label}
              </a>
            ))}
            <div className="hdr__mobile-sep" />
            <p className="hdr__mobile-label">Rejoindre Staffly</p>
            <Link to="/inscription/client" className="hdr__mobile-cta" style={{ background: 'linear-gradient(135deg,var(--p),var(--accent-orange-deep))' }}>
              <div className="hdr__mobile-cta-icon"><User size={15} color="var(--white)" /></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13 }}>Client / Entreprise</div>
                <div style={{ fontSize: 11, opacity: .8 }}>Je cherche du personnel qualifié</div>
              </div>
            </Link>
            <Link to="/inscription/extra" className="hdr__mobile-cta" style={{ background: 'linear-gradient(135deg,var(--accent-orange-deep),var(--accent-orange-soft-2))' }}>
              <div className="hdr__mobile-cta-icon"><Briefcase size={15} color="var(--white)" /></div>
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