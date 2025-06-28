import type { ReactElement } from 'react';
import styles from './Card.module.css';

type Props = {
    children: ReactElement,
}

const Card = ({ children }: Props) => {
  return (
    <div className={styles.card} data-aos="fade-up-right" data-aos-duration="1000">
        <div className={styles.cardInner}>
            <div className={styles.cardOverlay} />
            <div className={styles.cardContent}>                
                {children}
            </div>
        </div>
    </div>
  );
};

export default Card;