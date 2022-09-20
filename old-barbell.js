import React, {useEffect} from 'react'
import StyledPlate from './plate-image'

export default function Barbell({leftbar, rightbar, distance, changeDistance, errorstate}) {

const leftCheck = leftbar.length;

const dynamicdistance = [80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245]



  return <div className={`bar-area ${errorstate}`}>
    <div className={`${leftbar.length > 0 ? 'risen' : 'bar'}`}>
{
leftbar.map((bar, index) => { 
  return  <>
  <StyledPlate style={{transform: `translateX(-${dynamicdistance[index]}px)`}} bar={bar}  />
  <div style={{transform: `translateX(-${dynamicdistance[index]}px)`}} className={`plate-${bar} ` + 'left-plate'} > </div></>})}
      <div className="clamp left"></div>
      <div className="clamp right"></div>
{rightbar.map((bar, index) => { return <div style={{transform: `translateX(${dynamicdistance[index]}px)`}} className={`plate-${bar} ` + 'right-plate'}></div>})}
    </div>
  </div>
}