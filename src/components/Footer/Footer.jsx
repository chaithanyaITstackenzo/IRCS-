import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import footer from '../../data/footer.json';
import contact from '../../data/contact.json';
import styles from './Footer.module.css';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (to) => (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById(to)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: to } });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <div className={styles.logoRow}>
            <span className={styles.logoMark}>IRCS</span>
            <span className={styles.logoText}>Cancer Hospital</span>
          </div>
          <p className={styles.description}>{footer.description}</p>
          <p className={styles.tagline}>{footer.tagline}</p>
          <div className={styles.social}>
            <a href={contact.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href={contact.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href={contact.social.youtube} aria-label="Youtube" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>

        <div>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul className={styles.linkList}>
            {footer.quickLinks.map((link) => (
              <li key={link.label}>
                {link.to.startsWith('/') ? (
                  <Link to={link.to}>{link.label}</Link>
                ) : (
                  <a href={`#${link.to}`} onClick={handleScroll(link.to)}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Departments</h3>
          <ul className={styles.linkList}>
            {footer.departmentLinks.map((name) => (
              <li key={name}>
                <a href="#departments" onClick={handleScroll('departments')}>{name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Contact</h3>
          <address className={styles.address}>
            {contact.address.map((line) => <span key={line}>{line}</span>)}
          </address>
          {contact.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className={styles.contactLine}>{p}</a>
          ))}
          <a href={`mailto:${contact.email}`} className={styles.contactLine}>{contact.email}</a>
          <div className={styles.hours}>
            {contact.hours.map((h) => (
              <span key={h.days}>{h.days}: {h.time}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className="container">
          &copy; {new Date().getFullYear()} IRCS Cancer Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
