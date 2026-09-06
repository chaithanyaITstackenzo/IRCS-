import { useParams, Link, Navigate } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import doctors from '../data/doctors.json';
import DoctorCard from '../components/DoctorCard/DoctorCard';
import PageHero from '../components/common/PageHero';
import styles from './DoctorDetail.module.css';

export default function DoctorDetail() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) return <Navigate to="/doctors" replace />;

  const others = doctors.filter((d) => d.id !== id).slice(0, 3);

  return (
    <>
      <PageHero breadcrumb={doctor.name} eyebrow={doctor.department} title={doctor.name} />
      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div data-aos="fade-right">
            <img src={doctor.image} alt={doctor.name} className={styles.image} />
          </div>
          <div data-aos="fade-left">
            <Link to="/doctors" className={styles.backLink}><HiOutlineArrowLeft /> All doctors</Link>
            <h2 className={styles.name}>{doctor.name}</h2>
            <p className={styles.designation}>{doctor.designation}</p>
            <p className={styles.department}>Department: {doctor.department}</p>
            <p className={styles.note}>
              For appointment enquiries or to confirm current availability, please contact the hospital directly.
            </p>
            <a href="/#contact" className="btn btn-primary">Contact the Hospital</a>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <h3 className={styles.otherHeading}>Other Specialists</h3>
            <div className={styles.othersGrid}>
              {others.map((d) => <DoctorCard key={d.id} doctor={d} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
