import React from 'react';
import './style.css'; // Certifique-se de que o arquivo CSS está correto

const Login = () => {
  return (
    <div className="login-container">
      <div className="left-column">
        <h1>Bem-vindo ao OnlyBooks</h1>
        <p>Biblioteca Inteligente: Onde Cada Livro Conta uma História</p>
      </div>
      <div className="right-column">
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" required />
          </div>
          <button className='button-submit' type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
