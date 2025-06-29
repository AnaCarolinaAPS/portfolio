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

    return (
        <> 
        <div className="row">
            <div className="col-6">
                <h1 className="text-3xl heading-main text-primary">{projeto.titulo}</h1>          
                <h3 className="text-lg text-secondary mb-3">{projeto.status}</h3>
                <p className="text-xl">{projeto.resumo}</p>
                
                <div className="row mt-3 mb-3">
                    {projeto.links.map((item: LinksItemType, i) => (
                        <Botao key={i} href={item.href} className="btn-secondary" newTab>
                            <>
                                <span>{item.text}</span>
                            </>
                        </Botao>
                    ))} 
                </div>

                <div className="row mt-3 mb-3">
                    <h2 className="text-xl text-secondary mb-3">Tecnologias</h2>
                    <div className="habilidade">
                        {projeto.tecnologias.map((item: TecnologiasItemType, i) => (
                            <div key={i} className="habilidade-kit">
                                <img src={item.icone} alt={item.nome} className="habilidade-icon mb-1" />
                                <span>{item.nome}</span>
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
            <div className="col-6 text-center mb-3">
                <Card style={{ maxWidth: '95%' }}>
                    <>
                        <h2 className="text-2xl heading-main text-primary">Escopo</h2>
                        <p className="text-lg">
                            {projeto.descricao}
                        </p>
                    </>
                </Card> 
            </div>
            <div className="col-6 text-center mb-3">
                <Card style={{ maxWidth: '95%' }}>
                <>
                    <h2 className="text-2xl heading-main text-primary">Principais Recursos</h2>
                    {projeto.recursos.map((item: RecursosItemType, i) => (
                        <p key={i} className="text-lg">
                            {item.descricao}
                        </p>
                    ))}    
                </>
            </Card> 
            </div>
        </div>
        </>
    );
}

export default ProjetoDetalhes;

