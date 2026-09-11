export default function Footer() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <> 
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <div className="footer__logo">Staff<em>ly</em></div>
              <p className="footer__tagline">La plateforme de placement d’auto-entrepreneurs qui connecte entreprise et extras qualifiés.</p>
            </div>
            <div>
              <p className="footer__col-title">Navigation</p>
              {[['hero','Accueil'],['prestations','Prestations'],['steps','Fonctionnement'],['services','Services'],['contact','Contact']].map(([id,l])=>(
                <button key={id} className="footer__link" onClick={()=>scrollTo(id)}>{l}</button>
              ))}
            </div>
            <div>
              <p className="footer__col-title">Compte</p>
              <a href="https://booklyapp.fr/#/login" target="_blank" rel="noreferrer" className="footer__link">Connexion</a>
              <a href="https://booklyapp.fr/#/login" target="_blank" rel="noreferrer" className="footer__link">Espace client</a>
              <a href="https://booklyapp.fr/#/login" target="_blank" rel="noreferrer" className="footer__link">Espace extra</a>
            </div>
            <div>
              <p className="footer__col-title">Contact & Légal</p>
              <a href="tel:+33698946264" className="footer__link">+33 6 98 94 62 64</a>
              <a href="mailto:nelson@stafflyagency.com" className="footer__link">nelson@stafflyagency.com</a>
              <span className="footer__link" style={{cursor:'default'}}>Paris, France</span>
              <div style={{marginTop:8}}>
                <a href="#/cookies" className="footer__link">Politique de cookies</a>
                <a href="#/mentions" className="footer__link">Mentions légales</a>
                <a href="#/cgv" className="footer__link">CGV</a>
                <a href="#/cga" className="footer__link">CGA</a>
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
    </>
  );
}