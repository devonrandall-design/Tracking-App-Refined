import React from 'react'


export default function Log({currentLog}) {

  return ( <> <div className="log-area">
    <div className="table-row">
    <div className="table-column"><p className="header-item">Name</p></div>
       <div className="table-column"><p className="header-item">Set Number</p></div>
       <div className="table-column"><p className="header-item">Weight</p></div>
       <div className="table-column"><p className="header-item">Reps</p></div>
      </div>
   {currentLog.map(log => {
     return <><div className="table-row">
       <div className="table-column"><p className="list-item">{log._name}</p></div>
       <div className="table-column"><p className="list-item">{log._set}</p></div>
       <div className="table-column"><p className="list-item">{log._weight}</p></div>
       <div className="table-column"><p className="list-item">{log._reps}</p></div>
     </div>
     </>})}
  </div>
  </>)
}