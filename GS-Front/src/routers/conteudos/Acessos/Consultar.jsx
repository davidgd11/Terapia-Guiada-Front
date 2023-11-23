import React from 'react'

import './Consultar.scss'

const Consultar = () => {
  return (
    <div id='consultar'>
        <h1>*Nome da dependência*</h1>

        <section id='motivos'>
          <div>
            <h1>10 motivos de porquê você deve parar com esse vício:</h1>
            <div id="p">
              <div>
              <p>1. Lorem ipsum dolor sit amet.</p>
              <p>2. Lorem ipsum dolor sit amet.</p>
              <p>3. Lorem ipsum dolor sit amet.</p>
              <p>4. Lorem ipsum dolor sit amet.</p>
              <p>5. Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p>6. Lorem ipsum dolor sit amet.</p>
              <p>7. Lorem ipsum dolor sit amet.</p>
              <p>8. Lorem ipsum dolor sit amet.</p>
              <p>9. Lorem ipsum dolor sit amet.</p>
              <p>10. Lorem ipsum dolor sit amet.</p>
            </div>
            </div>
          </div>

          <img src="#" alt="Imagem" />
        </section>



        <section id='como'>
          <h1>Como saber se você é um dependente?</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt earum qui facilis recusandae ab fuga alias dolores reiciendis nulla similique! Architecto impedit accusantium obcaecati incidunt asperiores, et cum blanditiis deleniti maxime eaque repellendus saepe assumenda amet deserunt excepturi tempora laudantium.</p>
          <h1>Como parar?</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam perspiciatis molestias, quae nobis laudantium veritatis impedit iste error iusto, asperiores aperiam ex qui beatae, totam quam accusantium necessitatibus. Rerum voluptates nam dicta blanditiis temporibus deleniti! Beatae vero eius nam asperiores natus quidem exercitationem at odio maiores pariatur. Assumenda, quidem atque!</p>
        </section>

        <section id='video'>
          <h1>Como o seu corpo fica depois de alguns dias sem usar:</h1>
          <video width={720} height={360} controls>
            <source src='a' type='video/mp4' />
          </video>
        </section>



        <section id='oq'>
          <div>
            <h1>O que deve ser feito:</h1>
            <p>1. Lorem ipsum dolor sit amet consectetur.</p>
            <p>2. Lorem ipsum dolor sit amet consectetur.</p>
            <p>3. Lorem ipsum dolor sit amet consectetur.</p>
            <p>4. Lorem ipsum dolor sit amet consectetur.</p>
            <p>5. Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <i class="fa-solid fa-x"></i>

          <div>
            <h1>O que não deve ser feito:</h1>
            <p>1. Lorem ipsum dolor sit amet consectetur.</p>
            <p>2. Lorem ipsum dolor sit amet consectetur.</p>
            <p>3. Lorem ipsum dolor sit amet consectetur.</p>
            <p>4. Lorem ipsum dolor sit amet consectetur.</p>
            <p>5. Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </section>



        <section id='ajuda'>
          <h1>Se você precisa de uma ajuda, entre em contato com um de nossos profissionais.</h1>
          <p> <i class="fa-solid fa-phone"></i> (11)91234-5678</p>
          <p> <i class="fa-solid fa-phone"></i> (12)99876-5432</p>
          <p> <i class="fa-solid fa-phone"></i> (11)9988-7766</p>
        </section>

    </div>
  )
}

export default Consultar;