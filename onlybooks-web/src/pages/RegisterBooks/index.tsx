import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";
import "./style.css"; 
import RegisterGender from "../../components/RegisterGender";

const RegisterBooks = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [generos, setGeneros] = useState([]);
  const [generoSelecionado, setGeneroSelecionado] = useState(null);

  const [openModal, setOpenModal] = useState(false); // Controle do modal

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/GeneroLivro");
        setGeneros(response.data);
        console.log(generos);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const payload = {
        titulo: titulo,
        autor: autor,
        generoLivroId: generoSelecionado,
      };

      await axios.post("/api/Livro", payload);
      alert("Livro cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar o livro:", error);
      alert("Erro ao cadastrar o livro");
    }
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <NavBar />
      <div className="container-register">
        <div className="card-register">
          <h2>Cadastrar Livro</h2>
          <hr />
          {isLoading ? (
            <p>Carregando...</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="titulo">Título</label>
              <input
                id="titulo"
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
                placeholder="Digite o título do livro"
              />

              <label htmlFor="autor">Autor</label>
              <input
                id="autor"
                type="text"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                required
                placeholder="Digite o autor do livro"
              />

              <label htmlFor="genero">Gênero</label>
              <select
                id="genero"
                value={generoSelecionado || ""}
                onChange={(e: any) => setGeneroSelecionado(e.target.value)}
                required
              >
                <option value="" disabled>
                  Selecione um gênero
                </option>
                {generos.map((genero: any) => (
                  <option key={genero.id} value={genero.id}>
                    {genero.nome}
                  </option>
                ))}
              </select>

              <div className="button-div">
                <button type="submit" className="button-register">
                  Cadastrar
                </button>
              </div>

              <div className="button-div">
                <button
                  type="button"
                  className="button-gender"
                  onClick={handleOpenModal}
                >
                  Novo Genero
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <RegisterGender open={openModal} onClose={handleCloseModal} />
    </div>
  );
};

export default RegisterBooks;
