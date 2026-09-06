import { Link } from 'react-router-dom';
import { HiOutlinePhone, HiOutlineUserGroup, HiOutlineOfficeBuilding, HiOutlineClipboardList, HiOutlineLocationMarker, HiOutlineHeart } from 'react-icons/hi';
import items from '../../data/quickActions.json';
import styles from './QuickActions.module.css';

const icons = {
  phone: HiOutlinePhone,
  doctor: HiOutlineUserGroup,
  department: HiOutlineOfficeBuilding,
  package: HiOutlineClipboardList,
  location: HiOutlineLocationMarker,
  heart: HiOutlineHeart,
};

export default function QuickActions() {
  const handleClick = (target) => (e) => {
    if (target.startsWith('/')) return;
    e.preventDefault();
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="quick-actions" className={styles.wrap}>
      <div className={`container ${styles.grid}`}>
        {items.map((item, i) => {
          const Icon = icons[item.icon];
          const card = (
            <>
              <Icon size={22} />
              <div>
                <p className={styles.label}>{item.label}</p>
                <p className={styles.detail}>{item.detail}</p>
              </div>
            </>
          );
          return item.target.startsWith('/') ? (
            <Link key={item.label} to={item.target} className={styles.card} data-aos="fade-up" data-aos-delay={i * 60}>
              {card}
            </Link>
          ) : (
            <a
              key={item.label}
              href={`#${item.target}`}
              onClick={handleClick(item.target)}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              {card}
            </a>
          );
        })}
      </div>
    </section>
  );
}
