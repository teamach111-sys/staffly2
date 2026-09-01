import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faCircleCheck,
  faArrowRight,
  faChevronDown,
  faStar,
  faMartiniGlass,
  faChalkboardUser,
  faUtensils,
  faHeart,
  faBuilding,
  faChampagneGlasses,
  faClock,
  faCalendarDays,
  faShieldHalved,
  faHeadset,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import logo from '@/assets/logo.svg';
import '../../themes/duplicates/dup1.css';

/* ── Brand icons (FontAwesome) ── */
const IconLinkedin  = ({ size = 18 }) => (
  <FontAwesomeIcon icon={faLinkedin} style={{ width: size, height: size }} />
);
const IconInstagram = ({ size = 18 }) => (
  <FontAwesomeIcon icon={faInstagram} style={{ width: size, height: size }} />
);
const IconFacebook  = ({ size = 18 }) => (
  <FontAwesomeIcon icon={faFacebook} style={{ width: size, height: size }} />
);

/* ══════════════════════════════════════════════
   HOOKS
══════════════════════════════════════════════ */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useCounter(target, duration = 2000, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let t0 = null;
    const tick = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 4)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, active]);
  return val;
}

/* ══════════════════════════════════════════════
   MICRO COMPONENTS
══════════════════════════════════════════════ */
function StatNum({ value, suffix = '', active }) {
  const n = useCounter(value, 2000, active);
  return <>{n.toLocaleString('fr-FR')}{suffix}</>;
}

function StarRow() {
  return (
    <div className="hero__stars">
      {[1,2,3,4,5].map(i => <FontAwesomeIcon key={i} icon={faStar} style={{ width:13, height:13, color:'var(--rating-star)' }} />)}
    </div>
  );
}

