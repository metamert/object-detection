import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import done from '../lottie/done.webp'

import { Button } from '@material-ui/core'
import {connect } from "react-redux"

const App = ({tasks}) => {
 



  


  function check() {
    tasks.map((task) => {
      if (task.done == false) {
        return false
      }
    })
  }



  
  
  console.log(tasks)
  return (
    <div className="Container">
      <h2>To prove that you are not a robot, make the hand signals </h2>
      {check() && (
        <div className="column">
          <h1> Done ! You are not a robot</h1>
          <img src={done} style={{ width: 300 }}></img>
          <Button color="primary" variant="contained" >
            Restart
          </Button>
        </div>
      ) }
      <div className="row">
        {tasks.map((task) => (
          <div className="tasks">
            <img src={task.src} className="task_images"></img>

            <img
              src={done}
              className={`done ${!task.done && 'notVisible'}`}
            ></img>
          </div>
        ))}
      </div>
    </div>
  )
}



const s=(state)=>({
tasks:state.tasks.tasks
})

export default connect(s)(App)
