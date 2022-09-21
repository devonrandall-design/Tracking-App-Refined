import React from 'react'

export default function Exercises({children, bodyType, modal, changeModal, exerciseName, changeExercise, newSet}) {

  
  function Close() {
    return (
      <svg onClick={() => changeModal('modal-e') } width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_55_42)">
<path d="M31.6666 10.6833L29.3166 8.33333L20 17.65L10.6833 8.33333L8.33331 10.6833L17.65 20L8.33331 29.3167L10.6833 31.6667L20 22.35L29.3166 31.6667L31.6666 29.3167L22.35 20L31.6666 10.6833Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_55_42">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>

    )
  }

const upperBody = ['Bench Press', 'Shoulder Press', 'Barbell Curl', 'Barbell Row','Deadlift']

const lowerBody = ['Squat', 'Romanian Deadlift', 'Sumo Deadlift', 'Lunges', 'Hip Thrust']

const handleClick = (item) => {
if (item === exerciseName) {
changeModal('modal-e')
} else {
  changeExercise(item);
  changeModal('modal-e')
  newSet(1)
 
}
}



return ( <div className={modal}>
<div className="modal-header-e">
  <div className="modal-header-left">
      <h2>Select Exercise</h2>
      </div>
      <div className="modal-header-right">
      <button onClick={() => changeModal('modal-e') }><Close /></button>
      </div>
    </div>
    <div className="modal-e-body">
    {children}
    </div>
    <div className="modal-e-content">
{ bodyType === 'Upper Body' ? upperBody.map(list => {
  return <div onClick={() => handleClick(list)} key={list} className="exercise-container"><h3>{list}</h3></div>
}) : lowerBody.map(list => {
  return <div onClick={() => handleClick(list)} key={list} className="exercise-container"><h3>{list}</h3></div>
})}
      </div>

</div>
)


}