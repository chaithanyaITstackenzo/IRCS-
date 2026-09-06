import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <p className={styles.code}>404</p>
        <h1 className={styles.heading}>Page Not Found</h1>
        <p className={styles.text}>The page you're looking for doesn't exist or may have moved.</p>
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </div>
    </section>
  );
}
