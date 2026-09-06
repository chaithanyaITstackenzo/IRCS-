import { Link } from 'react-router-dom';
import awareness from '../data/awareness.json';
import PageHero from '../components/common/PageHero';
import styles from './AwarenessList.module.css';

export default function AwarenessList() {
  return (
    <>
      <PageHero
        eyebrow="Cancer Awareness & Community Outreach"
        title="Taking early detection into classrooms and communities"
        description="A running record of awareness camps and educational sessions conducted by IRCS Cancer Hospital across schools, colleges and community organisations."
        breadcrumb="Awareness"
      />
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {awareness.map((item, i) => (
              <Link
                to={`/awareness/${item.slug}`}
                key={item.slug}
                className={styles.card}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 60}
              >
                <img src={item.image} alt={item.title} loading="lazy" className={styles.image} />
                <div className={styles.body}>
                  <span className={styles.date}>{item.date}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.venue}>{item.venue}</p>
                  <span className={styles.readMore}>Read more</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
