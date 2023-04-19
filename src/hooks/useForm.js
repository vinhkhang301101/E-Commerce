/**
 *
 * @param {*} rules
 * @returns values, errors, register, validate
 */

import { validate } from "@/utils/validate";
import { useState } from "react";

export const useForm = (rules) => {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});

  const register = (name) => {
    return {
      error: error[name],
      value: form[name] || "",
      onChange: (ev) => setForm({ ...form, [name]: ev.target.value }),
    };
  };

  const _validate = () => {
    const errorObject = validate(rules, values);
    setError(errorObject);
    return Object.keys(errorObject).length === 0;
  };

  return {
    values,
    error,
    register,
    validate: _validate,
  };
};
