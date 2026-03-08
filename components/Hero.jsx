import styles from './Hero.module.css';
import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgText} aria-hidden="true">
        {profile.shortName}
      </div>

      <div className={`container ${styles.content}`}>
        <div className="reveal">
          {profile.available && (
            <span className={styles.badge}>
              <span className={styles.badgeDot} />
              Available for opportunities
            </span>
          )}

          <h1 className={styles.heading}>
            Hi, I'm{' '}
            <span className={styles.name}>{profile.name}</span>
          </h1>

          <p className={styles.tagline}>{profile.tagline}</p>

          <div className={styles.cta}>
            <a href="#projects" className={styles.btnPrimary}>
              View Projects
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Get in Touch
            </a>
          </div>

          <div className={styles.meta}>
            <span>{profile.location}</span>
            <span className={styles.metaDivider} />
            <span>{profile.title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
