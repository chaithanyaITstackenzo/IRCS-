import { Link } from 'react-router-dom';
import departments from '../../data/departments.json';
import styles from './Departments.module.css';

const fallbackImage = 'https://ircscancerhospital.org/wp-content/uploads/2024/07/10speechlecture915-1024x731.jpg';

export default function Departments() {
  return (
    <section id="departments" className="section section-alt">
      <div className="container">
        <p className="section-label">Our Departments</p>
        <h2 className="section-heading">Six departments, one coordinated cancer care team</h2>
        <p className="section-subheading">
          Every department works together on a shared treatment plan for each patient &mdash; from diagnosis through surgery, radiation and follow-up care.
        </p>

        <div className={styles.grid}>
          {departments.map((dept, i) => {
            return (
              <div
                key={dept.slug}
                id={dept.slug}
                className={`${styles.card} ${i % 5 === 0 ? styles.wide : ''}`}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 60}
              >
                <div className={styles.cardTop}>
                  <img src={dept.image || fallbackImage} alt={dept.name} className={styles.image} loading="lazy" />
                  <div className={styles.cardBody}>
                    <h3 className={styles.name}>{dept.name}</h3>
                    <p className={styles.short}>{dept.shortDescription}</p>
                    <Link
                      to={`/departments/${dept.slug}`}
                      className={styles.learnMore}
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
