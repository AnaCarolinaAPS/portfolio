import Computer from '../../assets/computer.png';
import resumoData from '../../data/resumo';
import habilidadeData from '../../data/habilidades';
import type { HabilidadeDataType } from '../../data/habilidades';
import type { TecnologiasItemType } from '../../data/habilidades';
import sobremimData from '../../data/sobremim.ts';
import projetosData from '../../data/projetos'; // ou o caminho correto
import type { ProjetosDataType } from '../../data/projetos';
import ProjectCard from '../../components/ProjectCard/index.tsx';
import { ButtonLink } from '../../components/ButtonLink/index.tsx';
import { HabilidadesIcon, ResponsiveImage, Section } from './styles.ts';
import { DivContainer } from '../../components/Div/index.tsx';
import { Icon } from '../../components/Icon/index.tsx';
import { useEffect, useState } from 'react';
import { getInformation } from '../../services/requests.ts';

import type { Information } from "../../@types/Information"
import { ScaleLoader } from 'react-spinners';
import { Loading } from '../../components/Layout/Content/styles.ts';
import { useTheme } from 'styled-components';

function Home() {

    // const paragrafos: string[] = sobremimData.resumo.split('\n');
    const projetosDestaque = projetosData.slice(0, 3); // Coleção dos 3 primeiros projetos (DESTAQUE)
    
    // Links da Section SOBREMIM
    const whatsappDados = sobremimData.itens.find(
        item => item.nome === 'whatsapp'
    )?.linkContato;
    const emailDados = sobremimData.itens.find(
        item => item.nome === 'email'
    )?.linkContato;
    const githubDados = sobremimData.itens.find(
        item => item.nome === 'github'
    )?.linkContato;
    const linkedinDados = sobremimData.itens.find(
        item => item.nome === 'linkedin'
    )?.linkContato;

    const [loadingRequest, setLoadingRequest] = useState(true)
    const theme = useTheme()

    const [information, setInformation] = useState<Information | null>(null)

    const [paragrafos, setParagrafos] = useState<string[]>(null)

    const handleGetInformation = async () => {
        setLoadingRequest(true)
        const request = await getInformation('pt-BR')

        if (request.error) {
            console.log('❌ ERRO:', request.error)
            return
        }

        if (request.data?.information) {            
            const information = request.data.information;

            setInformation(information)
            setParagrafos(information?.about_me ? information?.about_me.split(/\r?\n/) : [])
        }
        setLoadingRequest(false)
    }

    useEffect(() => {
        handleGetInformation()
    }, [])
    
    return (
        <DivContainer padding='0px 0px 5rem 0px' width='100%'>
            {loadingRequest &&
                <Loading>
                    <ScaleLoader color={theme.COLORS.primary} />
                </Loading>
            }           
            <Section>
                <DivContainer alignItems='center'>
                    <>
                        <DivContainer width='50%' alignItems='flex-start' flexDirection='column'>
                            <h1>{information?.headline}<br/><span className='color-primary'>{resumoData.nome}</span></h1>
                            <h3 className='color-secondary'>{information?.title}</h3>
                            <DivContainer fontSize='lg'>
                                <p>
                                    {information?.summary}
                                </p>
                            </DivContainer>                            
                        </DivContainer>
                        <DivContainer width='50%'>
                            <ResponsiveImage src={Computer} alt="Imagem de Várias Telas Conectadas"></ResponsiveImage>
                        </DivContainer>
                    </>
                </DivContainer>
            </Section>

            <DivContainer alignItems='center'>
                <div className="section-divider"></div>
            </DivContainer>

            <Section>
                <DivContainer flexDirection='column' alignItems='center'>
                    <>
                        <DivContainer flexDirection='column' alignItems='center' fontSize='lg'>
                            <h2 className='color-primary'>Sobre Mim</h2>
                            {paragrafos?.map((paragrafo: string, index: number) => (
                                <p key={index} className="text-justify">{paragrafo}</p>
                            ))}
                        </DivContainer>
                        <DivContainer alignItems='center' justifyContent='center' margin='1rem 0px'>
                            <ButtonLink href={sobremimData.linkcv} borderRadius="sm" style="secondary" newTab size="md">
                                <>
                                    <span>Baixar CV</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                        <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
                                        <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
                                        <path d="M17 18h2" />
                                        <path d="M20 15h-3v6" />
                                        <path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
                                    </svg>
                                </>
                            </ButtonLink>
                        </DivContainer>
                        <DivContainer flexDirection='row' justifyContent='center' gap='12px'>
                            {/* Icone Linkedin */}
                            {linkedinDados && (
                                <Icon width='24px'>
                                    <a
                                        href={linkedinDados}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                        </svg>
                                    </a>
                                </Icon>
                            )}

                            {/* Icone Github */}
                            {githubDados && (
                                <Icon width='24px'>
                                    <a
                                        href={githubDados}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                        </svg>                                
                                    </a>
                                </Icon>
                            )}

                            {/* Icone Email */}
                            {emailDados && (
                                <Icon width='24px'>
                                    <a
                                        href={emailDados}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >                                    
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                        </svg>
                                    </a>
                                </Icon>
                            )}

                            {/* Icone Whatsapp */}
                            {whatsappDados && (
                                <Icon width='24px'>
                                    <a
                                        href={whatsappDados}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                        </svg>
                                    </a>
                                </Icon>
                            )}
                        </DivContainer>
                    </>
                </DivContainer>
            </Section> 
            
            <DivContainer alignItems='center'>
                <div className="section-divider"></div>
            </DivContainer>

            <Section>
                <DivContainer flexDirection='column' alignItems='center'>
                    <>
                        <DivContainer flexDirection='column' alignItems='center'>
                            <h2 className='color-secondary'>Habilidades</h2>
                        </DivContainer>
                        <DivContainer alignItems='center' justifyContent='space-between' margin='1rem 0px'>
                            {habilidadeData.map(( hab: HabilidadeDataType, index: number) => (
                                <DivContainer key={index}>
                                    <DivContainer width='50%' alignItems='center' flexDirection='column'>
                                        <h3 className='text-xl text-uppercase'>{hab.categoria}</h3>
                                    </DivContainer>
                                    <DivContainer width='50%' flexDirection='row' alignItems="center" justifyContent='center' gap='0px 48px'>
                                        {hab.itens.map((item: TecnologiasItemType, i) => (
                                            <DivContainer key={i} flexDirection='column' alignItems="center" width=''>
                                                <HabilidadesIcon src={item.icone} alt={item.nome} title={item.nome} className="mb-1"></HabilidadesIcon>
                                                <p>{item.nome}</p>
                                            </DivContainer>
                                        ))}
                                    </DivContainer>
                                    
                                </DivContainer>
                            ))}
                        </DivContainer>
                    </>
                </DivContainer>
            </Section> 

            <DivContainer alignItems='center'>
                <div className="section-divider"></div>
            </DivContainer>

            <Section>
                <DivContainer flexDirection='column'>
                    <>
                        <DivContainer flexDirection='column' alignItems='center'>
                            <h2 className='color-primary'>Projetos</h2>
                        </DivContainer>
                        <DivContainer flexDirection='row' alignItems='center' height='100%'>
                            {projetosDestaque.map((proj: ProjetosDataType, index: number) => (
                                <DivContainer key={index} width="33%" gap='5px' justifyContent='center' fontSize='md'>
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
                        <DivContainer flexDirection='row' alignItems='center' justifyContent='center' padding='5rem 0px 0px 0px' width='100%'>
                            <ButtonLink href="/projetos" borderRadius="sm" style="secondary" newTab size="md">
                                <>
                                    <span>Todos os Projetos</span>
                                </>
                            </ButtonLink>
                        </DivContainer>
                    </>
                </DivContainer>
            </Section>

        </DivContainer>
    );
}

export default Home;

