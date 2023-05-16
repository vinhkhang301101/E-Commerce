import React, { createContext, useContext, useState } from 'react'

const Context = createContext({})

export const Radio = ({ children, ...props }) => {
    const { value } = useContext(Context)
  return (
    <div
      className="custom-control custom-checkbox mb-3"
      onClick={() => onChange(props.value)}
    >
      <input
        checked={props.value == value}
        className="custom-control-input"
        id="seasonOne"
        type="checkbox"
        defaultChecked
      />
      <label className="custom-control-label" htmlFor="seasonOne">
        {children}
      </label>
    </div>
  );
}

Radio.Group = ({ children, defaultValue, toggle, ...props }) => {
    const [value, setValue] = useState(defaultValue);
    const onChange = (_value) => {
        if (toggle && _value == value) {
            setValue(),
            props?.onChange?.()
            return
        }
        setValue(_value),
        props?.onChange?.(_value)
    }
    return <Context.Provider value={{ value, onChange }}></Context.Provider>
}