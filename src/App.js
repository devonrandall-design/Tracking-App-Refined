import React, {useState, useEffect} from "react";
import "./style.css";
import Header from './header'
import Barbell from './barbell-area.js'
import PlateArea from './plate-area.js'
import Plate from './plates.js'
import Buttons from './buttons.js'
import Modal from './modal.js'
import Log from './log-area.js'
import Warning from './warning-modal.js'
import StyledPlate from './plate-image.js'
import Exercises from './exercise-list.js'

export default function App() {

function SelectExercise() {
  return (<svg onClick={() => noModalE('modal-show-e')} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 16.6H23.0667" stroke="#008CDD" stroke-width="3"/>
<line x1="24.5667" y1="11" x2="24.5667" y2="22" stroke="#008CDD" stroke-width="3"/>
<line x1="28" y1="13.9333" x2="28" y2="19.0667" stroke="#008CDD" stroke-width="2"/>
<line x1="5" y1="13.9333" x2="5" y2="19.0667" stroke="#008CDD" stroke-width="2"/>
<line x1="8.43335" y1="11" x2="8.43335" y2="22" stroke="#008CDD" stroke-width="3"/>
</svg>
  )

}
function ArticleButton() {
  return ( <svg width="28" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_55_27)">
  <path d="M25.3333 6.66667V25.3333H6.66667V6.66667H25.3333ZM25.3333 4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H25.3333C26.8 28 28 26.8 28 25.3333V6.66667C28 5.2 26.8 4 25.3333 4Z" fill="#008CDD"/>
  <path d="M18.6666 22.6667H9.33331V20H18.6666V22.6667ZM22.6666 17.3333H9.33331V14.6667H22.6666V17.3333ZM22.6666 12H9.33331V9.33333H22.6666V12Z" fill="#008CDD"/>
  </g>
  <defs>
  <clipPath id="clip0_55_27">
  <rect width="32" height="32" fill="white"/>
  </clipPath>
  </defs>
  </svg>
)  
}


class WorkoutLog {
constructor(name, set, weight, reps) {
  this._name = name,
  this._set = set,
  this._weight = weight,
  this._reps = reps
}

get name() {
  return this.name;
}

get name() {
  return this.set;
}

get weight() {
  return this.weight;
}

get reps() {
  return this.reps;
}

}



const weightArray = [5, 10, 25, 35, 45]

const [weight, setWeight] = useState(45)
const [selected, setSelected] = useState(0)
const [name, setName] = useState('plate')
const [another, setAnother] = useState(false)
const [repCount, setRepCount] = useState(0)
const [workoutLog, addLog] = useState([])
const [modal, noModal] = useState('modal')
const [modalE, noModalE] = useState('modal-e')
const [overlay, setOverlay] = useState('no-overlay')
const [warning, setWarning] = useState('no-warning')
const [exerciseName, setExerciseName] = useState('Bench Press')
const [newSet, setSet] = useState(1)
const [distance, setDistance] = useState(70)
const [error, setError] = useState('no-error')
const [bodyType, setBodyType] = useState('Upper Body')



//Bar States for Animation
const [LeftBar, setLeftBar] = useState([])
const [RightBar, setRightBar] = useState([])


//Changing Selected Weight Value
function selectWeight(plate) {
  setSelected(plate * 2)
}

//Adding and Subtracting Weight
//ALSO SETTING BAR VALUES!!!!!!!!

function addWeight (entry) {
  if ( selected === 0) {
    return
  }
  setLeftBar([...LeftBar, (entry / 2) ])
  setRightBar([...RightBar, (entry / 2) ])
 


  setWeight(weight + entry)
  if (weight + entry > 1300) {
    setWeight(1300) 
    return
  }
}

