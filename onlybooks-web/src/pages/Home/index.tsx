import React from 'react';
import NavBar from '../../components/NavBar';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Importando o CSS

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className="home-container">

        <section className="hero-section">
          <h1>Bem-vindo ao OnlyBooks</h1>
          <p>Plataforma de gestão de biblioteca universitária para empréstimos, reservas e muito mais.</p>
          <hr />
        </section>


        <section className="cards-section">
          <div className="cards-container">
            <div className="card" onClick={() => navigate('/borrows')}>
              <h3>Empréstimo de Livros</h3>
              <p>Gerencie os empréstimos de livros de forma fácil e rápida, com histórico detalhado.</p>
            </div>
            <div className="card" onClick={() => navigate('/reserve')}>
              <h3>Reservas Online</h3>
              <p>Permita que os alunos reservem livros antecipadamente e garantam sua leitura.</p>
            </div>
            <div className="card" onClick={() => navigate('/books')}>
              <h3>Administração do Acervo</h3>
              <p>Controle e organize o acervo da biblioteca com ferramentas completas de gestão.</p>
            </div>
          </div>
        </section>


        <section className="contact-section">
          <h2>Contato</h2>
          <p>Tem dúvidas ou sugestões? Entre em contato conosco pelo email <a href="mailto:support@onlybooks.com">support@onlybooks.com</a>.</p>
        </section>


        <footer className="footer">
          <p>&copy; 2024 OnlyBooks. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
