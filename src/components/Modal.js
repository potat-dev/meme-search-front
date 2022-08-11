import React from "react";

function Modal({ name, head, text, noBtn = false, btnText = "Close" }) {
  return (
    <>
      <input type="checkbox" id={name} className="modal-toggle" />
      <label htmlFor={name} className="modal modal-bottom sm:modal-middle">
        <label className="modal-box">
          <h3 className="font-bold text-lg">{head}</h3>
          <p className="py-4">{text}</p>
          {!noBtn && (
            <div className="modal-action">
              <label htmlFor={name} className="btn">
                {btnText}
              </label>
            </div>
          )}
        </label>
      </label>
    </>
  );
}

export default Modal;
