import styles from "./Timeline.module.css";
import type { ExperienciasDataType, DescricaoJobType } from '../../data/experiencias';
import Card from '../Card/Card.tsx';

type Props = {
    data: ExperienciasDataType;
    isLeft: boolean;
};

export default function TimelineItem({ data, isLeft }: Props) {
  return (
    <div
      className={`${styles.item} ${isLeft ? styles.left : styles.right}`}
    >
        <div className={styles.circle} />
        <Card style={{ maxWidth: '95%' , height: '100%', textAlign: 'center'}}>
            <>
            <h3 className={styles.jobTitle}>{data.funcao}</h3>
            <h4 className={styles.company}>{data.empresa}</h4>
            <span className={styles.period}>{data.ano}</span>
            <ul className={styles.descriptionList}>
                {data.descricao.map((exp: DescricaoJobType, index: number) => (
                    <li key={index} className={styles.description}>{exp.descricao}</li>
                ))}
            </ul>

            </>
        </Card>
    </div>
  );
}