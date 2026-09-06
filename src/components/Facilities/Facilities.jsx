import facilities from '../../data/facilities.json';
import styles from './Facilities.module.css';

export default function Facilities() {
  return (
    <section id="facilities" className="section">
      <div className="container">
        <p className="section-label">Clinical Facilities</p>
        <h2 className="section-heading">State-of-the-art technology and equipment</h2>
        <p className="section-subheading">{facilities.intro}</p>

        <div className={styles.grid}>
          {facilities.equipment.map((eq, i) => (
            <div key={eq.name} className={styles.card} data-aos="fade-up" data-aos-delay={(i % 4) * 60}>
              <div className={styles.imageWrap}>
                <img src={eq.image} alt={eq.name} loading="lazy" className={styles.image} />
              </div>
              <h3 className={styles.name}>{eq.name}</h3>
              <p className={styles.desc}>{eq.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
