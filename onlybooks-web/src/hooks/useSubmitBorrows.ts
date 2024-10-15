import { useState } from "react";
import { usePostBorrows } from "./usePostBorrows";

const useFormSubmitBorrows = () => {
  const { loadingSubmit, returnMsg, postRequest } = usePostBorrows();
  const [success, setSuccess] = useState(false);

  const submit = async (reservaId: number) => {
    const now = new Date();
    now.setHours(now.getHours() - 3);
    now.setDate(now.getDate() + 15);
    const formattedDate = now.toISOString();

    const payload = { reservaId, dataDevolucao: formattedDate };
    const wasSuccessful = await postRequest(payload);

    if (wasSuccessful) {
      setSuccess(true);
    }
  };

  return { loadingSubmit, returnMsg, success, submit };
};

export default useFormSubmitBorrows;
