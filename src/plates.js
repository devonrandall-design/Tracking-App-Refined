import React from 'react'

export default function Plates({amount, selectWeight, selectedName, id, current}) {


  
  return <div onClick={() => selectWeight(amount)}  
  className={`plate ${ amount === current / 2 ? 'selected-plate': ''}`}>
    <h3>{amount}</h3></div>
}


