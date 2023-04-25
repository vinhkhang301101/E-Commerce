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
  const [values, setValues] = useState({});
  const register = (name) => {
    return {
      error: error[name],
      value: form[name] || "",
      onChange: (value) => {
        let _values = {...values, [name]: value}
        if(rules[name]){
          const error = validate({
            name: rules[name]
          }, _values)
          setError(prev => ({...prev, [name]: error[name] || '' }))
        }
        setValues((prev) => ({...prev, [name]: value}))
      },
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
