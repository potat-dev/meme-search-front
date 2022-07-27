import React from 'react'

function Modal({ name, head, text, btnText }) {
  return (
    <>
      <input type="checkbox" id={name} class="modal-toggle" />
      <label for={name} class="modal modal-bottom sm:modal-middle">
        <label class="modal-box">
          <h3 class="font-bold text-lg">{head}</h3>
          <p class="py-4">{text}</p>
          <div class="modal-action">
            <label for={name} class="btn">{btnText}</label>
          </div>
        </label>
      </label>
    </>
  )
}

export default Modal