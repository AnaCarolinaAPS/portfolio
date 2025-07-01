import { useParams } from 'react-router-dom';
import projetosData from '../data/projetos'; // ajuste o caminho conforme necessário
import type { TecnologiasItemType } from '../data/projetos';
import type { RecursosItemType } from '../data/projetos';
import type { LinksItemType } from '../data/projetos';
import Card from '../components/Card/Card.tsx';
import Botao from '../components/Botao/Botao.tsx';

function ProjetoDetalhes() {
    const { id } = useParams();
    const projeto = projetosData.find(proj => proj.id === id);

    if (!projeto) {
        return <h2>Projeto não encontrado</h2>;
    }

    const paragrafos: string[] = projeto.descricao.split('\n');

    return (
        <> 
        <div className="row">
            <div className="col-6">
                <h1 className="text-3xl heading-main text-primary">{projeto.titulo}</h1>          
                <h3 className="text-lg text-secondary mb-3">{projeto.status}</h3>
                <p className="text-xl">{projeto.resumo}</p>
                
                <div className="row mt-4 mb-4">
                    {projeto.links.map((item: LinksItemType, i) => (
                        <div className="mr-3">
                            <Botao key={i} href={item.href} className="btn-secondary" newTab size="grande">
                                <>
                                    <span>{item.text}</span>
                                </>
                            </Botao>
                        </div>
                    ))} 
                </div>
                <div className="row mt-4 mb-4">
                    <h2 className="text-xl text-secondary mb-3 mr-3">Tecnologias</h2>
                    <div className="habilidade">
                        {projeto.tecnologias.map((item: TecnologiasItemType, i) => (
                            <div key={i} className="ml-2">
                                <img src={item.icone} alt={item.nome} className="icon-lg mb-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="">
                    <img src={projeto.imagem} alt={projeto.titulo} />
                </div>
            </div>
        </div>
        <div className="row">
            {projeto.descricao?.trim() && (
                <div className="col-6 text-center mb-4">
                    <Card style={{ maxWidth: '95%' }}>
                        <>
                            <h2 className="text-2xl heading-main text-primary">Escopo</h2>
                            {paragrafos.map((paragrafo: string, index: number) => (
                                <p key={index} className="text-md text-center">{paragrafo}</p>
                            ))}
                        </>
                    </Card> 
                </div>
            )}
            {projeto.recursos?.length > 0 && (
                <div className="col-6 text-center mb-4">
                    <Card style={{ maxWidth: '95%' }}>
                        <>
                            <h2 className="text-2xl heading-main text-primary">Principais Recursos</h2>
                            {projeto.recursos.map((item: RecursosItemType, i) => (
                                <span key={i} className="text-lg mb-3">
                                    {item.descricao}
                                </span>
                            ))}    
                        </>
                    </Card> 
                </div>
            )}
        </div>
        </>
    );
}

export default ProjetoDetalhes;

