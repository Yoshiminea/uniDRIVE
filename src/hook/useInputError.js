import React, { useState } from "react";

export const useInputError = () => {
  const [error, setError] = useState(false);

  const inputErrorHandler = (boolean) => {
    console.log("boolean:", boolean);
    setError(boolean);
  };
  return {
    error: error,
    setError: inputErrorHandler,
  };
};
