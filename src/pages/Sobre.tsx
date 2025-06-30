import experienciasData from '../data/experiencias';
import Timeline from '../components/TimeLine/TimeLine';
import sobremimData from '../data/sobremim.ts';
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
                            <p key={index} className="text-lg text-justify">{paragrafo}</p>
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
                            <h2 className="text-2xl heading-main text-primary">Formação Acadêmica e Certificados</h2>
                        </>
                    </Card> 
                </div>
                <div className="col-6 text-center mb-3">
                    <Card style={{ maxWidth: '95%' }}>
                        <>
                            <h2 className="text-2xl heading-main text-primary">Habilidades</h2>
                        </>
                    </Card> 
                </div>
            </div>
        </>
    );
}

export default Sobre;

