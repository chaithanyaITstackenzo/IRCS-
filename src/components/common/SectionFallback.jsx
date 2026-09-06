import styles from './SectionFallback.module.css';

export default function SectionFallback() {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  );
}
