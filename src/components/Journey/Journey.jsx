import journey from '../../data/journey.json';
import styles from './Journey.module.css';

export default function Journey() {
  return (
    <section id="journey" className="section section-alt">
      <div className="container">
        <p className="section-label">Our Journey</p>
        <h2 className="section-heading">Nearly 25 years of care, one milestone at a time</h2>

        <div className={styles.timeline}>
          {journey.map((step, i) => (
            <div key={step.year} className={styles.item} data-aos="fade-up" data-aos-delay={i * 60}>
              <div className={styles.marker}>
                <span className={styles.dot} />
                {i < journey.length - 1 && <span className={styles.line} />}
              </div>
              <div className={styles.content}>
                <span className={styles.year}>{step.year}</span>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.desc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
