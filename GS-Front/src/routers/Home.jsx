import { } from 'react'

import '../assets/App.scss';

import Conteudo from './Conteudo';
import SobreNos from './SobreNos';
import Footer from '../components/Footer';
import Oque from './Oque';

function Home() {
  return (

    <div id='home'>

      <div id="principal">
        <aside id="container">
          <h1 id='h1-principal'>Terapia Guiada</h1>
          <p>Aqui seus problemas acabam, vícios, depressão e tudo o que te deixa para baixo...</p>
        </aside>
      </div>

        <Conteudo/>
        <SobreNos/>
        <Oque/>
        <Footer/>
    </div>
  )
}

export default Home