import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './routers/Home.jsx'
import Conteudo from './routers/Conteudo.jsx'
import Login from './routers/Login.jsx'
import SobreNos from './routers/SobreNos.jsx'
import Dependencia from './routers/conteudos/Dependencia.jsx'
import Depressao from './routers/conteudos/Depressao.jsx'
import Ansiedade from './routers/conteudos/Ansiedade.jsx'
import Oque from './routers/Oque.jsx'
import Acesso from './routers/conteudos/Acessos/Acesso.jsx'
import Consultar from './routers/conteudos/Acessos/Consultar.jsx'


const router = createBrowserRouter([

{
  path:'/' , element:<App/>,

  children:[
    {path:'/', element: <Home/>},
    {path:'/login', element: <Login/>},
    {path:'/SobreNos', element: <SobreNos/>},
    {path:'/conteudo',element: <Conteudo/>},
    {path:'/dependencia', element: <Dependencia/>},
    {path:'/depressao', element:<Depressao/>},
    {path:'/ansiedade', element: <Ansiedade/>},
    {path:'/oque', element: <Oque/>},
    {path:'/acesso', element: <Acesso/>},
    {path:'/consultar', element: <Consultar/>}
  ]
}

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
