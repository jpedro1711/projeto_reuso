import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { SelectedBookCardProps } from "../../../types/booksType";

const SelectedBookCard: React.FC<SelectedBookCardProps> = ({
  id : _id,
  title,
  author,
  genre,
  isSelected,
  onClick,
}) => {
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
      onClick={onClick}
    >
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle1">Autor: {author}</Typography>
        <Typography variant="body2">Genero: {genre}</Typography>
      </CardContent>
    </Card>
  );
};

export default SelectedBookCard;
