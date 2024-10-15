import React, { useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

interface RegisterCategoryProps {
  open: boolean;
  onClose: () => void;
}

const RegisterGender: React.FC<RegisterCategoryProps> = ({ open, onClose }) => {
  const [genderName, setGenderName] = useState("");

  const handleRegister = async () => {
    try {
      const payload = {
        nome: genderName,
      };
      const response = await axios.post(
        "/api/GeneroLivro",
        payload
      );
      alert("Genero cadastrado!");
    } catch (error) {
      throw error;
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="register-category-modal"
      aria-describedby="register-category-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          id="register-category-modal"
          variant="h6"
          component="h2"
          gutterBottom
        >
          Registrar Novo Genero
        </Typography>

        <TextField
          label="Nome"
          fullWidth
          value={genderName}
          onChange={(e) => setGenderName(e.target.value)}
          margin="normal"
          variant="outlined"
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Button variant="contained" style={{backgroundColor: '#b30000', color: 'white'}} onClick={handleRegister}>
            Registrar
          </Button>
          <Button variant="outlined" style={{backgroundColor: 'white', color: '#b30000', borderColor: '#b30000'}} onClick={onClose}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default RegisterGender;
