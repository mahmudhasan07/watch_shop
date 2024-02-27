import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import image1 from "../public/watch_banner.png"
import image2 from "../public/watch1.png"
import image3 from "../public/watch2.jpg"
import image4 from "../public/watch3.png"
import image5 from "../public/watch4.png"
import Test from './Test';

const Home = () => {
    const [loading, setloading] = useState(true)
    const [bannerLoading, setbannerLoading] = useState(true)
    return (
        <section className=''>
            {/* {
                    bannerLoading == true ?
                    <motion.img src={image1} initial={{ opacity:0, y:300 }}
                    animate={{width: "40%", opacity:1}} 
                    exit={{opacity:1, width:"100%", height:"100%"}}
                    transition={{duration :2, delay:2}}
                    onAnimationComplete={()=>setbannerLoading(false)}
                    className='object-cover mx-auto'></motion.img>
                    :
                    ""
                } */}
            <div className=''>
                <AnimatePresence>
                    {
                        loading == true ?
                            <motion.div className=' h-[600px]'>
                                <motion.img src={image2} initial={{ width: "25%", height: "50%", opacity: 0, y: 750, x: "70%" }}   animate={{ width: "25%", height: "50%", opacity: 1, y: 50, x: 200 }}  transition={{ delay: .90, duration: 3, ease:"circInOut" }} exit={{ opacity: 0 }}  className='mx-auto   absolute    object-cover'></motion.img>
                                <motion.img src={image3} initial={{ width: "30%", height: "40%", opacity: 0, y: 750, x: "200%" }}  animate={{ width: "30%", height: "40%", opacity: 1, y: 50, x: 950 }}   transition={{ delay: 1.30, duration: 3, ease:"circInOut" }} exit={{ opacity: 0 }}  className='mx-auto   absolute   object-cover'></motion.img>
                                <motion.img src={image4} initial={{ width: "30%", height: "40%", opacity: 0, y: 1100, x: "50%" }}  animate={{ width: "30%", height: "40%", opacity: 1, y: 400, x: 950 }}   transition={{ delay: 1.60, duration: 3, ease:"circInOut" }} exit={{ opacity: 0 }}  className='mx-auto  absolute   object-cover'></motion.img>
                                <motion.img src={image5} initial={{ width: "30%", height: "40%", opacity: 0, y: 1100, x: "200%" }} animate={{ width: "30%", height: "40%", opacity: 1, y: 400, x: 200 }}    transition={{ delay: 1.90, duration: 3, ease:"circInOut" }} exit={{ opacity: 0 }}  className='mx-auto  absolute   object-cover'></motion.img>
                                <motion.img src={image1} initial={{ width: "30%", height: "40%", opacity: 0, y: 1000, x: "120%" }} animate={{ width: "30%", height: "40%", opacity: 1, y: 200, x: 550 }}    transition={{ delay: 2.20, duration: 3.5, ease:"circInOut" }} exit={{ opacity: 0}} onAnimationComplete={()=> setloading(false)}  className='mx-auto absolute object-cover'></motion.img>
                            </motion.div>

                            :
                            <Test></Test>
                    }
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Home;