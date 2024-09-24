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
        const response = await axios.get(
          "https://onlybookscontainerapp.yellowocean-3bc779a1.northeurope.azurecontainerapps.io/Livro"
        );
        setBooks(response.data);
        console.log(books);
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <Grid
        container
        spacing={2}
        style={{ padding: "16px", marginTop: "64px", justifyContent: "center" }} // Centraliza os cards
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
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Books;
