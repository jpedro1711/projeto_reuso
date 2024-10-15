import { useState, useEffect } from "react";

export const useFetchBorrows = () => {
  const [loading, setLoading] = useState(true);
  const [borrows, setBorrows] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://onlybooksbffcontainerapp.yellowocean-3bc779a1.northeurope.azurecontainerapps.io/Emprestimos");
        const data = await response.json()
        setBorrows(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { borrows, loading };
};
