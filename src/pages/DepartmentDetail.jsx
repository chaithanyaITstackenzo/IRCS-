import { Link, Navigate, useParams } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import departments from '../data/departments.json';
import PageHero from '../components/common/PageHero';
import styles from './DepartmentDetail.module.css';

export default function DepartmentDetail() {
  const { slug } = useParams();
  const department = departments.find((item) => item.slug === slug);

  if (!department) return <Navigate to="/" replace />;

  return (
    <>
      <PageHero breadcrumb={department.name} eyebrow="Our Departments" title={department.name} />
      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div data-aos="fade-right">
            <img
              src={department.image || 'https://ircscancerhospital.org/wp-content/uploads/2024/07/10speechlecture915-1024x731.jpg'}
              alt={department.name}
              className={styles.image}
            />
          </div>
          <div data-aos="fade-left">
            <Link to="/#departments" className={styles.backLink}>
              <HiOutlineArrowLeft /> All departments
            </Link>
            <h2 className={styles.heading}>{department.name}</h2>
            <p className={styles.intro}>{department.intro}</p>
            <ul className={styles.points}>
              {department.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
