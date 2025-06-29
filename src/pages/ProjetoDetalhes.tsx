import { useParams } from 'react-router-dom';
import projetosData from '../data/projetos'; // ajuste o caminho conforme necessário
import type { TecnologiasItemType } from '../data/projetos';
import Card from '../components/Card/Card.tsx';

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
                <h3 className="text-lg text-secondary mb-3">Em Desenvolvimento</h3>
                <p className="text-xl">{projeto.descricao}</p>
                <h2 className="text-xl text-secondary mb-3">Tecnologias</h2>
                <div className="col-6 habilidade">
                    {projeto.tecnologias.map((item: TecnologiasItemType, i) => (
                        <div key={i} className="habilidade-kit">
                            <img src={item.icone} alt={item.nome} className="habilidade-icon mb-1" />
                            <span>{item.nome}</span>
                        </div>
                    ))}
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
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In odio consequuntur magni quae sapiente, autem aspernatur, quas aliquid odit, velit voluptate cumque. Sunt quas unde, ducimus tempora hic veniam. Dolorum!
                        </p>
                    </>
                </Card> 
            </div>
            <div className="col-6 text-center mb-3">
                <Card style={{ maxWidth: '95%' }}>
                <>
                    <h2 className="text-2xl heading-main text-primary">Principais Recursos</h2>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis pariatur expedita perferendis repellendus magni, esse autem commodi inventore ea tenetur error quibusdam iste, omnis, eum eos. Ex, harum voluptas.
                    </p>
                </>
            </Card> 
            </div>
        </div>
        </>
    );
}

export default ProjetoDetalhes;

