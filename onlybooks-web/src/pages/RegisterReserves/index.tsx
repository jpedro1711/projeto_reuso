import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { Button } from "@mui/material";
import { useFetchBooks } from "../../hooks/useFetchBooks";
import { filterBooks } from "../../utils/bookUtils";
import SearchBar from "../../components/SearchBar";
import BookGrid from "../../components/Books/BookGrid";
import { Book } from "../../types/booksType";
import useFormSubmitReserve from "../../hooks/useSubmitReserves";

const RegisterReserve: React.FC = () => {
  const { loadingSubmit, returnMsg, success, submit } = useFormSubmitReserve();
  const { books, loading } = useFetchBooks();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedBooks, setSelectedBooks] = useState<Book[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleBookSelect = (book: Book) => {
    const isAlreadySelected = selectedBooks.some(
      (selectedBook) => selectedBook.id === book.id
    );

    if (isAlreadySelected) {
      setSelectedBooks(
        selectedBooks.filter((selectedBook) => selectedBook.id !== book.id)
      );
    } else {
      setSelectedBooks([...selectedBooks, book]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const payload = {
      usuarioId: 12,
      livrosIds: selectedBooks.map((book) => book.id),
    };
    await submit(payload);

    if (success) {
      setSelectedBooks([]);
    }
  };
  useEffect(() => {
    if (returnMsg) {
      alert(returnMsg);
      console.log(`Post ${returnMsg}`);
    }
  }, [returnMsg]);

  if (loading && loadingSubmit) return <p>Loading...</p>;

  const filteredBooks = filterBooks(books, searchQuery);

  return (
    <div>
      <NavBar />
      <SearchBar
        searchPlaceholder="Search Books"
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <BookGrid
        books={filteredBooks}
        selectedBooks={selectedBooks}
        onBookSelect={handleBookSelect}
      />

      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={selectedBooks.length === 0}
        >
          Cadastrar Reserva
        </Button>
      </div>
    </div>
  );
};

export default RegisterReserve;
