import Computer from '../assets/computer.png';
import resumoData from '../data/resumo';

function Home() {
  return (
    <> 
      <div className="row">
        <div className="col-6 v-center">
          <h1 className='text-3xl heading-main'>Olá! Sou <br/><span className='text-primary'>{resumoData.nome}</span></h1>
          <h2 className='text-xl heading-sub text-secondary'>{resumoData.profissao}</h2>
          <p className='text-lg'>
            {resumoData.resumo}
          </p>
        </div>
        <div className="col-6 v-center">
          <img src={Computer} alt="" className='responsive-img'/>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos non hic et, dolore ea voluptatibus reiciendis minima molestiae tempore totam magni rerum fuga ex aliquam voluptates amet nulla optio.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos non hic et, dolore ea voluptatibus reiciendis minima molestiae tempore totam magni rerum fuga ex aliquam voluptates amet nulla optio.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos non hic et, dolore ea voluptatibus reiciendis minima molestiae tempore totam magni rerum fuga ex aliquam voluptates amet nulla optio.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos non hic et, dolore ea voluptatibus reiciendis minima molestiae tempore totam magni rerum fuga ex aliquam voluptates amet nulla optio.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos non hic et, dolore ea voluptatibus reiciendis minima molestiae tempore totam magni rerum fuga ex aliquam voluptates amet nulla optio.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos non hic et, dolore ea voluptatibus reiciendis minima molestiae tempore totam magni rerum fuga ex aliquam voluptates amet nulla optio.</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos non hic et, dolore ea voluptatibus reiciendis minima molestiae tempore totam magni rerum fuga ex aliquam voluptates amet nulla optio.</p>
      </div>
    </>
  );
}

export default Home;

