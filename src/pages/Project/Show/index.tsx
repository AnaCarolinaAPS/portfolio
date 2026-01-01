import { useParams } from 'react-router-dom';
import projetosData from '../../../data/projetos';
import type { TecnologiasItemType } from '../../../data/projetos';
import type { RecursosItemType } from '../../../data/projetos';
import type { LinksItemType } from '../../../data/projetos';
import { DivContainer } from '../../../components/Div/index.tsx';
import { HabilidadesIcon, Section } from '../../Home/styles.ts';
import { ButtonLink } from '../../../components/ButtonLink/index.tsx';
import Card from '../../../components/Card/index.tsx';

function ProjectDetails() {
    const { id } = useParams();
    const projeto = projetosData.find(proj => proj.id === id);

    if (!projeto) {
        return <h2>Projeto não encontrado</h2>;
    }

    const paragrafos: string[] = projeto.descricao.split('\n');

    return (
        <>
            <DivContainer padding='0px 0px 5rem 0px' width='100%'> 
                <Section>
                    <DivContainer width='100%' flexDirection='row'>
                        <>
                            <DivContainer width='50%' flexDirection='column' alignItems='center'>
                                <DivContainer flexDirection='column' alignItems='center' fontSize='lg'>
                                    <h1 className='color-primary'>{projeto.titulo}</h1>
                                    <h3 className='color-secondary'>{projeto.status}</h3>
                                    <p className='text-center'>{projeto.resumo}</p>
                                </DivContainer>
                                <DivContainer flexDirection='row' justifyContent='center' alignItems='center' gap='5px'>
                                    {projeto.links.map((item: LinksItemType, i) => (
                                        <ButtonLink key={i} href={item.href} borderRadius="sm" style="secondary" newTab size="md">
                                            <span>{item.text}</span>
                                        </ButtonLink>
                                ))}  
                                </DivContainer>
                                <DivContainer flexDirection='column' alignItems='center'>
                                    <h2 className='color-secondary'>Tecnologias</h2>
                                </DivContainer>
                                <DivContainer gap='5px' flexDirection='row' justifyContent='center'>
                                    {projeto.tecnologias.map((item: TecnologiasItemType, i) => (
                                        <DivContainer key={i} width='auto'>
                                            <HabilidadesIcon src={item.icone} alt={item.nome} title={item.nome}></HabilidadesIcon>
                                        </DivContainer>
                                    ))}
                                </DivContainer>
                            </DivContainer>
                            <DivContainer width='50%' flexDirection='column' alignItems='center'>
                                <img width='100%' src={projeto.imagem} alt={projeto.titulo} />
                            </DivContainer>
                        </>
                    </DivContainer>
                    <DivContainer width='100%' flexDirection='row'>
                        <>
                            {projeto.descricao?.trim() && (
                                <DivContainer width='50%' flexDirection='column' alignItems='center'>
                                    <Card style={{ maxWidth: '95%' }}>
                                        <DivContainer alignItems='center' justifyContent='center'>
                                            <h2 className="color-primary text-center">Escopo</h2>
                                            <DivContainer fontSize='lg'>
                                                {paragrafos.map((paragrafo: string, index: number) => (
                                                    <p key={index} className="text-center">{paragrafo}</p>
                                                ))}
                                            </DivContainer>
                                        </DivContainer>
                                    </Card> 
                                </DivContainer>
                            )}
                            {projeto.recursos?.length > 0 && (
                                <DivContainer width='50%' height='100%' flexDirection='column' alignItems='center'>
                                    <Card style={{ maxWidth: '95%' }}>
                                        <DivContainer alignItems='center' justifyContent='center'>
                                            <h2 className="color-primary text-center">Principais Recursos</h2>
                                            <DivContainer fontSize='lg' justifyContent='center'>
                                                {projeto.recursos.map((item: RecursosItemType, i) => (
                                                    <p key={i} className='text-center'>
                                                        {item.descricao}
                                                    </p>
                                                ))}    
                                            </DivContainer>
                                        </DivContainer>
                                    </Card> 
                                </DivContainer>
                            )}
                        </>
                    </DivContainer>
                </Section>
            </DivContainer>                   
        </>
    );
}

export default ProjectDetails;

