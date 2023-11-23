import React from 'react';
import './Conteudos.scss';

import {Link} from 'react-router-dom'

import Consultar from './Acessos/Consultar';

const Dependencia = () => {

  return (
    <>
        <div id='dependencias'>

            <section className="introducao">
                <h1>Dependências</h1>
                <h2>Selecione a sua dependência abaixo para poder proseguir para o próximo passo.</h2>
            </section>

            <section id="cards">

                <aside className="categorias">
                    <img src="../../src/assets/imgs/proibido-fumar.jpg" alt="Imagem de cigarro" />
                    <div className='inside-cat'>
                        <h1>Cigarro/Tabaco</h1>
                        <p>Saiba todos os segredos para poder parar de fumar e ter uma vida leve e saudável.</p>
                        <Link to='/consultar'  className='botao'> Consultar </Link>                    </div>
                </aside>

                <aside className="categorias">
                    <img src="../../src/assets/imgs/proibido-beber.avif" alt="Imagem de cigarro" />
                    <div className='inside-cat'>
                        <h1>Bebidas alcóolicas</h1>
                        <p>Saiba todos os segredos para poder parar de beber e ter uma vida leve e saudável.</p>
                        <Link to='/consultar'  className='botao'> Consultar </Link>
                    </div>
                </aside>

                <aside className="categorias">
                    <img src="../../src/assets/imgs/proibido-drogas.avif" alt="Imagem de cigarro" />
                    <div className='inside-cat'>
                        <h1>Drogas ilícitas</h1>
                        <p>Saiba todos os segredos para poder parar de usar drogas e ter uma vida leve e saudável.</p>
                        <Link to='/consultar'  className='botao'> Consultar </Link>                   
                    </div>
                </aside>

                <aside className="categorias">
                    <img src="../../src/assets/imgs/proibido-jogar.jpg" alt="Imagem de cigarro" />
                    <div className='inside-cat'>
                        <h1>Jogos de azar</h1>
                        <p>Saiba todos os segredos para poder parar de jogar e ter uma vida leve e saudável.</p>
                        <Link to='/consultar'  className='botao'> Consultar </Link>                    
                    </div>
                </aside>
            </section>

        </div>
    </>
  )
}

export default Dependencia;