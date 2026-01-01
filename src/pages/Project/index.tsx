import projetosData from '../../data/projetos';
import type { ProjetosDataType } from '../../data/projetos';
import ProjectCard from '../../components/ProjectCard';
import { DivContainer } from '../../components/Div';
import { Section } from '../Home/styles';

function Project() {
    return (
        <> 
            <DivContainer padding='0px 0px 5rem 0px' width='100%'> 
                <Section>
                    <DivContainer alignItems='center'>
                        <>
                            <DivContainer flexDirection='column' alignItems='center'>
                                <h1 className='color-primary'>Meus Projetos</h1>
                            </DivContainer>
                            <DivContainer flexDirection='row' justifyContent='center' alignItems='center'>
                                {projetosData.map((proj: ProjetosDataType) => (
                                <DivContainer width='33%' flexDirection='column' alignItems='center'>
                                    <ProjectCard
                                        key={proj.id}
                                        image={proj.imagem}
                                        title={proj.titulo}
                                        description={proj.resumo}
                                        detailsLink={`/projetos/${proj.id}`}
                                    />
                                </DivContainer>
                            ))}   
                            </DivContainer>
                        </>
                    </DivContainer>
                </Section>
            </DivContainer>            
        </>
    );
}

export default Project;

