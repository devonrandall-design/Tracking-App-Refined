import React from 'react'

export default function Modal({modal, changeModal, children}) {

  return (
  <div className={modal}>
    <div className="modal-header">
      <h4> Workout Log </h4>
      <button onClick={() => changeModal('modal') }>X</button>
      {children}
    </div>
  </div>
  )
}