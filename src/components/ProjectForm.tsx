import { useState } from 'react';
import styles from './ProjectForm.module.css';

interface ProjectFormProps {
  initialName?: string;
  initialColor?: string;
  onSubmit: (name: string, color: string) => void | Promise<void>;
  onCancel: () => void;
  submitLabel: string;
  loading?: boolean;
  error?: string | null;
}

export default function ProjectForm({
  initialName = '',
  initialColor = '#3498db',
  onSubmit,
  onCancel,
  submitLabel,
  loading = false,
  error = null,
}: ProjectFormProps) {
  const [name, setName] = useState(initialName);
  const [color, setColor] = useState(initialColor);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    await onSubmit(name, color);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <div className={styles.error}>{error}</div>}

      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Nom du projet"
        className={styles.input}
        required
      />

      <input
        type="color"
        value={color}
        onChange={e => setColor(e.target.value)}
        className={styles.colorPicker}
      />

      <div className={styles.actions}>
        <button
          type="submit"
          className={styles.submit}
          disabled={loading}
        >
          {loading ? 'Création...' : submitLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={styles.cancel}
          disabled={loading}
        >
          Annuler
        </button>
      </div>
    </form>
  );
}

