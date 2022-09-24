import React, {useState} from 'react'
import StyledPlate from './plate-image'

export default function Barbell({leftbar, rightbar, distance, changeDistance, errorstate, weight ,setWeight, selected, drag, setDrag }) {

const leftCheck = leftbar.length;

const dynamicdistance = [68, 80, 92, 104, 116, 128, 140, 152, 164, 176, 188, 200]



function handleDrop (e) {
  e.preventDefault()
setWeight(selected)
console.log()

}

function handleDragOver(e) {
e.preventDefault()
setDrag('drag-hover')

}

  return <div onDrop={() => handleDrop} onDragOver={handleDragOver} className={`bar-area ${drag} ${errorstate}`}>
    <div className={`${leftbar.length > 0 ? 'risen' : 'bar'}`}>
{
leftbar.map((bar, index) => { 
  return  <>
  <StyledPlate style={{transform: `translateX(-${dynamicdistance[index]}px)`}} bar={bar} id={'left' + index}  />
  </>})}
      <div className="clamp left"><div className="clamp-styling"></div></div>
      <div className="clamp right"><div className="clamp-styling"></div></div>
{rightbar.map((bar, index) => { return <><StyledPlate style={{transform: `translateX(${dynamicdistance[index]}px)`}} bar={bar} id={'right' + index}  /></>})}
    </div>
  </div>
}
