import experienciasData from '../data/experiencias';
import sobremimData from '../data/sobremim.ts';
import type { SkillsDataType } from '../data/sobremim.ts';
import type { TeconologiasDataType } from '../data/sobremim.ts';
import educacaoData from '../data/educacao.ts';
import type { EducacaoDataType } from '../data/educacao.ts';
import Timeline from '../components/TimeLine/TimeLine';
import Card from '../components/Card/Card.tsx';

function Sobre() {
    const paragrafos: string[] = sobremimData.resumo.split('\n');

    return (
        <>
            <div className="row">
                <div className="col text-center">
                    <h1 className="text-3xl heading-main text-primary">Minha História</h1>
                    <p className="text-lg">
                        {paragrafos.map((paragrafo: string, index: number) => (
                            <p key={index} className="text-lg">{paragrafo}</p>
                        ))}
                    </p>
                </div>
            </div>
            <div className="section-divider"></div>
            <div className="row">
                <div className="col text-center">
                    <h2 className="text-2xl text-primary">Minha Jornada</h2>
                    <Timeline experiences={experienciasData} />
                </div>
            </div>
            <div className="section-divider"></div>
            <div className="row">
                <div className="col-6 text-center mb-3">
                    <Card style={{ maxWidth: '95%' }}>
                        <>
                            <h2 className="text-2xl heading-main text-primary">Certificados</h2>
                            {educacaoData.map((educacao: EducacaoDataType, index: number) => (
                                <>
                                    <h3 key={index} className="text-lg text-secondary">{educacao.curso}</h3>
                                    <span className="text-md">{educacao.local}</span>
                                    <span className="text-sm text-primary mb-3">{educacao.ano}</span>
                                </>
                            ))}
                        </>
                    </Card> 
                </div>
                <div className="col-6 text-center mb-3">
                    <Card style={{ maxWidth: '95%' }}>
                        <>
                            <h2 className="text-2xl heading-main text-primary">Habilidades</h2>
                            {sobremimData.skills.map((skill: SkillsDataType, index: number) => (
                                <>
                                    <h3 key={index} className="text-lg text-secondary">{skill.nivel}</h3>
                                    <div className="skills">
                                        {skill.tecnologias.map((tecnologias: TeconologiasDataType, i: number) => (                                        
                                            <>
                                                <img key={i} src={tecnologias.icone} alt={tecnologias.nome} className="icon-lg mb-1" />
                                            </>
                                        ))}
                                    </div>
                                </>
                            ))}
                        </>
                    </Card> 
                </div>
            </div>
        </>
    );
}

export default Sobre;

