import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion, useAnimation } from "framer-motion"
import Cards from './Cards'
import Sample from './Sample'


function App() {

  const boxmotion = {
    Start :{
      x: 0,
      scale : "1.5",
      backgroundColor: "blue"
    },
    End :{
      x: 1000,
      scale : ".5",
      backgroundColor : "green"
    }
  }

  const handlebox4 = {
    start : {
      opacity:.1 , y:-70
    }
    ,
    end :{
      opacity:1 , y:0
    }
  }

const control = useAnimation()

  return (
    <section>
      {/* <div id='box1' className='flex overflow-hidden border-2 justify-end'>
        <motion.div className='w-52 h-52 rounded-xl p-2  bg-blue-700'
        animate={{x:0, opacity : 1}}
        initial={{opacity: 0.1, x: 500}}
        transition={{duration: 1.5, ease: "linear"}}
      
        > 
        <h2>hello</h2>
        </motion.div>
      </div>
      <div id='box2' className=' my-52'>
        <motion.div className='w-52 h-52 rounded-xl p-2  bg-green-700'
        whileHover={{
          scale : 1.1,
          transition: {ease: "easeInOut"}
        }}
        whileTap={{scale: .9}}
        drag={"x"}
        > 
        <h2>hello</h2>
        </motion.div>
      </div>
      <div id='box3' className='my-5'>
        <motion.div className='w-52 h-52 rounded-xl p-2 '
        variants={boxmotion}
        animate="End"
        initial= "Start"
        > 
        <h2>hello</h2>
        </motion.div>
      </div>
      <div id='box4' className='my-10 w-52 h-52 overflow-hidden flex justify-between rounded-xl p-2 bg-yellow-400'>
        {
          [1,2,3].map((element,idx)=>{
           return <motion.li key={idx} variants={handlebox4} initial="start" animate="end" transition={{duration:(idx+1)*1, ease: "backOut"}}  className='h-6 w-10 my-2 text-black bg-white'>
              {element}
            </motion.li>
          })
        }
      </div>
      <div id="box5">
        <div>
          <button className='btn bg-blue-800 text-white mr-2' onClick={()=> control.start({
            x: 1200,
            transition : {duration : 2}
          })}>Move Right</button>
          <button onClick={()=>{
            control.start({
              x : -500,
              transition : {duration : 2}
            })
          }}  className='btn bg-blue-800 text-white mr-2'>Move Left</button>
          <button onClick={()=>{
            control.start({
              borderRadius : "50%",
              transition : {duration : 1}
            })
          }}   className='btn bg-blue-800 text-white mr-2'>Circle</button>
          <button  className='btn bg-blue-800 text-white mr-2'>Stop</button>
        </div>
        <motion.div animate={control} className='my-10 w-52 h-52 overflow-hidden flex justify-between rounded-xl p-2 bg-yellow-400'>

        </motion.div>
      </div>
      <div >
        <motion.div className='my-10 w-52 h-52 rounded-xl p-2 bg-purple-600' animate={{translateX: 500}}>
          
        </motion.div>
      </div> */}
      <div>
        {/* <Cards></Cards> */}
        <Sample></Sample>

      </div>
      {/* <div className='my-20'>
        <Cards></Cards>
      </div> */}
    </section>
  )
}

export default App
