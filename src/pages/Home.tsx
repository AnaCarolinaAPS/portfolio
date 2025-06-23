import { NavLink } from 'react-router-dom';
import Computer from '../assets/computer.png';
import resumoData from '../data/resumo.ts';
import habilidadeData from '../data/habilidades.ts';
import sobremimData from '../data/sobremim.ts';
import projetosData from '../data/projetos.ts';
import ProjectCard from '../components/ProjectCard/ProjectCard';

function Home() {

    const paragrafos: string[] = sobremimData.resumo.split('\n');
    const projetosDestaque = projetosData.slice(0, 3); // Coleção dos 3 primeiros projetos (DESTAQUE)
    
    interface ContatoItem {
        nome: string;
        link: string;
        icone: string;
    }

    interface HabilidadeItem {
        nome: string;
        icone: string;
    }

    interface HabilidadeCategoria {
        categoria: string;
        itens: HabilidadeItem[];
    }

    interface ProjetosDataType {
        id: string;
        titulo: string;
        imagem: string;
        resumo: string;
        descricao: string;
    }
    
    return (
        <> 
            <div className="row">
                <div className="col-6 v-center">
                    <h1 className='text-4xl heading-main'>Olá! Sou <br/><span className='text-primary'>{resumoData.nome}</span></h1>
                    <h2 className='text-xl heading-sub text-secondary'>{resumoData.profissao}</h2>
                    <p className='text-lg'>
                        {resumoData.resumo}
                    </p>
                </div>
                <div className="col-6 v-center">
                    <img src={Computer} alt="" className='responsive-img'/>
                </div>        
            </div>
            <div className="section-divider"></div>
            <section className="sobremim">
                <div className="row text-center">
                    <div className="col">
                        <h2 className='text-3xl text-primary mb-5'>Sobre Mim</h2>
                        {paragrafos.map((paragrafo: string, index: number) => (
                            <p key={index} className="text-lg text-justify">{paragrafo}</p>
                        ))}
                    </div>       
                </div>
                <div className="row">
                    <div className="col-12 align-center">
                        <a href={sobremimData.linkcv} download="Ana-CV.pdf" className="btn-download">
                            <span>Baixar CV</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
                                <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
                                <path d="M17 18h2" />
                                <path d="M20 15h-3v6" />
                                <path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 align-center">
                        {sobremimData.itens.map(( item: ContatoItem , index: number) => (
                            <div key={index} className="sobremim-icon ml-2 text-primary">
                                <a href={item.link} target="_blank"><img src={item.icone} /></a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="section-divider"></div>
            <section className="habilidades">
                <div className="row text-center">
                    <div className="col">
                        <h2 className='text-3xl text-secondary mb-5'>Habilidades</h2>
                    </div>       
                </div>
                {habilidadeData.map(( hab: HabilidadeCategoria, index: number) => (
                    <div key={index} className="row mt-5">
                        <div className="col-6 mb-4">
                            <h2 className='text-xl text-uppercase'>{hab.categoria}</h2>
                        </div>
                        <div className="col-6 habilidade">
                            {hab.itens.map((item: HabilidadeItem, i) => (
                                <div key={i} className="habilidade-kit">
                                    <img src={item.icone} alt={item.nome} className="habilidade-icon mb-1" />
                                    <span>{item.nome}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
            <div className="section-divider"></div>
            <section className="projetos">
                <div className="row text-center">
                    <div className="col">
                        <h2 className='text-3xl text-primary mb-5'>Projetos</h2>
                    </div>       
                </div>

                <div className="row text-center">
                    {projetosDestaque.map((proj: ProjetosDataType) => (
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

                <div className="row text-center mt-3 mb-5">
                    <div className="col-12">
                        <NavLink 
                            to="/projetos" 
                            className="btn-download" 
                        >
                            <span>Todos os Projetos</span>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

