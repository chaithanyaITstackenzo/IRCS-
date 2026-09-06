import { Link } from 'react-router-dom';
import doctors from '../../data/doctors.json';
import DoctorCard from '../DoctorCard/DoctorCard';
import styles from './DoctorsPreview.module.css';

export default function DoctorsPreview() {
  return (
    <section id="doctors" className="section">
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="section-label">Our Team</p>
            <h2 className="section-heading">Specialist doctors leading your care</h2>
          </div>
          <Link to="/doctors" className="btn btn-outline">View all doctors</Link>
        </div>

        <div className={styles.grid}>
          {doctors.slice(0, 4).map((doc, i) => (
            <div key={doc.id} data-aos="fade-up" data-aos-delay={i * 60}>
              <DoctorCard doctor={doc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
