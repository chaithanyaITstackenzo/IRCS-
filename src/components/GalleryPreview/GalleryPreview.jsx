import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import gallery from '../../data/gallery.json';
import styles from './GalleryPreview.module.css';

export default function GalleryPreview() {
  const [activeCat, setActiveCat] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCat === 'All' ? gallery.items : gallery.items.filter((i) => i.category === activeCat);

  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightboxIndex((i) => (i + 1) % filtered.length);

  const onKeyDown = (e) => {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        <p className="section-label">Gallery</p>
        <h2 className="section-heading">Life at IRCS Cancer Hospital</h2>

        <div className={styles.filters}>
          {gallery.categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.filterBtn} ${activeCat === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((item, i) => (
            <button
              key={item.image}
              type="button"
              className={styles.item}
              onClick={() => setLightboxIndex(i)}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 60}
            >
              <img src={item.image} alt={item.caption} loading="lazy" className={styles.image} />
              <span className={styles.caption}>{item.caption}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onKeyDown={onKeyDown}
            ref={(el) => el?.focus()}
          >
            <button type="button" className={styles.lightboxClose} onClick={close} aria-label="Close">
              <HiOutlineX size={26} />
            </button>
            <button type="button" className={styles.lightboxPrev} onClick={prev} aria-label="Previous image">
              <HiChevronLeft size={30} />
            </button>
            <img src={filtered[lightboxIndex].image} alt={filtered[lightboxIndex].caption} className={styles.lightboxImage} />
            <button type="button" className={styles.lightboxNext} onClick={next} aria-label="Next image">
              <HiChevronRight size={30} />
            </button>
            <p className={styles.lightboxCaption}>{filtered[lightboxIndex].caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
