import React from 'react'

export default function Header({noModal, modal, exerciseName, settingName, currentSet, updateSet}) {

  function changeName(e) {
    settingName(e.target.value)
    updateSet(1)
  }

return <div className="header">
  <div className="header-item-sm"></div>
  <div className="header-item-big"><input onChange={changeName} value={exerciseName}/></div>
  <div className="header-item-sm"><button className="view" onClick={() => noModal(modal === 'modal' ? 'modal-show' : 'modal')}>View Log</button></div>
</div>

}