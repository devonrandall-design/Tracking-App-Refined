import React, {useState} from "react";
import "./style.css";
import Header from './header'
import Barbell from './barbell-area.js'
import PlateArea from './plate-area.js'
import Plate from './plates.js'
import Buttons from './buttons.js'

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




function selectWeight(plate) {
  setSelected(plate * 2)
}

function addWeight (entry) {
  setWeight(weight + entry)
}

function subtractWeight (entry) {
  setWeight(weight - entry)
  if (weight - entry < 45) {
    setWeight(45)
    return
  }
}

function addReps () {
  setRepCount(repCount + 1)
}

function subtractReps () {
  if (repCount > 0)
  setRepCount(repCount - 1)
}

function Logging() {
  const LogSet = new WorkoutLog('Bench Press', 'Set', weight, repCount)
  addLog([...workoutLog, LogSet])
 
  console.log(workoutLog)
  
  }


const onBar = []


  return (
    <div className="app-container">
      <Header />
      <h1 className="headerAmount">{weight}</h1>
      <p className="label-sm">lbs</p>
      <Barbell />
      <PlateArea>
{weightArray.map(weight => {return <Plate current={selected} id={weight} selectedName={name} selectWeight={selectWeight} amount={weight} />})}
        </PlateArea>
        <div className="btn-Area">
          <Buttons weight={weight} selected={selected} addWeight={addWeight}
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
        <div onClick={repCount > 0 ? () => Logging() : null} className={repCount < 1 ? 'inactive' : 'btn'}>Log Set</div>
          </div>
          <div>
            {workoutLog.map(logs => {return <p>{logs._name}</p>})}
            </div>
      
    </div>
  );
}
