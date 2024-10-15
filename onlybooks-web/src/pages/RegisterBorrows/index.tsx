import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { Button } from "@mui/material";
import SearchBar from "../../components/SearchBar";
import { useFetchReserve } from "../../hooks/useFetchReserve";
import ReserveGrid from "../../components/Reserve/ReserveGrid";
import { filterReserves } from "../../utils/reserveUtils";
import { Reserve } from "../../types/reserveType";
import useSubmitBorrows from "../../hooks/useSubmitBorrows";

const RegisterBorrows: React.FC = () => {
  const { loadingSubmit, returnMsg, success, submit } = useSubmitBorrows();
  const { reserves, loading } = useFetchReserve();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const nullReserve: Reserve = {
    id: -1,
    statusReserva: 0,
    dataReserva: new Date(0),
    usuarioId: -1,
    usuario: {
      id: -1,
      nome: "No User",
      email: "no-user@gmail.com",
      senha: "",
      tipoUsuario: 0,
    },
    livros: [],
  };
  const [selectedReserve, setSelectedReserve] = useState<Reserve>(nullReserve);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleReserveSelect = (reserve: Reserve) => {
    if (selectedReserve === null) {
      setSelectedReserve(reserve);
    } else if (selectedReserve.id === reserve.id) {
      setSelectedReserve(nullReserve);
    } else {
      setSelectedReserve(reserve);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await submit(selectedReserve.id);
    if (success) {
      setSelectedReserve(nullReserve);
    }
  };

  useEffect(() => {
    if (returnMsg) {
      alert(returnMsg);
      console.log(`Post ${returnMsg}`);
    }
  }, [returnMsg]);

  if (loading) return <p>Loading...</p>;

  const filteredReserves = filterReserves(reserves, searchQuery);

  return (
    <div>
      <NavBar />
      <SearchBar
        searchPlaceholder="Search Reserves"
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <ReserveGrid
        reserves={filteredReserves}
        selectedReserve={selectedReserve}
        onReserveSelect={handleReserveSelect}
      />

      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={selectedReserve.id === nullReserve.id || loadingSubmit}
        >
          {loadingSubmit ? "Submitting..." : "Habilitar Emprestimo"}
        </Button>
        
      </div>
    </div>
  );
};

export default RegisterBorrows;
