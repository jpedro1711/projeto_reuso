import { useState } from "react";
import { usePostReserves } from "./usePostReserves";

const useFormSubmitReserve = () => {
  const { loadingSubmit, returnMsg, postRequest } = usePostReserves();
  const [success, setSuccess] = useState(false);

  const submit = async (payload: object) => {

    const wasSuccessful = await postRequest(payload);

    if (wasSuccessful) {
      setSuccess(true);
    }
  };

  return { loadingSubmit, returnMsg, success, submit };
};

export default useFormSubmitReserve;
