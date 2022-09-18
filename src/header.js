import React from 'react'

export default function Header({noModal, modal, exerciseName, changeName}) {

return <div className="header">
  <div className="header-item-sm"></div>
  <div className="header-item-big"><input onChange={(e) => changeName(e.target.value)} value={exerciseName}/></div>
  <div className="header-item-sm"><button className="view" onClick={() => noModal(modal === 'modal' ? 'modal-show' : 'modal')}>View Log</button></div>
</div>

}