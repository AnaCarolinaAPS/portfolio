import Computer from '../assets/computer.png';
import resumoData from '../data/resumo';

function Home() {
  return (
    <> 
      <div className="row">
        <div className="col col-6">
          <h1 className='text-3xl titulo'>Olá! Sou <br/><span className='primary'>{resumoData.nome}</span></h1>
          <h2 className='text-xl subtitulo secondary'>{resumoData.profissao}</h2>
          <p className='text-lg'>
            {resumoData.resumo}
          </p>
        </div>
        <div className="col col-6">
          <img src={Computer} alt="" className='responsive-img'/>
        </div>
      </div>
    </>
  );
}

export default Home;

