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

export default function App() {


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
const [overlay, setOverlay] = useState('no-overlay')
const [warning, setWarning] = useState('no-warning')
const [exerciseName, setExerciseName] = useState('Enter Exercise Name')
const [newSet, setSet] = useState(1)
const [distance, setDistance] = useState(70)
const [error, setError] = useState('no-error')



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
const leftIndex = LeftBar.findIndex(plate => plate === (entry / 2))
LeftBar.splice(leftIndex, 1)
setLeftBar(LeftBar)

const rightIndex = RightBar.findIndex(plate => plate === (entry / 2))
RightBar.splice(leftIndex, 1)
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

  function test() {
    console.log(LeftBar)
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
        <button onClick={repCount > 0 ? () => Logging() : null} className={repCount < 1 ? 'inactive' : 'btn'}>Log Set</button>
          </div>
         

            <Modal changeModal={noModal} modal={modal}>
<Log currentLog={workoutLog} />
              </Modal>
            <div className={overlay}>
              Set Logged!
              </div>

              <Warning warningClass={warning}>
                <p>{`There are not any ${selected / 2}lb weights on the bar`}</p>
                </Warning>

      
    </div>
  );
}
