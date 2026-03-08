import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { profile } from '@/data/profile';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('sent');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={`${styles.wrapper} reveal`}>
          <div className={styles.info}>
            <span className={styles.label}>Contact</span>
            <h2 className={styles.heading}>
              Let's <span className={styles.italic}>connect</span>
            </h2>
            <p className={styles.description}>
              Have a question or want to work together? Feel free to reach out.
            </p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>📧</span>
                <div>
                  <p className={styles.detailLabel}>Email</p>
                  <a href={`mailto:${profile.email}`} className={styles.detailValue}>
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>📍</span>
                <div>
                  <p className={styles.detailLabel}>Location</p>
                  <p className={styles.detailValue}>{profile.location}</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>💼</span>
                <div>
                  <p className={styles.detailLabel}>LinkedIn</p>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.detailValue}
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Name</label>
                <input
                  type="text"
                  name="name"
                  className={styles.input}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Email</label>
                <input
                  type="email"
                  name="email"
                  className={styles.input}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Message</label>
              <textarea
                name="message"
                className={styles.textarea}
                rows={5}
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className={`${styles.submit} ${status === 'sent' ? styles.submitSent : ''} ${status === 'error' ? styles.submitError : ''}`}
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Sent! ✓'}
              {status === 'error' && 'Failed to send. Try again.'}
              {status === 'idle' && 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
