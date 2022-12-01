import Navbar from './components/Navbar';

import { Outlet } from 'react-router-dom';



import { userForm } from 'react-hook-form';

import './App.css';

function App() {
 
 const { register, handleSubmit, formState: { erros } } = userForm()

  return (
    <div className="App">
      <Navbar />

       <main>
        <div className="card-post">
          <h1>Criar postagem</h1>
       <div className="line-post"></div>
       <div className="card-body-post">


       <form className="form_id">
                        
      <div className="user-details">
                            <div className="input-box">

                  
                                <span className="details">Nome</span>
                              <input className="nome"/>
                            </div>
                            <div className="input-box">
                                <span className="details">Sobrenome</span>
                                <input className="sobrenome"/>
                            </div>
                            <div className="input-box">
                                <span className="details">RG</span>
                                <input className="rg" />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input className="email" />
                            </div>
                            <div className="input-box">
                                <span cclassName="details">Senha</span>
                                <input  className="senha"/>
                            </div>
                            <div className="input-box">
                                <span className="details">Repetir senha</span>
                                <input type="password" className="repetir_senha"/>
                            </div> </div>

<div className="btn-post">
  <button type="submit">Enviar</button>
</div>

        </form>
       </div>
        </div>
       </main>

      <div className="container">
      <Outlet />
      </div>
    </div>
  );
}

export default App;
