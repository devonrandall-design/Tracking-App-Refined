import React, {useEffect} from 'react'

export default function Barbell({leftbar, rightbar, distance, changeDistance}) {

const leftCheck = leftbar.length;

const dynamicdistance = [80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245]



  return <div className="bar-area">
    <div className="bar">
{
leftbar.map((bar, index) => { 
  return <div style={{transform: `translateX(-${dynamicdistance[index]}px)`}} className={`plate-${bar} ` + 'left-plate'} > </div>})}
      <div className="clamp left"></div>
      <div className="clamp right"></div>
{rightbar.map((bar, index) => { return <div style={{transform: `translateX(${dynamicdistance[index]}px)`}} className={`plate-${bar} ` + 'right-plate'}></div>})}
    </div>
  </div>
}
