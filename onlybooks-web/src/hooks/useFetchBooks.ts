import { useState, useEffect } from "react";
import axios from "axios";
import { Book } from "../types/booksType";

export const useFetchBooks = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/Livro");
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { books, loading };
};
