import React from 'react'

export default function Plates({amount, selectWeight, selectedName}) {

  return <div onClick={() => selectWeight(amount)}  className={`plate ${selectedName}`}><h3>{amount}</h3></div>
}