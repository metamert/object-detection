import React from 'react'
import Grid from '@material-ui/core/Grid';

import './home.styles.css'
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import robot from "../lottie/robot.json"

const Home1 = ({click}) =>{  
    
  const defaultOptions = {
    loop: true,
  
    autoplay: true,
    animationData: robot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: 1,
            when: "beforeChildren",
            staggerChildren: 0.1
          }
        }
      };

      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

    
    return(



<div className='home1'  style={{marginTop:60 ,padding:50}}>
    <Grid container  >
    <Grid container lg={6} ms={6} xs={12} alignItems="center">
    <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
       
        <Grid item className='itemler' justify='center' >
        <motion.li  variants={item} >
            <h1 class="deneme2" >Get Rid Of Scripts<br/>More Securely</h1>
            </motion.li>
            <motion.li  variants={item} >
            <p>Check if people entering your site are using scripts, Complete tasks with object detection
</p>
            </motion.li>
            <motion.li  variants={item} >
            <a onClick={click} class="btn radius-btn"  style={{color:"white",margin:30}} >Get Started</a>
            </motion.li>
        </Grid>
        </motion.ul>
    </Grid>
    <Grid container justify='center' alignItems="center" lg={6} ms={6} xs={12}>
    <motion.div
    className={"rotated"}
    initial={{ scale: 0 }}
    animate={{ rotate: 180, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      delay:1,
      damping: 20
    }}
  >
   
    <Lottie
            style={{ color: "white",zIndex:200 }}
            options={defaultOptions}
        
            height={300}
            width={300}
        
          />

    
           
            </motion.div>     
    </Grid>
</Grid>
    </div>
)}
export default Home1;