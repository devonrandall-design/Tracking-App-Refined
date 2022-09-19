import React from 'react'

export default function Barbell({leftbar, rightbar, distance, changeDistance}) {

  let y = 60

  /* const styles = { 
    transform: `translate(${x}px, ${y}px)` 
}; */

  

  return <div className="bar-area">
    <div className="bar">
{
leftbar.map(bar => { 
  {changeDistance(distance + 10)}
  return <div style={{transform: `translateX(${distance}px)`}} className={`plate-${bar} ` + 'left-plate'}>

</div>}
)}
      <div className="clamp left"></div>
      <div className="clamp right"></div>
{rightbar.map(bar => { return <div className={`plate-${bar} ` + 'right-plate'}></div>})}
    </div>
  </div>
}