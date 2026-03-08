import styles from './Footer.module.css';
import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copyright}>
          &copy; {year} {profile.shortName}. All rights reserved.
        </p>
        <div className={styles.links}>
          <a href={`mailto:${profile.email}`} className={styles.link}>
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
