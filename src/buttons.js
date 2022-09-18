import React from 'react'

export default function Buttons({selected, addWeight, subtractWeight}) {

  return (
  <>
  <div onClick={() => subtractWeight(selected)} className="btn">- Subtract Weight</div>
  <div onClick={() => addWeight(selected)} className="btn">+ Add Weight</div>
  </>
  )
}