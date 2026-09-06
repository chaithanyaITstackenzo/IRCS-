import nursing from '../../data/nursing.json';
import styles from './NursingCare.module.css';

export default function NursingCare() {
  return (
    <section className="section section-alt">
      <div className={`container ${styles.grid}`}>
        <div data-aos="fade-right">
          <img src={nursing.image} alt="Nursing care at IRCS Cancer Hospital" className={styles.image} loading="lazy" />
        </div>
        <div data-aos="fade-left">
          <p className="section-label">Our Nursing Care</p>
          <h2 className="section-heading">{nursing.heading}</h2>
          {nursing.paragraphs.map((p, i) => <p key={i} className={styles.paragraph}>{p}</p>)}
          <div className={styles.pillars}>
            {nursing.pillars.map((p) => <span key={p} className={styles.pillar}>{p}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
