import type { INewsArticle } from '@/types';
import styles from './NewsCard.module.scss';
import failedImageSrc from '@/assets/icons/failed.svg';

export const NewsCard = ({ url, urlToImage, title, description }: INewsArticle) => {
  return (
    <div className={styles.newsCard}>
      <img
        src={urlToImage ?? failedImageSrc}
        alt={'News Image'}
        loading="lazy"
        aria-hidden="true"
        className={urlToImage ? styles.newsCard__image : styles.newsCard__image_failed}
        onError={(e) => {
          e.currentTarget.src = failedImageSrc;
          e.currentTarget.onerror = null;
        }}
      />

      {title && (
        <a href={url || '#'} target="_blank" rel="noopener noreferrer">
          <p className={styles.newsCard__title}>{title}</p>
        </a>
      )}
      {description && <p className={styles.newsCard__description}>{description}</p>}
    </div>
  );
};
