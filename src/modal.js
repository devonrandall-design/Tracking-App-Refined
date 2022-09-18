import React from 'react'

export default function Modal({modal, changeModal, children}) {

  return (
  <div className={modal}>
    <div className="modal-header">
      <h2>Workout Log</h2>
      <button onClick={() => changeModal('modal') }>X</button>
    </div>
    {children}
  </div>
  )
}