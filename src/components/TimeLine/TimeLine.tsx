import styles from "./TimeLine.module.css";
import type { ExperienciasDataType } from '../../data/experiencias';
import TimelineItem from "./TimeLineItem";

type Props = {
    experiences: ExperienciasDataType[];
};

const Timeline = ({ experiences }: Props) => {
  return (
    <div className={styles.timeline}>
      {experiences.map((exp, index) => (
        <TimelineItem key={index} data={exp} isLeft={index % 2 === 0} />
      ))}
    </div>
  );
};

export default Timeline;
