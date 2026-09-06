import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import hero from '../../data/hero.json';
import styles from './Hero.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.12 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const goTo = (target) => (e) => {
    e.preventDefault();
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgLayer} style={{ backgroundImage: `url(${hero.backgroundImage})` }} />
      <div className={styles.overlay} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <motion.p className={styles.eyebrow} variants={fadeUp} initial="hidden" animate="show" custom={0}>
            {hero.eyebrow}
          </motion.p>
          <motion.h1 className={styles.title} variants={fadeUp} initial="hidden" animate="show" custom={1}>
            {hero.heading}
          </motion.h1>
          <motion.p className={styles.subtitle} variants={fadeUp} initial="hidden" animate="show" custom={2}>
            {hero.subheading}
          </motion.p>
          <motion.p className={styles.description} variants={fadeUp} initial="hidden" animate="show" custom={3}>
            {hero.description}
          </motion.p>
          <motion.div className={styles.ctaRow} variants={fadeUp} initial="hidden" animate="show" custom={4}>
            {hero.ctaButtons.map((btn) => (
              <a
                key={btn.label}
                href={`#${btn.target}`}
                onClick={goTo(btn.target)}
                className={`btn ${btn.type === 'primary' ? 'btn-primary' : 'btn-outline-light'}`}
              >
                {btn.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        className={styles.scrollIndicator}
        onClick={goTo('quick-actions')}
        aria-label="Scroll to next section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <HiChevronDown size={24} />
      </motion.button>
    </section>
  );
}
