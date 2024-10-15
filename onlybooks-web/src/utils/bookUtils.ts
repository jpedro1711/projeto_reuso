import { Book } from "../types/booksType";

export const filterBooks = (books: Book[], searchQuery: string) => {
  return books.filter(
    (book) =>
      (book.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.autor.toLowerCase().includes(searchQuery.toLowerCase())) &&
      book.status !== 1
  );
};
