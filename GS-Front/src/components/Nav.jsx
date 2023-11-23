import { useState,  useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

import '../assets/Nav.scss';

function Nav() {

    const[userLogado] = useState(JSON.parse(sessionStorage.getItem("usuarioLogado")))

    const handleLogout= ()=>{
        sessionStorage.removeItem("usuarioLogado")
        window.location.reload();
    }


    const [modoEscuro, setModoEscuro] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (modoEscuro) {
      body.classList.add('dark-mode'); // Adicione a classe para o modo escuro
    } else {
      body.classList.remove('dark-mode'); // Remova a classe para o modo claro
    }
  }, [modoEscuro]);

  const toggleModo = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <div id='all'> 

      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>

      <div style={userLogado == null ? {display:"none"}: {display:"block"}}>
        <p id='user-logado'>{userLogado !=null ? `Seja bem-vindo ${userLogado.usuario}!`:""}</p>
      </div>

      <div id="nav">
        <img src="../../src/assets/imgs/Logo.svg" alt="Logo"/>

        <div id='links'>
          <Link className='link' to="/"> Home </Link>
          <Link to='/conteudo' className='link'>Conteúdo</Link>
          <Link to='/sobreNos' className='link'>Sobre nós</Link>
          <Link to='/oque' className='link'>O que é</Link>
          <Link className='link' to="/login">Login</Link>

          <div style={userLogado == null ? {display:"none"}: {display:"block"}}>
            <button id='botao-logout' onClick={handleLogout}>Sair</button>
          </div>

          <button onClick={toggleModo}>
            {modoEscuro ? (
              <i className="fas fa-sun mode-icon"></i> 
            ) : (
              <i className="fas fa-moon mode-icon"></i> 
            )}
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default Nav;