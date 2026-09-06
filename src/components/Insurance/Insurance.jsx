import { HiOutlineCheckCircle } from 'react-icons/hi';
import insurance from '../../data/insurance.json';
import styles from './Insurance.module.css';

export default function Insurance() {
  return (
    <section id="insurance" className="section section-alt">
      <div className={`container ${styles.grid}`}>
        <div data-aos="fade-right">
          <p className="section-label">Insurance & Schemes</p>
          <h2 className="section-heading">{insurance.heading}</h2>
          <p className={styles.intro}>{insurance.intro}</p>
          <ul className={styles.highlights}>
            {insurance.highlights.map((h) => (
              <li key={h}><HiOutlineCheckCircle className={styles.check} /> {h}</li>
            ))}
          </ul>
        </div>
        <div className={styles.schemeList} data-aos="fade-left">
          {insurance.schemes.map((s) => (
            <div key={s.name} className={styles.schemeCard}>
              <h3 className={styles.schemeName}>{s.name}</h3>
              <p className={styles.schemeDesc}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
