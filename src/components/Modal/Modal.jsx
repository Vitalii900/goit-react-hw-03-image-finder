import '../Modal/Modal.css';
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root')

export function Modal({ image }) {
  return createPortal(
    <div className="overlay">
      <div className="modal">
        <img src={image} alt="" />
      </div>
    </div>,
    modalRoot
  );
}

