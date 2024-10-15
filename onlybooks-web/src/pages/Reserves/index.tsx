import React, {useState } from "react";
import NavBar from "../../components/NavBar";
import { useFetchReserve } from "../../hooks/useFetchReserve";
import ReserveGrid from "../../components/Reserve/ReserveGrid";
import { Reserve } from "../../types/reserveType";

const Reserves: React.FC = () => {
  const { reserves, loading } = useFetchReserve();
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
  const [selectedReserve] = useState<Reserve>(nullReserve);

  const handleReserveSelect = () => {
    return;
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <NavBar />
      <div
        style={{
          padding: "16px",
          marginTop: "64px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ReserveGrid
          reserves={reserves}
          selectedReserve={selectedReserve}
          onReserveSelect={handleReserveSelect}
        />
      </div>
    </div>
  );
};

export default Reserves;
