import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from "framer-motion"


function App() {


  return (
    <section>
      <div className='flex border-2 justify-center'>
        <motion.div className='box'
        animate={{x: "right", opacity : 1}}
        initial={{opacity: 0.1}}
        transition={{duration: 1,ease: "linear"}}
        > 
        <h2>hello</h2>
        </motion.div>
      </div>
    </section>
  )
}

export default App
