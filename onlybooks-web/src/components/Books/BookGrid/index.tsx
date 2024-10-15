import React from "react";
import { Grid } from "@mui/material";
import { BookGridProps } from "../../../types/booksType";
import SelectedBookCard from "../SelectedBookCard";

const BookGrid: React.FC<BookGridProps> = ({
  books,
  selectedBooks,
  onBookSelect,
}) => {
  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={book.id}
          style={{
            display: "flex",
            paddingTop: "16px",
            paddingLeft: "16px",
            justifyContent: "center",
          }}
          container
        >
          <SelectedBookCard
            id={book.id}
            title={book.titulo}
            author={book.autor}
            genre={book.genero.nome}
            isSelected={selectedBooks.some(
              (selectedBook) => selectedBook.id === book.id
            )}
            onClick={() => onBookSelect(book)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookGrid;
