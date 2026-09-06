import { useEffect, useState } from 'react';
import { HiArrowUp } from 'react-icons/hi';
import styles from './BackToTop.module.css';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`${styles.btn} ${visible ? styles.show : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <HiArrowUp size={20} />
    </button>
  );
}
