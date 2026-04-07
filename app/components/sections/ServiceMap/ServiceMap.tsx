import styles from './ServiceMap.module.scss';
import mapImg from '@assets/images/map-image.svg';

export const ServiceMap = () => {
  return (
    <section className={styles.map || ''}>
      <div className={styles.map__text || ''}>
        <h3>You can use our services anywhere in the world</h3>
        <p>Withdraw and transfer money online through our application</p>
      </div>
      <img src={mapImg} alt="Map" />
    </section>
  );
};
