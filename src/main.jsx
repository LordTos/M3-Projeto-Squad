import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

// Paginas
import Cadastro from './routes/Cadastro'
import Home from './routes/Home'
import Produtos from './routes/Produtos'
import DadosClientes from './routes/DadosClientes'
import Login from './routes/Login'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
       path: "/",
       element: <Home />
      },
      {
        path: "/produtos",
        element: <Produtos />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
      {
        path: "/dadosclientes",
        element: <DadosClientes />
      },
      {
        path: "*",
        element: <Cadastro /> 
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
