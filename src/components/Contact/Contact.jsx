import { useState } from 'react';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';
import contact from '../../data/contact.json';
import styles from './Contact.module.css';

const initialForm = { name: '', phone: '', email: '', subject: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) errors.phone = 'Please enter a valid phone number.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!form.subject.trim()) errors.subject = 'Please add a subject.';
  if (form.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: wire this up to a real backend/email service (e.g. Formspree, EmailJS,
    // or a custom API route) before going live. This currently only validates
    // and simulates submission — no data is sent anywhere yet.
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
    }, 900);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">Get in Touch</p>
        <h2 className="section-heading">We're here whenever you need us</h2>

        <div className={styles.grid}>
          <div className={styles.info} data-aos="fade-right">
            <div className={styles.infoItem}>
              <HiOutlineLocationMarker size={22} className={styles.infoIcon} />
              <div>
                <h3>Address</h3>
                <p>{contact.address.join(', ')}</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <HiOutlinePhone size={22} className={styles.infoIcon} />
              <div>
                <h3>Phone</h3>
                {contact.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className={styles.phoneLink}>{p}</a>
                ))}
              </div>
            </div>
            <div className={styles.infoItem}>
              <HiOutlineMail size={22} className={styles.infoIcon} />
              <div>
                <h3>Email</h3>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <HiOutlineClock size={22} className={styles.infoIcon} />
              <div>
                <h3>Consultation Hours</h3>
                {contact.hours.map((h) => <p key={h.days}>{h.days}: {h.time}</p>)}
              </div>
            </div>

            <div className={styles.mapWrap}>
              <iframe
                title="IRCS Cancer Hospital location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate data-aos="fade-left">
            <div className={styles.formRow}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
              {errors.name && <span id="name-error" className={styles.error}>{errors.name}</span>}
            </div>
            <div className={styles.formRow}>
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" value={form.phone} onChange={handleChange} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} />
              {errors.phone && <span id="phone-error" className={styles.error}>{errors.phone}</span>}
            </div>
            <div className={styles.formRow}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
              {errors.email && <span id="email-error" className={styles.error}>{errors.email}</span>}
            </div>
            <div className={styles.formRow}>
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" value={form.subject} onChange={handleChange} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'subject-error' : undefined} />
              {errors.subject && <span id="subject-error" className={styles.error}>{errors.subject}</span>}
            </div>
            <div className={styles.formRow}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
              {errors.message && <span id="message-error" className={styles.error}>{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'loading'} style={{ width: '100%' }}>
              {status === 'loading' ? 'Sending…' : 'Submit Enquiry'}
            </button>

            {status === 'success' && (
              <p className={styles.success} role="status">Thank you — your enquiry has been recorded. The hospital will get back to you shortly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
