import type { INewsArticle } from '@/types';
import styles from './NewsCard.module.scss';
import failedImageSrc from '@/assets/icons/failed.svg';
import { useState } from 'react';

export const NewsCard = ({ url, urlToImage, title, description }: INewsArticle) => {
  const [isValidImg, setIsValidImg] = useState(true);

  if (!isValidImg || !urlToImage) {
    return null;
  }

  return (
    <li className={styles.newsCard}>
      <img
        src={urlToImage}
        alt="News Image"
        loading="lazy"
        aria-hidden="true"
        className={styles.newsCard__image}
        onError={() => setIsValidImg(false)}
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
