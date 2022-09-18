import React from 'react'

export default function Modal({modal, changeModal, children}) {

  return (
  <div className={modal}>
    <div className="modal-header">
      <button onClick={() => changeModal('modal') }>X</button>
    </div>
    {children}
  </div>
  )
}