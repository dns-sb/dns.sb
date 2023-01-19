import styles from './index.module.css';

export default function StepContainer({ children }: React.PropsWithChildren<unknown>) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
