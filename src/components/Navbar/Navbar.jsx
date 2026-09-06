import { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlinePhone, HiChevronDown, HiOutlineMenu } from 'react-icons/hi';
import nav from '../../data/navigation.json';
import MobileMenu from './MobileMenu';
import styles from './Navbar.module.css';

function NavLinkItem({ item, onNavigate }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleScroll = (to) => (e) => {
    e.preventDefault();
    onNavigate?.();
    if (location.pathname === '/') {
      document.getElementById(to)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: to } });
    }
  };

  if (item.type === 'route') {
    return <Link to={item.to} onClick={onNavigate}>{item.label}</Link>;
  }

  if (item.type === 'scroll') {
    return <a href={`#${item.to}`} onClick={handleScroll(item.to)}>{item.label}</a>;
  }

  if (item.type === 'dropdown') {
    return (
      <div
        className={styles.dropdownWrap}
        onMouseEnter={() => { clearTimeout(closeTimer.current); setOpen(true); }}
        onMouseLeave={() => { closeTimer.current = setTimeout(() => setOpen(false), 150); }}
      >
        <button
          type="button"
          className={styles.dropdownTrigger}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {item.label} <HiChevronDown size={14} />
        </button>
        {open && (
          <div className={styles.dropdownPanel} role="menu">
            {item.children.map((child) => (
              child.type === 'route' ? (
                <Link key={child.label} to={child.to} role="menuitem" onClick={onNavigate}>
                  {child.label}
                </Link>
              ) : (
                <a
                key={child.label}
                href={`#${child.to}`}
                role="menuitem"
                onClick={handleScroll(child.to)}
              >
                {child.label}
                </a>
              )
            ))}
          </div>
        )}
      </div>
    );
  }
  return null;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleDonate = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === '/') {
      document.getElementById(nav.donateCta.to)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: nav.donateCta.to } });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <a href={`tel:${nav.phone.replace(/\s/g, '')}`} className={styles.topBarPhone}>
            <HiOutlinePhone size={14} /> {nav.phoneDisplay}
          </a>
          <span className={styles.topBarHours}>OP Consultation: Mon&ndash;Sat, 10 AM&ndash;5 PM</span>
        </div>
      </div>

      <nav className={`container ${styles.mainNav}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}>IRCS</span>
          <span className={styles.logoText}>Cancer Hospital</span>
        </Link>

        <div className={styles.desktopLinks}>
          {nav.items.map((item) => (
            <NavLinkItem key={item.label} item={item} />
          ))}
        </div>

        <div className={styles.actions}>
          <a href={`#${nav.donateCta.to}`} className="btn btn-accent" onClick={handleDonate}>
            {nav.donateCta.label}
          </a>
          <button
            type="button"
            className={styles.burger}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <HiOutlineMenu size={26} />
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
