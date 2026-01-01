import type { DescricaoJobType, ExperienciasDataType } from '../../data/experiencias';
import Card from '../Card';
import { TimeLine, TimelineItem, CirclePoint, DescriptionList } from './styles';

type Props = {
    experiences: ExperienciasDataType[];
};

const Timeline = ({ experiences }: Props) => {
    return (
        <TimeLine>
            {experiences.map((data, index) => (
                <TimelineItem key={index} $isLeft={index % 2 === 0}>
                    <CirclePoint $isLeft={index % 2 === 0}></CirclePoint>
                    <Card style={{ maxWidth: '95%' , height: '100%', textAlign: 'center'}}>
                        <>
                        <h3 className='color-secondary'>{data.funcao}</h3>
                        <strong>{data.empresa}</strong>
                        <span className='color-primary  '>{data.ano}</span>
                        <DescriptionList>
                            {data.descricao.map((exp: DescricaoJobType, index: number) => (
                                <li key={index}>{exp.descricao}</li>
                            ))}
                        </DescriptionList>

                        </>
                    </Card>
                </TimelineItem>
            ))}
        </TimeLine>
    );
};

export default Timeline;
