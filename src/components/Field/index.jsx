import { cn } from "@/utils";
import { ErrorText, FieldStyle } from "./styles";
import { useId } from "react";

export const Field = ({ Label, error, onChange, ...props }) => {
  const id = useId()
  const _onchange = (ev) => {
    onChange?.(ev.target.value)
  }
  return (
    <FieldStyle className={cn("form-group relative", {error})}>
      <label className="sr-only" htmlFor={id} >
        {Label}
      </label>
      <input {...props} onChange={_onchange} className="form-control form-control-sm" id={id}/>
      {error && <ErrorText>{error}</ErrorText>}
    </FieldStyle>
  );
};
