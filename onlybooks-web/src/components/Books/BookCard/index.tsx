import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';  

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  genre: string;
  status: number;
  onDelete: (id: number) => void;  
}

const BookCard: React.FC<BookCardProps> = ({
  id,
  title,
  author,
  genre,
  status,
  onDelete,
}) => {
  return (
    <Card
      variant="outlined"
      style={{
        margin: "16px",
        border: "3px solid #b30000",
        borderColor: "#b30000",
        borderRadius: "8px",
        transition: "transform 0.2s",
        width: "400px",
        height: "250px",  
        cursor: "pointer",
        display: "flex",
        flexDirection: "column", 
        justifyContent: "space-between" 
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
      }}
    >
      <CardContent style={{ flex: 1 }}> 
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <hr />
        <Typography color="text.secondary">Autor: {author}</Typography>
        <Typography color="text.secondary">Gênero: {genre}</Typography>
        <Typography color="text.secondary">
          Status: {status === 0 ? "Disponível" : "Emprestado"}
        </Typography>
      </CardContent>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "5px" }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#b30000", 
            color: "#fff",
          }}
          startIcon={<DeleteIcon />}  
          onClick={() => onDelete(id)}  
        >
          Excluir
        </Button>
      </div>
    </Card>
  );
};

export default BookCard;
