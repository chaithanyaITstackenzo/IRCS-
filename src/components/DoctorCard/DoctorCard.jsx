import { Link } from 'react-router-dom';
import styles from './DoctorCard.module.css';

export default function DoctorCard({ doctor }) {
  return (
    <Link to={`/doctors/${doctor.id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={doctor.image} alt={doctor.name} loading="lazy" className={styles.image} />
      </div>
      <div className={styles.body}>
        <p className={styles.designation}>{doctor.designation}</p>
        <h3 className={styles.name}>{doctor.name}</h3>
        <span className={styles.link}>View profile</span>
      </div>
    </Link>
  );
}
