import React from 'react'

export default function Modal({modal, changeModal, children}) {

  function Close() {
    return (
      <svg onClick={() => changeModal('modal') } width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_55_42)">
<path d="M31.6666 10.6833L29.3166 8.33333L20 17.65L10.6833 8.33333L8.33331 10.6833L17.65 20L8.33331 29.3167L10.6833 31.6667L20 22.35L29.3166 31.6667L31.6666 29.3167L22.35 20L31.6666 10.6833Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_55_42">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>

    )
  }
  return (
  <div className={modal}>
    <div className="modal-header">
      <h2>Workout Log</h2>
      <button onClick={() => changeModal('modal') }><Close /></button>
    </div>
    {children}
  </div>
  )
}