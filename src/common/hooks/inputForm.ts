import { useState } from "react";

export const useInputForm = callback => {
  const [inputs, setInputs]: any = useState({});
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(() => ({ ...inputs, [event.target.name]: event.target.value }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};
