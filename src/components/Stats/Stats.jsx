import countUpModule from 'react-countup';
import stats from '../../data/stats.json';
import styles from './Stats.module.css';

const CountUp = countUpModule.default;

export default function Stats() {
  return (
    <section id="stats" className="section">
      <div className="container">
        <p className="section-label">Facilities at a Glance</p>
        <h2 className="section-heading">Critical care, ready around the clock</h2>

        <div className={styles.icuGrid}>
          {stats.icu.map((unit) => (
            <div key={unit.name} className={styles.icuCard} data-aos="fade-up">
              <img src={unit.image} alt={unit.name} className={styles.icuImage} loading="lazy" />
              <div className={styles.icuBody}>
                <h3 className={styles.icuName}>{unit.name}</h3>
                <div className={styles.metricsRow}>
                  {unit.metrics.map((m) => (
                    <div key={m.label} className={styles.metric}>
                      <span className={styles.metricValue}><CountUp end={m.value} duration={1.6} enableScrollSpy scrollSpyOnce /></span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.staffGrid} data-aos="fade-up">
          {stats.staff.map((s) => (
            <div key={s.label} className={styles.staffItem}>
              <span className={styles.staffValue}><CountUp end={s.value} duration={1.6} enableScrollSpy scrollSpyOnce /></span>
              <span className={styles.staffLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
