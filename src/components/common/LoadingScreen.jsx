import styles from './LoadingScreen.module.css';

export default function LoadingScreen({ loading }) {
  return (
    <div className={`${styles.wrap} ${loading ? '' : styles.hidden}`} aria-hidden={!loading}>
      <div className={styles.mark}>
        <span className={styles.ring} />
        <span className={styles.plus}>+</span>
      </div>
    </div>
  );
}
