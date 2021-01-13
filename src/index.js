import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from "./app"
import Home from "./home/home.component"

import { Provider } from 'react-redux';


import { store, persistor } from './redux/store';



const Index = () => {
  const [page, setpage] = useState(true)
return(  <Provider store={store}>

{page? <App></App>:
 <Home click={()=>setpage(true)}></Home>}

 </Provider>)
  
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Index />, rootElement)
