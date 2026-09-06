import { Link } from 'react-router-dom';
import { HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineClock, HiOutlineClipboardCheck } from 'react-icons/hi';
import items from '../../data/whyChoose.json';
import styles from './WhyChoose.module.css';

const icons = [HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineClock, HiOutlineClipboardCheck];

export default function WhyChoose() {
  return (
    <section className="section section-alt">
      <div className="container">
        <p className="section-label">What We Do</p>
        <h2 className="section-heading">Your healing, our constant care</h2>

        <div className={styles.grid}>
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const body = (
              <>
                <Icon size={28} className={styles.icon} />
                <p className={styles.label}>{item.label}</p>
                <h3 className={styles.title}>{item.title}</h3>
              </>
            );
            return item.target.startsWith('/') ? (
              <Link key={item.title} to={item.target} className={styles.card} data-aos="fade-up" data-aos-delay={i * 60}>{body}</Link>
            ) : (
              <a
                key={item.title}
                href={`#${item.target}`}
                className={styles.card}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                onClick={(e) => { e.preventDefault(); document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                {body}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
