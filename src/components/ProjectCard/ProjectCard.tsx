import styles from './ProjectCard.module.css';
import Botao from '../Botao/Botao.tsx';
import Card from '../Card/Card.tsx';

type Props = {
    image: string,
    title: string,
    description: string,
    detailsLink: string,
}

const ProjectCard = ({ image, title, description, detailsLink }: Props) => {
    return (
        <Card style={{ maxWidth: '95%' , height: '100%'}}>
            <div className={styles.cardContent}>
                <div className={styles.cardImage}>
                    <img src={image} alt={title} />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
                <div className={styles.cardLinks}>
                    <Botao href={detailsLink} className="btn-primary" asLink size="medio">
                        <span>+ Detalhes</span>
                    </Botao>
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;