import type { INewsArticle } from '@/types';
import styles from './NewsCard.module.scss';
import failedImage from '@/assets/icons/failed.svg';

export const NewsCard = ({ url, urlToImage, title, description }: INewsArticle) => {
  return (
    <li className={styles.newsCard}>
      <img
        src={urlToImage}
        alt="News Image"
        loading="lazy"
        aria-hidden="true"
        className={styles.newsCard__image}
        onError={(e) => {
          e.currentTarget.src = failedImage;
        }}
      />

      {title && (
        <a href={url || '#'} target="_blank" rel="noopener noreferrer">
          <p className={styles.newsCard__title}>{title}</p>
        </a>
      )}
      {description && <p className={styles.newsCard__description}>{description}</p>}
    </li>
  );
};
