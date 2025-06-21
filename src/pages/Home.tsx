import Computer from '../assets/computer.png';

function Home() {
  return (
    <> 
      <div className="row">
        <div className="col-6">
          <h1 className='text-3xl titulo'>Olá! Sou <br/><span className='primary'>Ana Carolina</span></h1>
          <h2 className='text-xl subtitulo secondary'>Desenvolvedora Full Stack</h2>
          <p className='text-lg'>
            Desenvolvedora Full Stack com experiência em sistemas ERP e vitrines virtuais, com forte atuação em PHP (Laravel) e bancos de dados MySQL. Atualmente ampliando conhecimentos em frameworks modernos como React e Vue.js para retomar atuação na área de programação.
          </p>
        </div>
        <div className="col-6">
          <img src={Computer} alt="" className='responsive-img'/>
        </div>
      </div>
    </>
  );
}

export default Home;

