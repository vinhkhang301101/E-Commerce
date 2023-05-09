import { createPortal } from "react-dom";

export const Portal = ({children, selector}) => {
  return createPortal(children, document.querySelector(selector)) 
}