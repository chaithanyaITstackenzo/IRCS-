import { Link } from 'react-router-dom';
import awareness from '../../data/awareness.json';
import styles from './AwarenessPreview.module.css';

export default function AwarenessPreview() {
  const items = awareness.slice(0, 3);
  return (
    <section id="awareness" className="section">
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="section-label">Cancer Awareness & Outreach</p>
            <h2 className="section-heading">Taking early detection into classrooms and communities</h2>
          </div>
          <Link to="/awareness" className="btn btn-outline">View all camps</Link>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <Link
              to={`/awareness/${item.slug}`}
              key={item.slug}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={i * 70}
            >
              <img src={item.image} alt={item.title} className={styles.image} loading="lazy" />
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
  );
}
