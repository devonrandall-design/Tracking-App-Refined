import React from 'react'

export default function Barbell({leftbar, rightbar, weight}) {

  

  return <div className="bar-area">
    <div className="bar">
{
leftbar.map(bar => { return <div className={`plate-${bar} ` + 'left-plate'}>

</div>}
)}
      <div className="clamp left"></div>
      <div className="clamp right"></div>
{rightbar.map(bar => { return <div className={`plate-${bar} ` + 'right-plate'}></div>})}
    </div>
  </div>
}