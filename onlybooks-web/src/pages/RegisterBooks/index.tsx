import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";
import "./style.css"; // Importando o arquivo CSS

const RegisterBooks = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [generos, setGeneros] = useState([]);
  const [generoSelecionado, setGeneroSelecionado] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://onlybookscontainerapp.yellowocean-3bc779a1.northeurope.azurecontainerapps.io/GeneroLivro"
        );
        setGeneros(response.data);
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

      await axios.post(
        "https://onlybookscontainerapp.yellowocean-3bc779a1.northeurope.azurecontainerapps.io/Livro",
        payload
      );
      alert("Livro cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar o livro:", error);
      alert("Erro ao cadastrar o livro");
    }
  };

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
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterBooks;
