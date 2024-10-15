import React from "react";
import {
  Card,
  CardContent,
  Typography
} from "@mui/material";
import { BorrowsCardProps } from "../../../types/borrowType";

const BorrowsCard: React.FC<BorrowsCardProps> = ({
  dataDevolucao,
  reservaId: _id,
  statusEmprestimo
}) => {

  return (
    <Card
      variant="outlined"
      style={{
        margin: "8px",
        border: "3px solid #b30000",
        borderColor:"#b30000",
        borderRadius: "8px",
        transition: "transform 0.2s",
        width: "400px",
        height: "200px",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
      }}
    >
      <CardContent>
        <Typography variant="h6">Status: {statusEmprestimo}</Typography>
        <Typography variant="subtitle1">Data de Devolução: {dataDevolucao}</Typography>
      </CardContent>
    </Card>
  );
};

export default BorrowsCard;
