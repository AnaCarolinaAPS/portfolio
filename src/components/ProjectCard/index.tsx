import { ButtonLink } from '../ButtonLink/index.tsx';
import Card from '../Card/index.tsx';
import { CardContent, CardImage, CardLinks } from "./styles"

type Props = {
    image: string,
    title: string,
    description: string,
    detailsLink: string,
}

const ProjectCard = ({ image, title, description, detailsLink }: Props) => {
    return (
        <Card style={{ maxWidth: '95%' , minHeight: '100%'}}>  
            <CardContent>
                <CardImage>
                    <img src={image} alt={title} />
                </CardImage>
                <h3>{title}</h3>
                <p>{description}</p>
                <CardLinks>
                    <ButtonLink href={detailsLink} borderRadius="sm" style="primary" size="md">
                        <span>+ Detalhes</span>
                    </ButtonLink>
                </CardLinks>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;