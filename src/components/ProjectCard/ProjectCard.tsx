import styles from './ProjectCard.module.css';

type Props = {
    image: string,
    title: string,
    description: string,
    detailsLink: string,
}

const ProjectCard = ({ image, title, description, detailsLink }: Props) => {
  return (
    <div className={styles.projectCard} data-aos="fade-up-right" data-aos-duration="1000">
        <div className={styles.cardInner}>
            <div className={styles.cardOverlay} />
            <div className={styles.cardContent}>
                <div className={styles.cardImage}>
                    <img src={image} alt={title} />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
                <div className={styles.cardLinks}>
                    <a href={detailsLink} className={styles.cardButton}>
                        + Detalhes
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProjectCard;