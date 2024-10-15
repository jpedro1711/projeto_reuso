import React from "react";
import { Grid } from "@mui/material";
import BorrowsCard from "../BorrowsCard";
import { Borrow, BorrowsGridProps } from "../../../types/borrowType";

const BorrowsGrid: React.FC<BorrowsGridProps> = ({
  borrows
}) => {
  return (
    <Grid container spacing={2}>
      {borrows.map((borrow: Borrow) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={`${borrow.id.timestamp}-${borrow.id.machine}-${borrow.id.pid}-${borrow.id.increment}-${borrow.id.creationTime}`}
          style={{
            display: "flex",
            paddingTop: "16px",
            paddingLeft: "16px",
            justifyContent: "center",
          }}
        >
          <BorrowsCard
            reservaId={borrow.reservaId}
            statusEmprestimo={
              borrow.statusEmprestimo === 0
                ? "Ativo"
                :  borrow.statusEmprestimo === 1
                ? "Devolvido"
                :  borrow.statusEmprestimo === 2
                ? "Atrasado"
                : "Status Desconhecido"
            }
            dataDevolucao={borrow.dataDevolucao}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BorrowsGrid;
