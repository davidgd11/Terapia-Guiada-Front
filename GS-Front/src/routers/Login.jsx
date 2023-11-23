import {useState} from 'react'

import '../assets/Login.scss'


function Login() {

    //Hook-usestatte
    const [usuario, setUsuario]= useState({
        usuario:"",
        senha:"",
    })

    //função handleChange

    const handleChange = async (e)=>{
    const {name, value}=e.target;
    setUsuario({...usuario,[name]:value})
    } 

    //função handlesubmit

    const handleSubmit =async (e)=>{
        e.preventDefault();

        let user;

        try{
            const response = await fetch(" http://localhost:5000/usuarios");
            if(response.ok){
                const users = await response.json();

                for (let i=0; i < users.length;i++){
                    const use =users[i];
                    user = use;

                    if(use.usuario==usuario.usuario  && use.senha == usuario.senha){
                        user =use;
                        break;
                    }
                 
                }
            }
            if(user){
                sessionStorage.setItem('usuarioLogado', JSON.stringify(user));

                setTimeout(()=>{
                    window.location='/';
                },3000)
            }else{
                alert("Usuario/senha Invalidos")
                    setUsuario({
                        usuario:"",
                        senha:"",
                    })
                    window.location ="/login";
                }
            }
        catch(error){
            console.log(error)
        }
    }

    const[userLogado] = useState(JSON.parse(sessionStorage.getItem("usuarioLogado")))

    const handleLogout= ()=>{
        sessionStorage.removeItem("usuarioLogado")
        window.location.reload();
    }


  return (
    <div id='login'>


        <img src="../src/assets/imgs/Yoga.jpg" alt="Yoga foto" />
    <section id='formulario'>
        
        
        <h1>Login</h1>

        <h2>Conecte-se conosco!</h2>

        <form onSubmit={handleSubmit}>

            <p id='p-entrar'>Entrar</p>
        
            <div id='user'>
                <label htmlFor='idUsuario'></label>
                <input
                type="text"
                name="usuario"
                value={usuario.usuario}
                placeholder="Digite seu usuário:"
                onChange={handleChange}
                required
                />
            </div>

            <div id='senha'>
                <label htmlFor='idSenha'></label>
                <input
                type="password"
                name="senha"
                value={usuario.senha}
                placeholder="Digite sua senha:"
                onChange={handleChange}
                required
                />
            </div>
            

            <button id='submit' type="submit">Conectar</button>

            <div style={userLogado == null ? {display:"none"}: {display:"block"}}>
                <button id='botao-logout-login' onClick={handleLogout}>Desconectar</button>
            </div>
        </form>

        
        
    </section>
  
    </div>
  )
}

export default Login;