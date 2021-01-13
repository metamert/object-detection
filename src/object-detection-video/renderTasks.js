import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import done from '../lottie/done.webp'
import url from "../mp3/correct.mp3"
import { Button } from '@material-ui/core'
import {connect } from "react-redux"
import {restart} from "../redux/user/user.actions"

const App = ({tasks,restart}) => {
 
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

 
  
  const toggle = () =>{

 
  audio.play() 
  setTimeout(() => {
  audio.pause();
  }, 1000);


    

  } 


useEffect(() => {
  console.log("girdi")
 toggle()
}, [tasks])


  function check() {
   let dahabitmedi=false
    tasks.map((task) => {
      if (!task.done) {
      dahabitmedi=true
      }
    })
    if(!dahabitmedi)
    toggle(true)
    
    return dahabitmedi
  }

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);


  
  

  return (
    <div className="Container">
     
      {!check() ? (
        <div className="column">
          <h1> Done ! You are not a robot</h1>
          <img src={done} style={{ width: 300 }}></img>
          <Button color="primary" variant="contained" onClick={()=>restart()}>
            Restart
          </Button>
        </div>
      ) :([
    
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
      </div>])}
    </div>
  )
}



const s=(state)=>({
tasks:state.tasks.tasks
})

const d=(dispatch)=>({
restart:()=>dispatch(restart())
})

export default connect(s,d)(App)
