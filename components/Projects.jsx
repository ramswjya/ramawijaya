import styles from './Projects.module.css';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <div className="reveal">
          <span className={styles.label}>Projects</span>
          <h2 className={styles.heading}>
            Things I've <span className={styles.italic}>built</span>
          </h2>
        </div>

        <div className={`${styles.grid} reveal`}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.card} ${styles[project.size]}`}
            >
              <div
                className={styles.preview}
                style={{ background: project.gradient }}
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className={styles.placeholder}>
                    <span className={styles.placeholderIcon}>
                      {project.icon}
                    </span>
                    <span className={styles.placeholderText}>
                      Screenshot coming soon
                    </span>
                  </div>
                )}
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <span
                    className={`${styles.status} ${
                      project.status === 'wip' ? styles.statusWip : styles.statusDone
                    }`}
                  >
                    {project.statusLabel}
                  </span>
                  <span className={styles.date}>{project.date}</span>
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.tools}>
                  {project.tools.map((tool) => (
                    <span key={tool} className={styles.tool}>
                      {tool}
                    </span>
                  ))}
                </div>

                <p className={styles.impact}>{project.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
