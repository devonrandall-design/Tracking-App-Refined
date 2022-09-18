import React from 'react'

export default function Buttons({selected, addWeight, subtractWeight, weight}) {

  return (
  <>
  <div onClick={() => subtractWeight(selected)} 
  className={weight === 45 ? 'inactive' : 'btn'}>- Subtract</div>
  <div onClick={() => addWeight(selected)} className="btn">+ Add </div>
  </>
  )
}