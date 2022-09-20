import React from 'react'

export default function StyledPlate({bar, style}) {

  return ( <svg style={style} className={`style-${bar} ` + 'left-plate'} width="6" height="86" viewBox="0 0 6 86" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect y="12.5" width="6" height="57" fill="#3BCEAC"/>
  <path d="M0.666667 0H5.33333L6 12.5H0L0.666667 0Z" fill="#56EFCC"/>
  <path d="M5.33333 86L0.666667 86L1.53517e-06 69.5L6 69.5L5.33333 86Z" fill="#237461"/>
  </svg>
  )
  
}