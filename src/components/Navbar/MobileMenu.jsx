import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineX, HiChevronDown, HiOutlinePhone } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import nav from '../../data/navigation.json';
import styles from './MobileMenu.module.css';

export default function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (to) => (e) => {
    e.preventDefault();
    onClose();
    if (location.pathname === '/') {
      setTimeout(() => document.getElementById(to)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 250);
    } else {
      navigate('/', { state: { scrollTo: to } });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className={styles.drawer}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.drawerHeader}>
              <span className={styles.drawerTitle}>Menu</span>
              <button type="button" onClick={onClose} aria-label="Close menu" className={styles.closeBtn}>
                <HiOutlineX size={24} />
              </button>
            </div>

            <nav className={styles.drawerNav}>
              {nav.items.map((item) => {
                if (item.type === 'route') {
                  return (
                    <Link key={item.label} to={item.to} onClick={onClose} className={styles.drawerLink}>
                      {item.label}
                    </Link>
                  );
                }
                if (item.type === 'scroll') {
                  return (
                    <a key={item.label} href={`#${item.to}`} onClick={handleScroll(item.to)} className={styles.drawerLink}>
                      {item.label}
                    </a>
                  );
                }
                if (item.type === 'dropdown') {
                  const isOpen = expanded === item.label;
                  return (
                    <div key={item.label} className={styles.drawerGroup}>
                      <button
                        type="button"
                        className={styles.drawerLink}
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                      >
                        {item.label}
                        <HiChevronDown className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} size={16} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className={styles.drawerSub}
                          >
                            {item.children.map((child) => (
                              child.type === 'route' ? (
                                <Link key={child.label} to={child.to} onClick={onClose}>
                                  {child.label}
                                </Link>
                              ) : (
                                <a key={child.label} href={`#${child.to}`} onClick={handleScroll(child.to)}>
                                  {child.label}
                                </a>
                              )
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return null;
              })}
            </nav>

            <div className={styles.drawerFooter}>
              <a href={`tel:${nav.phone.replace(/\s/g, '')}`} className={styles.drawerPhone}>
                <HiOutlinePhone size={16} /> {nav.phoneDisplay}
              </a>
              <a
                href={`#${nav.donateCta.to}`}
                className="btn btn-accent"
                onClick={handleScroll(nav.donateCta.to)}
                style={{ width: '100%' }}
              >
                {nav.donateCta.label}
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
