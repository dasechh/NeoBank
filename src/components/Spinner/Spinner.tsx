import styles from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <svg
        className={styles.ring}
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="68" height="68" rx="34" stroke="#808080" strokeWidth="2" />
      </svg>

      <svg
        className={styles.arc}
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_89_1420" fill="white">
          <path d="M61.56 12.53C56.96 6.96 50.60 2.96 43.42 1.12C36.25 -0.71 28.65 -0.28 21.75 2.33C14.85 4.95 9.02 9.64 5.12 15.68C1.23 21.73 -0.51 28.82 0.13 35.89L2.18 35.72C1.57 29.07 3.21 22.40 6.88 16.72C10.54 11.03 16.02 6.63 22.52 4.16C29.00 1.69 36.15 1.29 42.89 3.02C49.63 4.75 55.62 8.51 59.95 13.75L61.56 12.53Z" />
        </mask>
        <path
          d="M61.56 12.53C56.96 6.96 50.60 2.96 43.42 1.12C36.25 -0.71 28.65 -0.28 21.75 2.33C14.85 4.95 9.02 9.64 5.12 15.68C1.23 21.73 -0.51 28.82 0.13 35.89L2.18 35.72C1.57 29.07 3.21 22.40 6.88 16.72C10.54 11.03 16.02 6.63 22.51 4.16C29.00 1.69 36.15 1.29 42.89 3.02C49.63 4.75 55.62 8.51 59.95 13.75L61.56 12.53Z"
          fill="#B4387A"
          stroke="#B4387A"
          strokeWidth="2"
          mask="url(#path-1-inside-1_89_1420)"
        />
      </svg>
    </div>
  );
};
