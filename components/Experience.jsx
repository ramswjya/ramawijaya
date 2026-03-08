import styles from './Experience.module.css';
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <div className="reveal">
          <span className={styles.label}>Experience</span>
          <h2 className={styles.heading}>
            Where I've <span className={styles.italic}>worked</span>
          </h2>
        </div>

        <div className={styles.timeline}>
          {experience.map((job, index) => (
            <div key={index} className={`${styles.card} reveal`}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{job.icon}</span>
                <div className={styles.headerText}>
                  <div className={styles.topRow}>
                    <h3 className={styles.company}>{job.company}</h3>
                    {job.current && (
                      <span className={styles.currentBadge}>Current</span>
                    )}
                  </div>
                  <p className={styles.role}>{job.role}</p>
                  <p className={styles.period}>{job.period}</p>
                </div>
              </div>

              <ul className={styles.bullets}>
                {job.bullets.map((bullet, i) => (
                  <li key={i} className={styles.bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className={styles.achievements}>
                {job.achievements.map((a, i) => (
                  <span key={i} className={styles.achievement}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
