import styles from './CTA.module.css';

export default function CTA() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.wrap}>
      <div className={`container ${styles.inner}`} data-aos="fade-up">
        <h2 className={styles.heading}>Every patient deserves hope, care and dignity.</h2>
        <div className={styles.actions}>
          <a href="#contact" onClick={scrollTo('contact')} className="btn btn-primary">Contact Hospital</a>
          <a href="#departments" onClick={scrollTo('departments')} className="btn btn-outline">Explore Departments</a>
          <a href="#donate" onClick={scrollTo('donate')} className="btn btn-accent">Support Our Mission</a>
        </div>
      </div>
    </section>
  );
}
