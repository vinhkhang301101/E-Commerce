import React, { useId } from "react";

export const Checkbox = (props) => {
  const id = useId();
  
  const _onChange = (ev) => {
    props?.onChange(ev.target.checked);
  };

  return (
    <div className="custom-control custom-checkbox mr-2">
      <input
        className="custom-control-input"
        id={id}
        type="checkbox"
        {...props}
        onChange={_onChange}
      />
      <label className="custom-control-label" htmlFor={id} />
    </div>
  );
};
