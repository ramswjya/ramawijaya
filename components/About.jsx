import styles from './About.module.css';
import { profile } from '@/data/profile';

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={`${styles.grid} reveal`}>
          <div className={styles.photoCol}>
            <div className={styles.photoCard}>
              <img src="/images/profile.png" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
            </div>
          </div>

          <div className={styles.textCol}>
            <span className={styles.label}>About</span>
            <h2 className={styles.heading}>
              A bit about <span className={styles.italic}>myself</span>
            </h2>

            {profile.about.map((p, i) => (
              <p key={i} className={styles.paragraph}>
                {p}
              </p>
            ))}

            <div className={styles.education}>
              {profile.education.map((edu, i) => (
                <div key={i} className={styles.eduItem}>
                  <p className={styles.eduDegree}>{edu.degree}</p>
                  <p className={styles.eduSchool}>{edu.school}</p>
                  <p className={styles.eduDetail}>{edu.detail}</p>
                </div>
              ))}
            </div>

            <div className={styles.interests}>
              {profile.interests.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.stats} reveal`}>
          {profile.stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
