import about from '../../data/about.json';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className={`container ${styles.grid}`}>
        <div data-aos="fade-right">
          <img src={about.image} alt="Hospital staff and patient care at IRCS Cancer Hospital" className={styles.image} loading="lazy" />
        </div>
        <div data-aos="fade-left">
          <p className="section-label">{about.eyebrow}</p>
          <h2 className="section-heading">{about.heading}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className={styles.paragraph}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
