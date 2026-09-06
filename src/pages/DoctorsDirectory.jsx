import { useMemo, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import doctors from '../data/doctors.json';
import DoctorCard from '../components/DoctorCard/DoctorCard';
import PageHero from '../components/common/PageHero';
import styles from './DoctorsDirectory.module.css';

export default function DoctorsDirectory() {
  const [query, setQuery] = useState('');
  const [dept, setDept] = useState('All');

  const departments = useMemo(() => ['All', ...new Set(doctors.map((d) => d.department))], []);

  const filtered = doctors.filter((d) => {
    const matchesQuery = `${d.name} ${d.designation}`.toLowerCase().includes(query.toLowerCase());
    const matchesDept = dept === 'All' || d.department === dept;
    return matchesQuery && matchesDept;
  });

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Specialist doctors leading your care"
        description="Meet the surgical, medical and radiation oncologists, radiologists and pathologists caring for patients at IRCS Cancer Hospital."
      />
      <section className="section">
        <div className="container">
          <div className={styles.toolbar}>
            <div className={styles.searchBox}>
              <HiOutlineSearch size={18} />
              <input
                type="search"
                placeholder="Search doctors by name or designation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search doctors"
              />
            </div>
            <select value={dept} onChange={(e) => setDept(e.target.value)} className={styles.select} aria-label="Filter by department">
              {departments.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <p>No doctors match your search. Try a different name or department.</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.map((doc) => <DoctorCard key={doc.id} doctor={doc} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
