import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { ReserveCardProps } from "../../../types/reserveType";

const ReserveCard: React.FC<ReserveCardProps> = ({
  id,
  nomeUsuario,
  statusReserva,
  dataReserva,
  numLivros,
  isSelected,
  onClick,
}) => {
  const formattedDate = new Date(dataReserva).toLocaleDateString("pt-BR");

  return (
    <Card
      variant={isSelected ? "outlined" : "elevation"}
      style={{
        margin: "8px",
        border: "3px solid #b30000",
        borderColor: isSelected ? "blue" : "#b30000",
        borderRadius: "8px",
        transition: "transform 0.2s",
        width: "400px",
        height: "200px",
        cursor: "pointer",
        transform: isSelected ? "scale(1.05)" : "scale(1)", 
      }}
      onClick={() => onClick(id)}
    >
      <CardContent>
        <Typography variant="h6">{nomeUsuario}</Typography>
        <Typography variant="subtitle1">Status: {statusReserva}</Typography>
        <Typography variant="body2">
          Data da Reserva: {formattedDate}
        </Typography>
        <Typography variant="body2">Número de Livros: {numLivros}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onClick(id)}>
          Detalhes
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReserveCard;
