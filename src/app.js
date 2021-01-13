import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import useModel from './useModel'
import ObjectDetectionVideo from './object-detection-video/ObjectDetectionVideo'
import RenderTask from "./object-detection-video/renderTasks"

import './index.css'
import { Button } from '@material-ui/core'

const handlePrediction = (predictions) => {
  console.timeEnd('detect')
  console.time('detect')
  console.log(predictions)
}

const render = (ctx, predictions) => {
  predictions.forEach((prediction) => {
    const x = prediction.bbox[0]
    const y = prediction.bbox[1]
    const width = prediction.bbox[2]
    const height = prediction.bbox[3]

    ctx.setStrokeStyle('#0062ff')
    ctx.setLineWidth(4)
    ctx.strokeRect(
      Math.round(x),
      Math.round(y),
      Math.round(width),
      Math.round(height)
    )
  })
}

const App = () => {
  const [tasks, settasks] = useState([])
  const [completed, setcompleted] = useState(false)

  const model = useModel(process.env.PUBLIC_URL + '/model_web')
  


  
  
 
  return (
    <div className="Container">
      <h2>To prove that you are not a robot, make the hand signals </h2>
    
        <ObjectDetectionVideo
        
          model={model}
          
          // aspectFill: The option to scale the video to fill the size of the view.
          //             Some portion of the video may be clipped to fill the view's
          //             bounds.
          // aspectFit:  The option to scale the video to fit the size of the view
          //             by maintaining the aspect ratio. Any remaining area of the
          //             view's bounds is transparent.
          fit="aspectFill"
          // mirrored:   mirror the video about its vertical axis.
          mirrored
        />
        <RenderTask></RenderTask>
      
      
    </div>
  )
}

export default App
