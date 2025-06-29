import projetosData from '../data/projetos';
import type { ProjetosDataType } from '../data/projetos';
import ProjectCard from '../components/ProjectCard/ProjectCard';

function Projetos() {
    return (
        <> 
            <div className="row">
                <div className="col">
                    <h1 className="text-3xl heading-main text-primary">Meus Projetos</h1>  
                </div>
            </div>
            <div className="row text-center">
                {projetosData.map((proj: ProjetosDataType) => (
                    <div className="col-4 mb-4">
                        <ProjectCard
                            key={proj.id}
                            image={proj.imagem}
                            title={proj.titulo}
                            description={proj.resumo}
                            detailsLink={`/projects/${proj.id}`}
                        />
                    </div>
                ))}   
            </div>
        </>
    );
}

export default Projetos;