function CheckIcon({ color = 'var(--p)' }) {
  return (
    <div style={{ background: color, marginTop: 1, width: 21, height: 21, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <FontAwesomeIcon icon={faCircleCheck} style={{ width:10, height:10, color:'var(--white)' }} />
    </div>
  );
}

/* ══════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════ */
export default function Home() {
  const [heroReady, setHeroReady] = useState(false);
  const [form, setForm]           = useState({ name:'', email:'', subject:'', message:'', type:'client' });
  const [formStatus, setFormStatus] = useState(null);
  const [openFaq, setOpenFaq]     = useState(null);

  const [statsRef,  statsVis]   = useInView(0.3);
  const [presRef,   presVis]    = useInView(0.15);
  const [featRef,   featVis]    = useInView(0.15);
  const [stepsRef,  stepsVis]   = useInView(0.15);
  const [numRef,    numVis]     = useInView(0.2);
  const [fwRef,     fwVis]      = useInView(0.15);
  const [testiRef,  testiVis]   = useInView(0.15);
  const [faqRef,    faqVis]     = useInView(0.15);
  const [ctaRef,    ctaVis]     = useInView(0.2);
  const [contactRef,contactVis] = useInView(0.12);

  useEffect(() => { setTimeout(() => setHeroReady(true), 80); }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  /* contact submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, to: 'aithmidine.mouad@gmail.com' }),
      });
      setFormStatus('ok');
      setForm({ name:'', email:'', subject:'', message:'', type:'client' });
    } catch {
      window.location.href = `mailto:aithmidine.mouad@gmail.com?subject=${encodeURIComponent(form.subject || 'Contact Staffly')}&body=${encodeURIComponent(`De : ${form.name} (${form.email})\nType : ${form.type}\n\n${form.message}`)}`;
      setFormStatus('ok');
    }
  };

  /* Qualifications */
  const QUALS = [
    ['Barista','var(--qual-barista)'],
    ['Chef de cuisine','var(--qual-chef-cuisine)'],
    ['Chef de rang','var(--qual-chef-rang)'],
    ["Maître d'hôtel",'var(--qual-maitre-hotel)'],
    ['Serveur','var(--qual-serveur)'],
    ['Mixologue','var(--qual-mixologue)'],
    ['Plongeur','var(--qual-plongeur)'],
    ['Runner','var(--qual-runner)'],
    ['Chef de partie ','var(--qual-chef-partie)'],
    ['Commis de cuisine','var(--qual-commis)'],
     ['Barista','var(--qual-barista)'],
    ['Chef de cuisine','var(--qual-chef-cuisine)'],
    ['Chef de rang','var(--qual-chef-rang)'],
    ["Maître d'hôtel",'var(--qual-maitre-hotel)'],
    ['Serveur','var(--qual-serveur)'],
    ['Mixologue','var(--qual-mixologue)'],
    ['Plongeur','var(--qual-plongeur)'],
    ['Runner','var(--qual-runner)'],
    ['Chef de partie ','var(--qual-chef-partie)'],
    ['Commis de cuisine','var(--qual-commis)'],
  ];

  /* Prestation types */
  const PRESTATIONS = [
    {
      icon: <FontAwesomeIcon icon={faMartiniGlass} style={{ width:28, height:28 }} />,
      color:'var(--svc-evenementiel)', bg:'var(--svc-evenementiel-bg)', tag:'Événementiel',
      title:'Barista & Coffee Corner',
      desc:"Barista qualifiés pour animer vos espaces café, Coffee breaks et bar à café.  Service de boissons chaudes, accueil des invités et expérience prenium tout au long de votre évènement. ",
      profiles:['Barista', 'Runner', ' Serveur '],
    },
    {
      icon: <FontAwesomeIcon icon={faChalkboardUser} style={{ width:28, height:28 }} />,
      color:'var(--svc-conferences)', bg:'var(--svc-conferences-bg)', tag:'Conférences',
      title:'Mixologues et bars à cocktails ',
      desc:"Mixologues et bartenders expérimentés pour vos événements, soirées privées et réceptions. Création de cocktails avec ou sans alcool, animations de bar et service haut de gamme. ",
      profiles:['Mixologue', 'Barman', 'Serveur '],
    },
    {
      icon: <FontAwesomeIcon icon={faUtensils} style={{ width:28, height:28 }} />,
      color:'var(--svc-restauration)', bg:'var(--svc-restauration-bg)', tag:'Restauration',
      title:'Restauration & Traiteurs',
      desc:"Renfort de salle et cuisine pour vos restaurants, traiteurs et services de banquet. Serveurs, barmans, plongeurs, runners et chefs de partie disponibles sur des créneaux précis.",
      profiles:['Serveur','Barman','Cuisinier','Runner'],
    },
    {
      icon: <FontAwesomeIcon icon={faHeart} style={{ width:28, height:28 }} />,
      color:'var(--svc-mariages)', bg:'var(--svc-mariages-bg)', tag:'Mariages',
      title:'Mariages & Célébrations',
      desc:"Équipes complètes pour rendre votre événement inoubliable. Coordination du service, accueil des invités, service à table, barmans pour vos cocktails et animations.",
      profiles:['Coordinateur','Serveur','Barman','Hôtesse'],
    },
    {
      icon: <FontAwesomeIcon icon={faBuilding} style={{ width:28, height:28 }} />,
      color:'var(--svc-corporate)', bg:'var(--svc-corporate-bg)', tag:'Corporate',
      title:"Événements d'entreprise",
      desc:"Séminaires, team buildings, lancements de produit : personnel polyvalent pour assurer la logistique, l'accueil et le service de vos événements professionnels.",
      profiles:['Hôte accueil','Service','Logistique'],
    },
    {
      icon: <FontAwesomeIcon icon={faChampagneGlasses} style={{ width:28, height:28 }} />,
      color:'var(--svc-animations)', bg:'var(--svc-animations-bg)', tag:'Animations',
      title:'Cocktails & Animations',
      desc:"Barmans créatifs, animateurs dynamiques et équipes de service pour vos cocktails dinatoires, inaugurations, afterworks et soirées d'entreprise festives.",
      profiles:['Barman','Animateur','Serveur'],
    },
  ];

  /* FAQ */
  const FAQS = [
    { q:"Comment trouver un extra pour une prestation urgente ?", a:"Vous pouvez contacter notre support client au +33 7 56 82 46 36 pour toute demande urgente. Vous pouvez également publier votre prestation directement sur la plateforme. Nous nous engageons à vous répondre en moins de 10 minutes." },
    { q:"Quelles qualifications sont disponibles sur la plateforme ?", a:"Nous proposons des profils qualifiés pour tous les métiers de l'événementiel et de la restauration : serveurs, maîtres d'hôtel, barmans, baristas, mixologues, chefs de partie, cuisiniers, plongeurs, animateurs, runners et bien d'autres." },
    { q:"Comment les profils des extras sont-ils vérifiés ?", a:"Lors de leur inscription, les extras doivent fournir plusieurs documents administratifs afin de valider leur compte. Ils ne peuvent accepter aucune mission tant que leur dossier n'est pas complet ou que leurs documents ne sont plus valides." },
    { q:"Les extras sont-ils assurés ?", a:"Chaque extra doit être déclaré avec un statut professionnel conforme à la réglementation en vigueur. Nous recommandons également à tous nos prestataires de disposer d'une assurance responsabilité civile professionnelle." },
    { q:"Puis-je choisir les extras qui interviendront sur ma prestation ?", a:"Oui. Vous pouvez sélectionner vos extras favoris ou nous laisser vous recommander les profils les plus adaptés à vos besoins." },
    { q:"Que se passe-t-il si un extra annule sa mission ?", a:"Notre équipe est immédiatement alertée et met tout en œuvre pour trouver un remplaçant dans les meilleurs délais afin d'assurer la continuité de votre prestation." },
    { q:"Puis-je réserver plusieurs extras en une seule demande ?", a:"Oui. Vous pouvez réserver un ou plusieurs extras pour une même prestation, quel que soit le volume de personnel nécessaire." },
    { q:"Comment fonctionne la facturation ?", a:"Une facture est émise à l'issue de la prestation selon les conditions convenues lors de nos échanges." },
    { q:"Puis-je modifier ou annuler une prestation ?", a:"Oui. Les modifications et annulations sont possibles selon les délais prévus dans nos conditions générales." },
    { q:"Comment contacter le support ?", a:"Notre équipe est disponible par téléphone au +33 7 56 82 46 36 ou directement via le chat de la plateforme." },
    { q:"Les extras sont-ils notés après chaque mission ?", a:"Oui. Après chaque prestation, les clients peuvent évaluer les extras. Ces évaluations nous permettent de garantir un haut niveau de qualité et de recommander les meilleurs profils." },
    { q:"Quel est le délai pour trouver un extra ?", a:"Dans la majorité des cas, nous trouvons un profil en quelques minutes. Pour les demandes urgentes, notre équipe traite votre recherche en priorité et vous apporte une réponse en moins de 10 minutes." },
  ];

  return (
    <div className="lp">
      <Header />

      {/* ══════ HERO ══════ */}
      <section id="hero" className="hero">
        <div className="hero__bg-circle hero__bg-circle--1" />
        <div className="hero__bg-circle hero__bg-circle--2" />

        <div className="container">
          <div className={`hero__grid${heroReady ? ' is-ready' : ''}`}
            style={{ opacity: heroReady ? 1 : 0, transform: heroReady ? 'none' : 'translateY(22px)', transition: 'all .65s ease' }}>

            {/* Left */}
            <div>
              <div className="hero__badge">
                <span className="hero__badge-pulse" />
                Plateforme de placement d’extras auto-entrepreneurs 
              </div>
              <h1 className="hero__h1">
                <span className="hero__h1-line">Le bon talent,</span>
                <span className="hero__h1-line">au bon moment,</span>
                <span className="hero__h1-line hero__h1-accent">partout en France.</span>
              </h1>
              <p className="hero__sub">
                Staffly connecte en temps réel les entreprises avec des extras qualifiés et vérifiés.  Déposez votre prestation et recevez des candidatures en quelques minutes. 
              </p>
              <div className="hero__ctas">
                <a href="https://booklyapp.fr/#/login" target="_blank" rel="noreferrer" className="btn btn-primary btn--lg">
                  Trouver du personnel
                  <FontAwesomeIcon icon={faArrowRight} style={{ width:15, height:15 }} />
                </a>
                <button className="btn btn-ghost btn--lg" onClick={() => scrollTo('steps')}>
                  Découvrir la plateforme
                </button>
              </div>
              <div className="hero__proof">
                <div className="hero__avatars">
                  {[['SR','var(--avatar-sr)'],['MA','var(--avatar-ma)'],['JD','var(--avatar-jd)'],['KL','var(--avatar-kl)'],['PB','var(--avatar-pb)']].map(([s,c],i) => (
                    <div key={i} className="hero__av" style={{ background: c, zIndex: 5-i }}>{s}</div>
                  ))}
                </div>
                <div className="hero__proof-text">
                  <StarRow />
                  <span><strong>+1000 extras</strong> inscrits · 4.9/5 de satisfaction</span>
                </div>
              </div>
            </div>

            {/* Right — card */}
            <div className="hero__visual">
              <div className="hero__card-glow" />
              <div className="hero__card">
                <div className="hero__card-top">
                  <div className="hero__card-av">SL</div>
                  <div>
                    <span className="hero__card-name">Sophie Laurent</span>
                    <span className="hero__card-role">Barista · Barmaid · Service</span>
                  </div>
                  <div className="hero__card-status">✓ Disponible</div>
                </div>
                <div className="hero__card-sep" />
                <div className="hero__card-kpis">
                  {[{v:'4.9⭐',l:'Note'},{v:'87',l:'Prestations'},{v:'3 ans',l:'Expérience'}].map((k,i)=>(
                    <div key={i} className="hero__card-kpi">
                      <span className="hero__card-kpi-v">{k.v}</span>
                      <span className="hero__card-kpi-l">{k.l}</span>
                    </div>
                  ))}
                </div>
                <div className="hero__chips">
                  {[['Barista','var(--chip-barista)'],['Service','var(--chip-service)'],['Cocktails','var(--chip-cocktails)'],['Gala','var(--chip-gala)']].map(([l,c])=>(
                    <span key={l} className="chip" style={{background:`color-mix(in srgb, ${c} 9.4%, transparent)`,color:c,border:`1px solid color-mix(in srgb, ${c} 15.7%, transparent)`}}>{l}</span>
                  ))}
                </div>
              </div>

              <div className="hero__float hero__float--tl">
                <div className="hero__float-ic" style={{background:'var(--float-ic-ok-bg)',color:'var(--float-ic-ok-fg)'}}>✓</div>
                <div><strong>Prestation pourvue</strong><span>en 12 minutes</span></div>
              </div>
              <div className="hero__float hero__float--bl">
                <div className="hero__float-ic" style={{background:'var(--float-ic-bolt-bg)',color:'var(--float-ic-bolt-fg)'}}>⚡</div>
                <div><strong>Réponse garantie</strong><span>sous 15 minutes</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ QUALIFICATIONS TICKER ══════ */}
      <div className="ticker">
        <p className="ticker__label">Qualifications disponibles sur Staffly</p>
        <div className="ticker__track">
          {[...QUALS, ...QUALS].map(([l, c], i) => (
            <span key={i} className="chip" style={{ background: `color-mix(in srgb, ${c} 9.4%, transparent)`, color: c, border: `1px solid color-mix(in srgb, ${c} 15.7%, transparent)`, padding:'8px 18px', fontSize:13 }}>{l}</span>
          ))}
        </div>
      </div>

      {/* ══════ STATS ══════ */}
      <div className="stats" ref={statsRef}>
        <div className="container">
          <div className="stats__grid">
            {[
              {v:1000,s:'+',l:'Extras inscrits et vérifiés'},
              {v:35, s:'+',l:'Entreprises clientes'},
              {v:8590,s:'',l:'Prestations réalisées'},
              {v:98,  s:'%',l:'Taux de satisfaction client'},
            ].map((s,i)=>(
              <div key={i} className="stats__item">
                <span className="stats__num"><StatNum value={s.v} suffix={s.s} active={statsVis} /></span>
                <span className="stats__label">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════ TYPES DE PRESTATIONS ══════ */}
      <section id="prestations" className="section section--alt" ref={presRef}>
        <div className="container">
          <div className={`section-head section-head--center fade-up${presVis?' visible':''}`}>
            <p className="eyebrow">Types de prestations</p>
            <h2 className="h2">Pour chaque événement,<br/>les bons <span className="accent">profils</span></h2>
            <p className="section-lead">
              Staffly couvre l’ensemble du secteur événementiel et de la restauration. 
              <br/>
              Quels que soient vos besoins, nous avons les profils qualifiés pour votre prestation. 
            </p>
          </div>
          <div className="prestations__grid">
            {PRESTATIONS.map((p, i) => (
              <div key={i} className={`pres-card fade-up${presVis?' visible':''} delay-${(i%4)+1}`}>
                <div className="pres-card__top" style={{ background: p.bg }}>
                  <div className="pres-card__icon" style={{ color: p.color }}>{p.icon}</div>
                  <span className="pres-card__tag">{p.tag}</span>
                </div>
                <div className="pres-card__body">
                  <h3 className="pres-card__title">{p.title}</h3>
                  <p className="pres-card__desc">{p.desc}</p>
                  <div className="pres-card__profiles">
                    {p.profiles.map(pr => (
                      <span key={pr} className="chip" style={{background:`color-mix(in srgb, ${p.color} 8%, transparent)`,color:p.color,border:`1px solid color-mix(in srgb, ${p.color} 13.3%, transparent)`,fontSize:11,padding:'3px 10px'}}>{pr}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WHY Staffly (Features) ══════ */}
      <section className="section section--alt" ref={featRef}>
        <div className="container">
          <div className={`section-head section-head--center fade-up${featVis?' visible':''}`}>
            <p className="eyebrow">Pourquoi Staffly</p>
            <h2 className="h2">La plateforme pensée pour<br/>les <span className="accent">professionnels</span> de l'événement</h2>
          </div>
          <div className="features__grid">
            {[
              {
                color:'var(--feat-1)', bg:'var(--feat-1-bg)',
                icon:<FontAwesomeIcon icon={faCircleCheck} style={{ width:22, height:22, color:'var(--feat-1)' }} />,
                title:'Profils 100% vérifiés',
                desc:"Chaque extra passe par notre processus de validation complet : identité, documents professionnels, références et entretien. Aucun profil non conforme n'apparaît dans vos recherches.",
              },
              {
                color:'var(--feat-2)', bg:'var(--feat-2-bg)',
                icon:<FontAwesomeIcon icon={faClock} style={{ width:22, height:22, color:'var(--feat-2)' }} />,
                title:'Réactivité en temps réel',
                desc:'Déposez votre prestation et recevez des candidatures en quelques minutes. Notre algorithme de matching géolocalise et notifie instantanément les extras correspondant à votre besoin.',
              },
              {
                color:'var(--feat-3)', bg:'var(--feat-3-bg)',
                icon:<FontAwesomeIcon icon={faCalendarDays} style={{ width:22, height:22, color:'var(--feat-3)' }} />,
                title:'Gestion simplifiée',
                desc:'Planning, suivi des candidatures, validation du staffing, évaluations post-prestation : tout est centralisé dans un tableau de bord intuitif.',
              },
              {
                color:'var(--feat-4)', bg:'var(--feat-4-bg)',
                icon:<FontAwesomeIcon icon={faStar} style={{ width:22, height:22, color:'var(--feat-4)' }} />,
                title:'Système de notation',
                desc:"Après chaque prestation, nous permettons aux clients d’évaluer les extras avec qui nous les avons mis en relation. Ce système garantit la qualité des profils et la fiabilité des partenaires sur la durée. ",
              },
              {
                color:'var(--feat-5)', bg:'var(--feat-5-bg)',
                icon:<FontAwesomeIcon icon={faShieldHalved} style={{ width:22, height:22, color:'var(--feat-5)' }} />,
                title:'Sécurité juridique',
                desc:'Staffly vérifie la conformité de chaque extra (documents légaux, assurance, documents d’identité) ',
              },
              {
                color:'var(--feat-6)', bg:'var(--feat-6-bg)',
                icon:<FontAwesomeIcon icon={faHeadset} style={{ width:22, height:22, color:'var(--feat-6)' }} />,
                title:'Support dédié',
                desc:'Notre équipe accompagne chaque client et chaque extra. Chat en ligne, assistance téléphonique et suivi personnalisé pour que chaque prestation soit un succès.',
              },
            ].map((f,i) => (
              <div key={i} className={`feat fade-up${featVis?' visible':''} delay-${(i%3)+1}`}>
                <div className="feat__icon" style={{ background: f.bg }}>{f.icon}</div>
                <h3 className="feat__title">{f.title}</h3>
                <p className="feat__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ HOW IT WORKS ══════ */}
      <section id="steps" className="section section--alt" ref={stepsRef}>
        <div className="container">
          <div className={`section-head section-head--center fade-up${stepsVis?' visible':''}`}>
            <p className="eyebrow">Fonctionnement</p>
            <h2 className="h2">
            De la création de vos accès Staffly à <br/> votre <span className="accent">évènement</span> en 6 étapes 
            </h2>
            <p className="section-lead">
              Un processus clair et rapide, du premier contact jusqu’à la fin de la prestation
            </p>
          </div>
          <div className={`steps-timeline fade-up${stepsVis?' visible':''}`} style={{transitionDelay:'.1s'}}>
            {[
              { n:1, title:'PREMIER CONTACT CLIENT', desc:'Appel téléphonique pour comprendre les besoins, définir les tarifs et mettre en place l’organisation. ' },
              { n:2, title:'PLATEFORME STAFFLY ', desc:"Création d'un compte administrateur client sur la plateforme Staffly Agency (accessible sur ordinateur et téléphone)." },
              { n:3, title:'DEMANDE D’EXTRAS ', desc:'Le client dépose sa demande d’évènement en moins d’une minute sur la plateforme' },
              { n:4, title:'RECEPTION DE LA DEMANDE ', desc:"Staffly Agency sélectionne le ou les extra(s) auto-entrepreneurs adapté(s) au type d'événement demandé." },
              { n:5, title:"VALIDATION DE L'EXTRA", desc:"L'extra répondra en moins de 10 minutes. Une fois la mission validée par l'extra, vous recevrez ses coordonnées. " },
              { n:6, title:'MISSION VALIDÉE !', desc:"En moins de 15 minutes via l'application, la prestation est bookée et la brigade d'extras est validée. " },
            ].map((s, i) => (
              <div key={i} className="step-tl">
                <div className="step-tl__dot">{s.n}</div>
                <h3 className="step-tl__title">{s.title}</h3>
                <p className="step-tl__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ NUMBERS (Client side) ══════ */}
      <section className="section section--alt" ref={numRef}>
        <div className="container">
          <div className={`numbers fade-up${numVis?' visible':''}`}>
            <div className="numbers__visual">
              <div className="numbers__big-card">
                <div className="numbers__big-num">8560+</div>
                <div className="numbers__big-label">Prestations réalisées avec succès</div>
                <div className="numbers__mini-cards">
                  {[{v:'98%',l:'Prestations pourvues'},{v:'12 min',l:'Temps de réponse moyen'},{v:'4.5/5',l:'Note moyenne extras'},{v:'35+',l:'Clients actifs'}].map((m,i)=>(
                    <div key={i} className="numbers__mini">
                      <div className="numbers__mini-v">{m.v}</div>
                      <div className="numbers__mini-l">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="numbers__content">
              <p className="eyebrow">En chiffres</p>
              <h2 className="h2">Staffly, la référence du staffing <span className="accent">événementiel</span></h2>
              <p className="section-lead">Nos clients font confiance à Staffly pour leur prestation. Voici pourquoi. </p>
              <ul className="numbers__list">
                {[
                  'Plus de 1000 extras actifs en Ile de France  ',
                  '98% des prestations sont pourvus en moins de 24 heures',
                   'Un service client disponible 7j/7h, 24h/24h',
                    'Une réactivité inégalée pour les urgences de dernière minute'  
                ].map((t,i)=>(
                  <li key={i} className="numbers__li">
                    <div className="numbers__li-icon">
      <FontAwesomeIcon icon={faCircleCheck} style={{ width:10, height:10, color:'var(--white)' }} />
                    </div>
                    {t}
                  </li>
                ))}
              </ul>
              <a href="https://booklyapp.fr/#/inscription/client" target="_blank" rel="noreferrer" className="btn btn-primary">Créer un compte gratuitement</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FOR WHO ══════ */}
      <section id="services" className="section section--alt" ref={fwRef}>
        <div className="container">
          <div className={`section-head section-head--center fade-up${fwVis?' visible':''}`}>
            <p className="eyebrow">Pour qui ?</p>
            <h2 className="h2">Une plateforme,<br/><span className="accent">deux univers</span></h2>
          </div>
          <div className={`forwho fade-up${fwVis?' visible':''}`} style={{transitionDelay:'.1s'}}>
            <div className="forwho__card forwho__card--light">
              <span className="forwho__chip" style={{background:'var(--p)',color:'var(--white)'}}>Entreprises & Clients</span>
              <h3 className="forwho__h3" style={{color:'var(--text)'}}>Renforcez vos équipes à la demande</h3>
              <p className="forwho__p" style={{color:'var(--muted)'}}>Accédez à un vivier de profils vérifiés, disponibles en temps réel dans votre ville. Créez votre prestation en 2 minutes et recevez des candidatures qualifiées sans effort.</p>
              <ul className="forwho__list">
                {['Profils vérifiés par notre équipe','Disponibilité en temps réel dans votre zone','Gestion administrative et facturation simplifiée','Suivi des prestations et évaluations croisées','Historique complet des collaborations'].map((t,i)=>(
                  <li key={i} className="forwho__li"><CheckIcon color="var(--p)" /><span style={{color:'var(--text)'}}>{t}</span></li>
                ))}
              </ul>
              <a href="https://booklyapp.fr/#/inscription/client" target="_blank" rel="noreferrer" className="btn btn-primary">Créer un compte client <FontAwesomeIcon icon={faArrowRight} style={{ width:14, height:14 }} /></a>
              <div className="forwho__bg-circle" style={{background:'var(--p)'}} />
            </div>
            <div className="forwho__card forwho__card--dark">
              <span className="forwho__chip" style={{background:'var(--p-rgba-28)',color:'var(--accent-orange-light)'}}>EXTRAS & AUTO ENTREPRENEURS </span>
              <h3 className="forwho__h3" style={{color:'var(--white)'}}>Des prestations qui correspondent à votre profil</h3>
              <p className="forwho__p" style={{color:'var(--white-rgba-55)'}}>Gérez vos indisponibilités, recevez des offres ciblées selon vos qualifications, construisez votre réputation et augmentez vos revenus en toute flexibilité.</p>
              <ul className="forwho__list">
                {['Prestations géolocalisées près de chez vous','Disponible par défaut — marquez juste vos indisponibilités','Paiement rapide et suivi de facturation intégré','Accès prioritaire aux prestations urgentes'].map((t,i)=>(
                  <li key={i} className="forwho__li"><CheckIcon color="var(--accent-orange-deep)" /><span style={{color:'var(--white-rgba-82)'}}>{t}</span></li>
                ))}
              </ul>
              <a href="https://booklyapp.fr/#/inscription/extra" target="_blank" rel="noreferrer" className="btn btn-primary" style={{background:'linear-gradient(135deg,var(--accent-orange-deep),var(--accent-orange-soft))'}}>Devenir extra <FontAwesomeIcon icon={faArrowRight} style={{ width:14, height:14 }} /></a>
              <div className="forwho__bg-circle" style={{background:'var(--white)'}} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="section section--alt" ref={testiRef}>
        <div className="container">
          <div className={`section-head section-head--center fade-up${testiVis?' visible':''}`}>
            <p className="eyebrow">Témoignages</p>
            <h2 className="h2">Ils font confiance à <span className="accent">Staffly</span></h2>
          </div>
          <div className="testis">
            {[
              { q:'"', text:"Staffly a transformé notre façon de recruter pour nos galas. En moins de 20 minutes, j'avais confirmé une équipe complète de 8 serveurs et un sommelier pour notre dîner de prestige de 300 couverts.", name:'Marie Dupont', role:'Responsable événementiel · Agence Luxe Paris', init:'MD', stars:5 },
              { text:"En tant qu'extra barista, j'avais besoin d'une plateforme fiable qui respecte mes disponibilités. Staffly m'a permis de multiplier mes prestations tout en gardant un contrôle total sur mon planning. La gestion des indisponibilités est très intuitive.", name:'Karim Bensalem', role:'Barista & Barman freelance · Lyon', init:'KB', stars:5 },
              { text:"La transparence sur les profils, le système d'évaluation croisée, la rapidité de traitement des urgences… Staffly est devenu l'outil central de notre agence événementielle. Le ROI est immédiat.", name:'Lucie Martin', role:'Directrice · Events & Co Bordeaux', init:'LM', stars:5 },
            ].map((t, i) => (
              <div key={i} className={`testi fade-up${testiVis?' visible':''} delay-${i+1}`}>
                <div className="testi__stars">{Array(t.stars).fill(null).map((_,k)=><FontAwesomeIcon key={k} icon={faStar} style={{ width:14, height:14, color:'var(--rating-star)' }} />)}</div>
                <div className="testi__quote">"</div>
                <p className="testi__text">{t.text}</p>
                <div className="testi__author">
                  <div className="testi__av">{t.init}</div>
                  <div>
                    <div className="testi__name">{t.name}</div>
                    <div className="testi__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="section section--alt" ref={faqRef}>
        <div className="container">
          <div className={`section-head section-head--center fade-up${faqVis?' visible':''}`}>
            <p className="eyebrow">FAQ</p>
            <h2 className="h2">Questions fréquentes</h2>
            <p className="section-lead">Tout ce que vous devez savoir sur Staffly avant de commencer.</p>
          </div>
          <div className={`faq fade-up${faqVis?' visible':''}`} style={{transitionDelay:'.1s'}}>
            {FAQS.map((f, i) => (
              <div key={i} className={`faq__item${openFaq===i?' open':''}`}>
                <button className="faq__q" onClick={() => setOpenFaq(openFaq===i ? null : i)}>
                  {f.q}
                  <span className="faq__icon">
                    <FontAwesomeIcon icon={faPlus} style={{ width:12, height:12 }} />
                  </span>
                </button>
                <div className="faq__a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA BAND ══════ */}
      <section className="cta-band" ref={ctaRef}>
        <div className={`container cta-band__inner fade-up${ctaVis?' visible':''}`}>
          <h2 className="cta-band__h2">Prêt à faciliter<br/> votre recherches d’extras ? </h2>
          <p className="cta-band__p">Rejoignez notre plateforme de clients et d’extras qui font confiance à Staffly. Inscription gratuite et sans engagement. </p>
          <div className="cta-band__btns">
            <a href="https://booklyapp.fr/#/login" target="_blank" rel="noreferrer" className="btn btn-primary btn--lg">Démarrer gratuitement <FontAwesomeIcon icon={faArrowRight} style={{ width:15, height:15 }} /></a>
            <button className="btn btn-dark btn--lg" onClick={() => scrollTo('contact')}>Nous contacter</button>
          </div>
        </div>
      </section>

      {/* ══════ CONTACT ══════ */}
      <section id="contact" className="section contact-section" ref={contactRef}>
        <div className="container">
          <div className={`section-head section-head--center fade-up${contactVis?' visible':''}`}>
            <p className="eyebrow">Contact</p>
            <h2 className="h2">Parlons de votre <span className="accent">projet</span></h2>
            
          </div>

          <div className={`contact-grid fade-up${contactVis?' visible':''}`} style={{transitionDelay:'.1s'}}>

            {/* ── Left col ── */}
            <div className="contact-left">

              {/* Info cards */}
              <div className="contact-cards">
                <a href="tel:+33756824636" className="contact-card">
                  <div className="contact-card__icon contact-card__icon--phone">
                    <FontAwesomeIcon icon={faPhone} style={{ width:20, height:20 }} />
                  </div>
                  <div className="contact-card__body">
                    <span className="contact-card__label">Téléphone</span>
                    <span className="contact-card__value"> +33 7 56 82 46 36 </span>
                    <span className="contact-card__hint">7j/j ; 24h/24 </span>
                  </div>
                  <FontAwesomeIcon icon={faArrowRight} className="contact-card__arrow" style={{ width:14, height:14 }} />
                </a>

                <a href="mailto:lesly@stafflyagency.com" className="contact-card">
                  <div className="contact-card__icon contact-card__icon--mail">
                    <FontAwesomeIcon icon={faEnvelope} style={{ width:20, height:20 }} />
                  </div>
                  <div className="contact-card__body">
                    <span className="contact-card__label">Email</span>
                    <span className="contact-card__value">lesly@stafflyagency.com </span>
                    <span className="contact-card__hint">Réponse en mois de 12h </span>
                  </div>
                  <FontAwesomeIcon icon={faArrowRight} className="contact-card__arrow" style={{ width:14, height:14 }} />
                </a>

                <div className="contact-card contact-card--static">
                  <div className="contact-card__icon contact-card__icon--map">
                    <FontAwesomeIcon icon={faLocationDot} style={{ width:20, height:20 }} />
                  </div>
                  <div className="contact-card__body">
                    <span className="contact-card__label">Localisation</span>
                    <span className="contact-card__value">Paris, Île-de-France</span>
                    <span className="contact-card__hint">France</span>
                  </div>
                </div>
              </div>

              {/* Availability badge */}
              <div className="contact-availability">
                <span className="contact-availability__dot" />
                <div>
                  <strong>Support urgence disponible 7j/7</strong>
                  <span>Pour les prestations de dernière minute</span>
                </div>
              </div>
            </div>

            {/* ── Right col — Form ── */}
            <div className="contact-form-wrap">
              <div className="contact-form-header">
                <h3 className="contact-form-header__title">Envoyez-nous un message</h3>
                <p className="contact-form-header__sub">Nous vous répondons personnellement sous 24h.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label>Nom complet <span className="req">*</span></label>
                    <input type="text" required placeholder="Jean Dupont"
                      value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} />
                  </div>
                  <div className="form-field">
                    <label>Adresse email <span className="req">*</span></label>
                    <input type="email" required placeholder="jean@entreprise.com"
                      value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Je suis</label>
                    <select value={form.type} onChange={e=>setForm(p=>({...p,type:e.target.value}))}>
                      <option value="client">Client / Entreprise</option>
                      <option value="extra">Extra / Freelance</option>
                      <option value="partner">Partenaire</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label>Sujet <span className="req">*</span></label>
                    <input type="text" required placeholder="Objet de votre message"
                      value={form.subject} onChange={e=>setForm(p=>({...p,subject:e.target.value}))} />
                  </div>
                </div>

                <div className="form-field">
                  <label>Message <span className="req">*</span></label>
                  <textarea required rows={5}
                    placeholder="Décrivez votre projet, vos besoins ou votre question en détail…"
                    value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))} />
                </div>

                {formStatus === 'ok' && (
                  <div className="form-success">
                    <FontAwesomeIcon icon={faCircleCheck} style={{ width:16, height:16 }} />
                    Message envoyé avec succès ! Nous vous répondons sous 24h ouvrées.
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="form-error">
                    Une erreur est survenue. Réessayez ou contactez-nous directement par email.
                  </div>
                )}

                <button type="submit" className="btn btn-primary contact-submit" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending'
                    ? <><span className="lp-spinner" /> Envoi en cours…</>
                    : <><FontAwesomeIcon icon={faPaperPlane} style={{ width:15, height:15 }} /> Envoyer le message</>
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <div className="footer__logo">Staff<em>ly</em></div>
              <p className="footer__tagline">La plateforme de placement d’auto-entrepreuneurs qui connecte entreprise et extras qualifiés. </p>
              
            </div>
            <div>
              <p className="footer__col-title">Navigation</p>
              {[['hero','Accueil'],['prestations','Prestations'],['steps','Fonctionnement'],['services','Services'],['contact','Contact']].map(([id,l])=>(
                <button key={id} className="footer__link" onClick={()=>scrollTo(id)}>{l}</button>
              ))}
            </div>
            <div>
              <p className="footer__col-title">Compte</p>
              <a href="https://booklyapp.fr/" target="_blank" rel="noreferrer"             className="footer__link">Connexion</a>
              <a href="https://booklyapp.fr/" target="_blank" rel="noreferrer" className="footer__link">Espace client</a>
              <a href="https://booklyapp.fr/" target="_blank" rel="noreferrer"  className="footer__link">Espace extra</a>
            </div>
            <div>
              <p className="footer__col-title">Contact & Légal</p>
              <a href="tel:+33756824636"              className="footer__link">+33 7 56 82 46 36</a>
              <a href="mailto: lesly@stafflyagency.com" className="footer__link"> lesly@stafflyagency.com </a>
              <span className="footer__link" style={{cursor:'default'}}>Paris, France</span>
              <div style={{marginTop:8}}>
                <a href="https://booklyapp.fr/" target="_blank" rel="noreferrer"  className="footer__link">Confidentialité</a>
                <a href="https://booklyapp.fr/" target="_blank" rel="noreferrer"    className="footer__link">CGU</a>
                <a href="https://booklyapp.fr/" target="_blank" rel="noreferrer" className="footer__link">Mentions légales</a>
              </div>
            </div>
          </div>
          <div className="footer__sep" />
          <div className="footer__bottom">
            <span className="footer__copy">© {new Date().getFullYear()} <a href="https://cleverix.ma/" target="_blank" rel="noreferrer" style={{color:'inherit',textDecoration:'underline'}}>Cleverix</a> · Tous droits réservés · Paris, France</span>
            <div className="footer__legal">
<span style={{fontSize:'12.5px',color:'var(--white-rgba-28)',display:'flex',alignItems:'center',gap:6}}>
<span style={{width:6,height:6,borderRadius:'50%',background:'var(--success)',display:'inline-block'}}/>
                Tous les systèmes opérationnels
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}