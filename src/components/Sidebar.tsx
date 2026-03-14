import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

interface Project {
  id: string;
  name: string;
  color: string;
}

interface SidebarProps {
  projects: Project[];
  isOpen: boolean;
  onRename: (project: Project) => void | Promise<void>;
  onDelete: (id: string) => void | Promise<void>;
}

export default function Sidebar({
  projects,
  isOpen,
  onRename,
  onDelete,
}: SidebarProps) {
  return (
    <aside
      className={`${styles.sidebar} ${
        isOpen ? styles.open : styles.closed
      }`}
    >
      <h2 className={styles.title}>Mes Projets</h2>
      <ul className={styles.list}>
        {projects.map(p => (
          <li key={p.id} className={styles.item}>
            <NavLink
              to={`/projects/${p.id}`}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              <span
                className={styles.dot}
                style={{ background: p.color }}
              />
              {p.name}
            </NavLink>
            <button
              type="button"
              onClick={() => onRename(p)}
              className={styles.iconButton}
            >
              ✏️
            </button>
            <button
              type="button"
              onClick={() => onDelete(p.id)}
              className={styles.iconButton}
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}