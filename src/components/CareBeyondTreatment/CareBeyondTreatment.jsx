import care from '../../data/careBeyondTreatment.json';
import styles from './CareBeyondTreatment.module.css';

export default function CareBeyondTreatment() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Care Beyond Treatment</p>
        <h2 className="section-heading">Support that reaches beyond medicine</h2>

        <div className={styles.grid}>
          {care.map((item, i) => (
            <div key={item.title} className={styles.card} data-aos="fade-up" data-aos-delay={i * 80}>
              <img src={item.image} alt={item.title} className={styles.image} loading="lazy" />
              <div className={styles.overlay} />
              <div className={styles.body}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
