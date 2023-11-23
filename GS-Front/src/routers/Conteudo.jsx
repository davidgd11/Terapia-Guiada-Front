import { } from 'react'
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom'

import '../assets/App.scss'

function Conteudo() {
  return (

    <div id='conteudo'>

      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>


        <h1 className='h1-princip'>Acesse nossos conteúdos</h1>

        <section id="cartoes">
        <div class="cartao">
          <div class="inside-cartao"> 
            <h1 className='h1-name'>Dependências</h1> 

            <h3 className='h3-sub'>Everything necessary to get started.</h3>

            <div id="parag">
              <p className="p3"> <i class="fa-solid fa-circle-check"></i>  Ajudas; </p>
              <p className="p3"> <i class="fa-solid fa-circle-check"></i> Exercícios mentais; </p>
              <p className="p3"> <i class="fa-solid fa-circle-check"></i>  Vídeos; </p>
              <p className="p3"> <i class="fa-solid fa-circle-check"></i>  Dicas; </p>
              <p className="p3"> <i class="fa-solid fa-circle-check"></i>  Conversas; </p>
              <p className="p3"> <i class="fa-solid fa-circle-check"></i>  Yoga; </p>
            </div>
            <Link className='link-conteudo' to='/dependencia'> <button>  Acessar </button> </Link> 
          </div>
        </div>


        <div class="cartao">
          <div class="inside-cartao"> 
            <h1 className='h1-name'>Depressão</h1>

            <h3 className='h3-sub'>Everything in Basic, plus business.</h3>

            <div id="parag">
              <p className="p3"> <i class="fa-solid fa-circle-check"></i>  Ajudas; </p>
              <p className="p3"> <i class="fa-solid fa-circle-check"></i> Exercícios mentais; </p>
              <p className="p3"> <i class="fa-solid fa-circle-check"></i>  Meditação; </p>
              <p className="p3"> <i class="fa-solid fa-circle-check"></i>  Dicas; </p>
              <p className="p3"> <i class="fa-solid fa-circle-check"></i>  Conversas; </p>
            </div>
            <Link className='link-conteudo' to='/depressao'> <button>  Acessar </button> </Link> 
            
        </div>
      </div>


        <div class="cartao">
          <div class="inside-cartao"> 
            <h1 className='h1-name'>Ansiedade</h1>

            <h3 className='h3-sub'>Everything in Essential.</h3>

            <div id="parag">
              <p className="p3"> <i class="fa-solid fa-circle-check"></i>  Ajudas; </p>
              <p className="p3"> <i class="fa-solid fa-circle-check"></i> Exercícios mentais; </p>
              <p className="p3"> <i class="fa-solid fa-circle-check"></i>  Dicas; </p>
              <p className="p3"> <i class="fa-solid fa-circle-check"></i>  Conversas; </p>
              <p className="p3"> <i class="fa-solid fa-circle-check"></i>  Meditação; </p>
            </div>
            <Link className='link-conteudo' to='/ansiedade'> <button>  Acessar </button> </Link> 
            
          </div>
        </div>

    </section>
    </div>
  )
}

export default Conteudo