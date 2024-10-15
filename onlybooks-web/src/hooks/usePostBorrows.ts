import { useState } from "react";
import axios from "axios";

export const usePostBorrows = () => {
  const [loadingSubmit, setLoading] = useState(false);
  const [returnMsg, setReturnMsg] = useState("");

  const postRequest = async (payload: object) => {
    setLoading(true);
    setReturnMsg("");

    try {
      await axios.post("/api/Emprestimo", payload);
      setReturnMsg("Emprestimo cadastrado com sucesso")
      return true;
    } catch (error) {
      console.error("Erro ao cadastrar a emprestimo:", error);
      setReturnMsg("Erro ao cadastrar a emprestimo");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loadingSubmit, returnMsg, postRequest };
};
