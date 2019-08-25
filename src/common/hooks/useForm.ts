import { useState, useEffect } from "react";

export const useForm = (callback, validate) => {
  const [values, setValues]: any = useState({});
  const [errors, setErrors]: any = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = event => {
    event.persist();
    setValues(val => ({ ...val, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};
