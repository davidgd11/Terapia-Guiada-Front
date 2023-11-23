import React from 'react';
import './Conteudos.scss';

import {Link} from 'react-router-dom'

const Ansiedade = () => {
  return (
    <>
    <div id='ansiedade'>

        <section className="introducao">
            <h1>Ansiedade</h1>
            <h2>Escolha abaixo para poder proseguir para o próximo passo.</h2>
        </section>

        <section id="cards">

            <aside className="categorias">
                <img src="../../src/assets/imgs/atividade-fisica.webp" alt="Imagem de cigarro" />
                <div className='inside-cat'>
                    <h1>Atividades físicas</h1>
                    <p>Atividades físicas podem te ajudar em diversas coisas! Acesse para ver mais.</p>
                    <Link to='/acesso'  className='botao'> Acessar </Link>
                </div>
            </aside>

            <aside className="categorias">
                <img src="../../src/assets/imgs/meditacao.avif" alt="Imagem de cigarro" />
                <div className='inside-cat'>
                    <h1>Meditação</h1>
                    <p>Faça meditação para poder equilibrar a sua mente ao seu corpo.</p>
                    <Link to='/acesso'  className='botao'> Acessar </Link>
                </div>
            </aside>

            <aside className="categorias">
                <img src="../../src/assets/imgs/terapia.png" alt="Imagem de cigarro" />
                <div className='inside-cat'>
                    <h1>Terapia</h1>
                    <p>Faça terapia para conversar com profissionais da saúde que entendem sobre a mente humana.</p>
                    <Link to='/acesso'  className='botao'> Acessar </Link>
                </div>
            </aside>

            <aside className="categorias">
                <img src="../../src/assets/imgs/relaxamento.jpg" alt="Imagem de cigarro" />
                <div className='inside-cat'>
                    <h1>Relaxamento mental</h1>
                    <p>Saiba todos os segredos para poder ter uma vida leve e saudável.</p>
                    <Link to='/acesso'  className='botao'> Acessar </Link>
                </div>
            </aside>
        </section>

    </div>
</>
  )
}

export default Ansiedade;