function subtractWeight (entry) {

const checkingLeft = LeftBar.some(bar => bar === (entry / 2))
if (!checkingLeft) {

  setWarning('warning')

  setError('error-state')

  setTimeout(() => {
    setError('')
  }, 500)

  setTimeout(() => {
setWarning('no-warning')
  }, 2000)
  console.log(`${entry / 2} is not on the bar`)
  return
}
// console.log(checkingLeft)
  //FIND INDEX 
const lastleftIndex = LeftBar.lastIndexOf(selected / 2)
//const leftIndex = LeftBar.findIndex(plate => plate === (entry / 2))
LeftBar.splice(lastleftIndex, 1)
setLeftBar(LeftBar)

const lastrightIndex = RightBar.lastIndexOf(selected / 2)
//const rightIndex = RightBar.findIndex(plate => plate === (entry / 2))
RightBar.splice(lastrightIndex, 1)
setRightBar(RightBar)


  setWeight(weight - entry)
  if (weight - entry < 45) {
    setWeight(45)
    return
  }
}

//Adding and Subtracting Reps

function addReps () {
  setRepCount(repCount + 1)
}

function subtractReps () {
  if (repCount > 0)
  setRepCount(repCount - 1)
}

function Logging() {
 
  const LogSet = new WorkoutLog(exerciseName, newSet, weight, repCount)
  addLog([...workoutLog, LogSet])

  setSet((newSet + 1))
  
  setOverlay('overlay');
  
  

  setTimeout(() => {
    setOverlay('no-overlay')
  }, 1500)
 
  console.log(workoutLog)
  
  }

  function handleChange(e) {
    setBodyType(e.target.value);
    console.log(e.target.value)
  }
  




  return (
    <div className="app-container">
     
      <Header 
      currentSet={newSet}
      updateSet={setSet}
      settingName={setExerciseName} 
      exerciseName={exerciseName} 
      modal={modal} 
      noModal={noModal} />
      <h1 className="headerAmount">{weight}</h1>
      <p className="label-sm">lbs</p>
      <Barbell 
      errorstate={error}
      distance={distance}
      changeDistance={setDistance}
      weight={weight} leftbar={LeftBar} rightbar={RightBar} />
      <PlateArea>
{weightArray.map(weight => {return <Plate key={weight} current={selected} id={weight} selectedName={name} selectWeight={selectWeight} amount={weight} />})}
        </PlateArea>
        <div className="btn-Area">
          <Buttons 
          leftbar={LeftBar}
          rightbar={RightBar}
          addleft={setLeftBar}
          addright={setRightBar} 
          weight={weight} selected={selected} addWeight={addWeight}
          subtractWeight={subtractWeight} />
        </div>
        <div className="rep-Area">
          <button onClick={() => subtractReps()} className={repCount === 0 ? 'inactiveRound' : 'activeround'}>-</button>
          <div className="vertical-stack">
          <h2 className={repCount > 0 ? 'rep-active' : 'rep-inactive'}>{repCount}</h2>
          <p>reps</p>
          </div>
          <button onClick={() => addReps()} className="activeround">+</button>
          </div>
        <div className="log-set-container">
          <div className="log-set-sm"><SelectExercise />
          <button className="view" onClick={() => noModalE(modalE === 'modal-e' ? 'modal-show-e' : 'modal-e')}>
         
          Select Exercise</button></div>
          <div className="log-set-lg">
        <button onClick={repCount > 0 ? () => Logging() : null} className={repCount < 1 ? 'inactive' : 'btn'}>Log Set</button>
        </div>
        <div className="log-set-sm">
        <ArticleButton />
          <button className="view" onClick={() => noModal(modal === 'modal' ? 'modal-show' : 'modal')}>
         
          View Log</button></div>
          </div>
        
         

            <Modal changingModal={noModal} themodal={modal}>
<Log currentLog={workoutLog} />
              </Modal>
            <div className={overlay}>
              Set Logged!
              </div>

              <Warning warningClass={warning}>
                <p>{`There are not any ${selected / 2}lb weights on the bar`}</p>
                </Warning>

                <Exercises newSet={setSet} exerciseName={exerciseName} changeExercise={setExerciseName} modal={modalE} changeModal={noModalE} bodyType={bodyType}>
                  <select onChange={handleChange} name="Exercise Type" >
                    <option value="Upper Body">Upper Body</option>
                      <option value="Lower Body">Lower Body</option>
                        </select>


                  </Exercises>

                

      
    </div>
  );
}
