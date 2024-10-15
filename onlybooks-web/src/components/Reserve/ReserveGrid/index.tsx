import React from "react";
import { Grid } from "@mui/material";
import ReserveCard from "../ReserveCard";
import { Reserve, ReserveGridProps } from "../../../types/reserveType";

const ReserveGrid: React.FC<ReserveGridProps> = ({
  reserves,
  selectedReserve,
  onReserveSelect,
}) => {
  return (
    <Grid container spacing={2}>
      {reserves.map((reserve: Reserve) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={reserve.id}
          style={{
            display: "flex",
            paddingTop: "16px",
            paddingLeft: "16px",
            justifyContent: "center",
          }}
        >
          <ReserveCard
            id={reserve.id}
            nomeUsuario={reserve.usuario.nome}
            dataReserva={reserve.dataReserva}
            numLivros={reserve.livros.length}
            statusReserva={
              reserve.statusReserva === 0
                ? "Pendente"
                : reserve.statusReserva === 1
                ? "Emprestado"
                : reserve.statusReserva === 2
                ? "Devolvido"
                : "Status Desconhecido"
            }
            isSelected={selectedReserve.id === reserve.id}
            onClick={() => onReserveSelect(reserve)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ReserveGrid;
