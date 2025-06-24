import { useParams } from 'react-router-dom';
import projetosData from '../data/projetos'; // ajuste o caminho conforme necessário

function ProjetoDetalhes() {
  const { id } = useParams();
  const projeto = projetosData.find(proj => proj.id === id);

  if (!projeto) {
    return <h2>Projeto não encontrado</h2>;
  }

  return (
    <> 
      <div className="row">
        <div className="col">
          <h1 className='text-3xl heading-main text-secondary'>Detalhes Projetos</h1>
          <h2>{projeto.titulo}</h2>
        </div>
      </div>
    </>
  );
}

export default ProjetoDetalhes;

