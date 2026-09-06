import { Link } from 'react-router-dom';
import styles from './PageHero.module.css';

export default function PageHero({ eyebrow, title, description, breadcrumb }) {
  return (
    <section className={styles.wrap}>
      <div className="container">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>{breadcrumb}</span>
          </nav>
        )}
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </section>
  );
}
