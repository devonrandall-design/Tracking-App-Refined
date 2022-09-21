import React from 'react'

export default function Buttons({selected, addWeight, subtractWeight, weight, leftbar, rightbar, addleft, addright}) {

  return (
  <>
  <div onClick={() => subtractWeight(selected)} 
  className={weight === 45 ? 'inactive' : 'btn'}>- Subtract</div>
  <div onClick={() => addWeight(selected)} className="btn"
  className={weight === 1300 || weight === 45 ? 'inactive' : 'btn'}>+ Add </div>
  </>
  )
}