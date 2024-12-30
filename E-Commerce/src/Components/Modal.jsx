import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, onClose }) => {
  console.log("Modal open prop:", open);
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    else{
      modal.close();
    }
  }, [open]);
  return createPortal(
    <dialog ref={dialog} onClose={onClose} className="modal">
      {children}
      <button className="btt" onClick={onClose}>X</button>
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
