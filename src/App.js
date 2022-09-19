import React, {useState} from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "./style.css";
import Header from './header'
import Barbell from './barbell-area.js'
import PlateArea from './plate-area.js'
import Plate from './plates.js'
import Buttons from './buttons.js'
import Modal from './modal.js'
import Log from './log-area.js'

export default function App() {

  const handle = useFullScreenHandle();

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
const [exerciseName, setExerciseName] = useState('Enter Name')
const [newSet, setSet] = useState(1)


//Bar States for Animation
const [LeftBar, setLeftBar] = useState([])
const [RightBar, setRightBar] = useState([])

//Changing Selected Weight Value
function selectWeight(plate) {
  setSelected(plate * 2)
}

//Adding and Subtracting Weight

function addWeight (entry) {

  setLeftBar([...LeftBar, (entry / 2)])
  setRightBar([...RightBar, (entry / 2)])
  console.log(LeftBar, RightBar)

  setWeight(weight + entry)
  if (weight + entry > 1300) {
    setWeight(1300) 
    return
  }
}

function subtractWeight (entry) {
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

  




  return (
    <FullScreen handle={handle}>
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
      <Barbell />
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

      
    </div>
    </FullScreen>
  );
}
