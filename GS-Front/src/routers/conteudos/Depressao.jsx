import React from 'react';
import './Conteudos.scss';

import {Link} from 'react-router-dom'

const Depressao = () => {
  return (
    <>
        <div id='depressao'>

            <section className="introducao">
                <h1>Depressão</h1>
                <h2>Acesse um de nossos conteúdos que vão te ajudar.</h2>
            </section>

            <section id="cards">

                <aside className="categorias">
                    <img src="../../src/assets/imgs/atividades.avif" alt="Imagem de cigarro" />
                    <div className='inside-cat'>
                        <h1>Atividades!</h1>
                        <p>Conheça agora atividades que podem ser feitas para ter uma vida leve e saudável.</p>
                        <Link to='/acesso'  className='botao'> Acessar </Link>
                    </div>
                </aside>

                <aside className="categorias">
                    <img src="../../src/assets/imgs/meditacao.avif" alt="Imagem de cigarro" />
                    <div className='inside-cat'>
                        <h1>Meditação!</h1>
                        <p>Faça meditação para poder equilibrar a sua mente ao seu corpo.</p>
                        <Link to='/acesso'  className='botao'> Acessar </Link>
                    </div>
                </aside>

                <aside className="categorias">
                    <img src="../../src/assets/imgs/apoio.jpg" alt="Imagem de cigarro" />
                    <div className='inside-cat'>
                        <h1>Grupos de apoio!</h1>
                        <p>Faça novos amigos, converse, dê risada e aproveite os bons momentos juntos de pessoas que gostam de você.</p>
                        <Link to='/acesso'  className='botao'> Acessar </Link>
                    </div>
                </aside>

                <aside className="categorias">
                    <img src="../../src/assets/imgs/estudando.jpg" alt="Imagem de cigarro" />
                    <div className='inside-cat'>
                        <h1>Dicas!</h1>
                        <p>Acesse para ver ótimas formas de fazer com que sua mente não pare.</p>
                        <Link to='/acesso'  className='botao'> Acessar </Link>
                    </div>
                </aside>
            </section>

        </div>
    </>
  )
}

export default Depressao;