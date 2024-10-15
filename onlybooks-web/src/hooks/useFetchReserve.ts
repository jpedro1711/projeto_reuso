import { useState, useEffect } from "react";
import axios from "axios";
import { Reserve } from "../types/reserveType";

export const useFetchReserve = () => {
  const [loading, setLoading] = useState(true);
  const [reserves, setReserves] = useState<Reserve[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/Reserva");
        setReserves(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { reserves, loading };
};
