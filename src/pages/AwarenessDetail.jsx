import { useParams, Link, Navigate } from 'react-router-dom';
import { HiOutlineArrowLeft, HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineUserGroup } from 'react-icons/hi';
import awareness from '../data/awareness.json';
import styles from './AwarenessDetail.module.css';

export default function AwarenessDetail() {
  const { slug } = useParams();
  const camp = awareness.find((a) => a.slug === slug);

  if (!camp) return <Navigate to="/awareness" replace />;

  const related = awareness.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <div className={styles.heroImage} style={{ backgroundImage: `url(${camp.image})` }}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <Link to="/awareness" className={styles.backLink}><HiOutlineArrowLeft /> All awareness camps</Link>
          <h1 className={styles.title}>{camp.title}</h1>
        </div>
      </div>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div>
            <p className={styles.summary}>{camp.summary}</p>
            <div className={styles.metaList}>
              <div className={styles.metaItem}><HiOutlineCalendar /> {camp.date}</div>
              <div className={styles.metaItem}><HiOutlineLocationMarker /> {camp.venue}</div>
              {camp.resourcePerson && <div className={styles.metaItem}><HiOutlineUserGroup /> {camp.resourcePerson}</div>}
            </div>
            <p className={styles.organiser}>Organised by: {camp.organiser}</p>
          </div>

          <aside className={styles.related}>
            <h3>Related Awareness Programs</h3>
            {related.map((r) => (
              <Link key={r.slug} to={`/awareness/${r.slug}`} className={styles.relatedCard}>
                <img src={r.image} alt={r.title} loading="lazy" />
                <div>
                  <span>{r.date}</span>
                  <p>{r.title}</p>
                </div>
              </Link>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
