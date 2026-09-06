import packages from '../../data/packages.json';
import styles from './PackagesPreview.module.css';

export default function PackagesPreview() {
  const goEnquire = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="packages" className="section section-alt">
      <div className="container">
        <p className="section-label">Health Packages</p>
        <h2 className="section-heading">Preventive checkups that catch cancer early</h2>
        <p className="section-subheading">{packages.note}</p>

        <div className={styles.grid}>
          {packages.plans.map((plan, i) => (
            <div key={plan.slug} className={styles.card} data-aos="fade-up" data-aos-delay={i * 60}>
              <div className={styles.header}>
                <span className={styles.audience}>{plan.audience}</span>
                <h3 className={styles.name}>{plan.name}</h3>
                <p className={styles.price}>{plan.price}</p>
              </div>
              <ul className={styles.tests}>
                {plan.tests.slice(0, 6).map((t) => <li key={t}>{t}</li>)}
                {plan.tests.length > 6 && <li className={styles.more}>+{plan.tests.length - 6} more tests</li>}
              </ul>
              <a href="#contact" onClick={goEnquire} className="btn btn-outline" style={{ width: '100%' }}>
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
