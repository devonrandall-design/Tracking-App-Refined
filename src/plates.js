import React, {useState} from 'react'

export default function Plates({amount, selectWeight, selectedName, id, current, setCurrent,}) {


const [isDragged, setDragged] = useState('')
  function handleDragStart() {
    setDragged('being-dragged')
setCurrent(amount * 2)
  }

  function handleDragEnd() {
    setDragged('')
  }


  
  return <div onDragEnd={() => handleDragEnd()} onDragStart={() => handleDragStart()} draggable="true" onClick={() => selectWeight(amount)}  
  className={`plate ${isDragged} ${ amount === current / 2 ? 'selected-plate': ''}`}>
    <h3>{amount}</h3></div>
}


