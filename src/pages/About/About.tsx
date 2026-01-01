import experienciasData from '../../data/experiencias';
import sobremimData from '../../data/sobremim.ts';
import type { SkillsDataType } from '../../data/sobremim.ts';
import type { TeconologiasDataType } from '../../data/sobremim.ts';
import educacaoData from '../../data/educacao.ts';
import type { EducacaoDataType } from '../../data/educacao.ts';
import Timeline from '../../components/TimeLine/index.tsx';
import Card from '../../components/Card/index.tsx';
import { DivContainer } from '../../components/Div/index.tsx';
import { HabilidadesIcon, Section } from './styles.ts';

function Sobre() {
    const paragrafos: string[] = sobremimData.resumo.split('\n');

    return (
        <>
            <DivContainer padding='0px 0px 5rem 0px' width='100%'> 
                <Section>
                    <DivContainer alignItems='center'>
                        <>
                            <DivContainer flexDirection='column' alignItems='center'>
                                <h1 className='color-primary'>Minha História</h1>
                                {paragrafos.map((paragrafo: string, index: number) => (
                                    <p key={index} className="text-justify">{paragrafo}</p>
                                ))}
                            </DivContainer>
                        </>
                    </DivContainer>
                </Section>

                <DivContainer alignItems='center'>
                    <div className="section-divider"></div>
                </DivContainer>

                <Section>
                    <DivContainer alignItems='center'>
                        <>
                            <DivContainer flexDirection='column' alignItems='center'>
                                <h2 className='color-secondary'>Minha Jornada</h2>
                                <Timeline experiences={experienciasData}></Timeline>
                                {/* <Timeline experiences={experienciasData} /> */}
                            </DivContainer>
                        </>
                    </DivContainer>
                </Section>

                <DivContainer alignItems='center'>
                    <div className="section-divider"></div>
                </DivContainer>

                <Section>
                    <DivContainer width='100%' padding='50px 10px'>
                        <DivContainer>
                            <DivContainer width='50%' alignItems='center' flexDirection='column'>
                                <Card style={{ maxWidth: '95%' }}>
                                     <DivContainer alignItems='center' justifyContent='center'>
                                        <h2 className="color-primary">Certificados</h2>
                                        {educacaoData.map((educacao: EducacaoDataType, index: number) => (
                                            <DivContainer key={index} flexDirection='column' alignItems="center" justifyContent='center'>
                                                <h3 className="color-secondary">{educacao.curso}</h3>
                                                <span>{educacao.local}</span>
                                                <span className="color-primary">{educacao.ano}</span>
                                            </DivContainer>
                                        ))}
                                    </DivContainer>
                                </Card> 
                            </DivContainer>                            
                            <DivContainer width='50%' alignItems='center' flexDirection='column'>
                                <Card style={{ maxWidth: '95%' }}>
                                    <DivContainer>
                                        <DivContainer alignItems='center' justifyContent='center'>
                                            <h2 className="color-primary">Habilidades</h2>
                                            {sobremimData.skills.map((skill: SkillsDataType, index: number) => (
                                                <DivContainer key={index} flexDirection='column' alignItems="center" justifyContent='center'>
                                                    <h3 className="color-secondary">{skill.nivel}</h3>
                                                    <DivContainer gap='5px' flexDirection='row' justifyContent='center'>
                                                        {skill.tecnologias.map((tecnologias: TeconologiasDataType, i: number) => (                                        
                                                            <DivContainer key={i} width='auto'>
                                                                <HabilidadesIcon src={tecnologias.icone} alt={tecnologias.nome} title={tecnologias.nome}></HabilidadesIcon>
                                                            </DivContainer>
                                                        ))}
                                                    </DivContainer>
                                                </DivContainer>
                                            ))}
                                        </DivContainer>
                                    </DivContainer>
                                </Card> 
                            </DivContainer>
                        </DivContainer>
                    </DivContainer>
                </Section>
            </DivContainer>
        </>
    );
}

export default Sobre;

