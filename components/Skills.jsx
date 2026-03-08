import styles from './Skills.module.css';
import { profile } from '@/data/profile';

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <div className="reveal">
          <span className={styles.label}>Skills</span>
          <h2 className={styles.heading}>
            What I <span className={styles.italic}>work with</span>
          </h2>
        </div>

        <div className={`${styles.grid} reveal`}>
          {profile.skills.map((skill) => (
            <div key={skill.title} className={styles.card}>
              <span className={styles.icon}>{skill.icon}</span>
              <h3 className={styles.cardTitle}>{skill.title}</h3>
              <ul className={styles.items}>
                {skill.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
