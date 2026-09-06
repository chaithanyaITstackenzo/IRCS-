import donate from '../../data/donate.json';
import styles from './Donate.module.css';

export default function Donate() {
  return (
    <section id="donate" className="section section-alt">
      <div className="container">
        <p className="section-label">Support Cancer Care</p>
        <h2 className="section-heading">{donate.heading}</h2>
        {donate.paragraphs.map((p, i) => <p key={i} className={styles.paragraph}>{p}</p>)}

        <div className={styles.ways}>
          {donate.ways.map((w, i) => (
            <div key={w.title} className={styles.wayCard} data-aos="fade-up" data-aos-delay={i * 60}>
              <h3>{w.title}</h3>
              <p>{w.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.qrRow}>
          {donate.qrCodes.map((qr) => (
            <div key={qr.label} className={styles.qrCard}>
              <img src={qr.image} alt={qr.label} loading="lazy" />
              <p>{qr.label}</p>
            </div>
          ))}
        </div>
        <p className={styles.note}>{donate.note}</p>
      </div>
    </section>
  );
}
