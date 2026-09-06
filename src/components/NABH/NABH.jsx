import nabh from '../../data/nabh.json';
import styles from './NABH.module.css';

export default function NABH() {
  return (
    <section id="nabh" className="section">
      <div className={`container ${styles.box}`}>
        <h2 className={styles.heading}>{nabh.heading}</h2>
        <p className={styles.text}>{nabh.statement}</p>
      </div>
    </section>
  );
}
