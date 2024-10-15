import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";
import { Grid } from "@mui/material";
import BookCard from "../../components/Books/BookCard";

const Books = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/Livro");
        setBooks(response.data);
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteBook = async (id: number) => {
    try {
      await axios.delete(`/api/Livro?id=${id}`);
      setBooks(books.filter((book: any) => book.id !== id));
    } catch (error) {
      console.error("Erro ao excluir o livro:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <Grid
        container
        spacing={2}
        style={{ padding: "16px", marginTop: "64px", justifyContent: "center" }} 
      >
        {books.map((book: any) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={book.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <BookCard
              id={book.id}
              title={book.titulo}
              author={book.autor}
              genre={book.genero.nome}
              status={book.status}
              onDelete={handleDeleteBook} 
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Books;
