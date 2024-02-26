import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import image1 from "../public/watch_banner.png"
import image2 from "../public/watch1.png"
import image3 from "../public/watch2.jpg"
import image4 from "../public/watch3.png"
import image5 from "../public/watch4.png"

const Home = () => {
    const [loading, setloading] = useState(true)
    const [bannerLoading, setbannerLoading] = useState(true)
    return (
        <section className='mt-20'>
            <motion.div initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: 2, ease: "linear" }} className='space-y-3'>
                <h1 className='text-8xl font-extrabold'>Welcome to Our Website</h1>
                <marquee className="text-5xl font-bold">50% off in our regular watches</marquee>
            </motion.div>
            <div className='h-[600px] '>
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
                <motion.img src={image1} initial={{ opacity: 0, y: 300 }}
                    animate={{ width: ["40%", "100%"], opacity: 1, y:0 }}
                    exit={{ opacity: 1, width: "100%", height: "100%" }}
                    transition={{ duration: 2, delay: 2 }}
                    // onAnimationComplete={() => setbannerLoading(false)}
                    className='object-cover mx-auto'></motion.img>

                <AnimatePresence>
                    {
                        loading == true ?
                            <>
                                <motion.img src={image2} initial={{ y: 0, x: 0, opacity: 0 }} animate={{ width: "20%", height: "45%", opacity: 1, y: -500, x: -250 }} transition={{ delay: .70, duration: 2, ease: "easeInOut" }} exit={{ opacity: 0 }} onAnimationComplete={() => setloading(false)} className='mx-auto object-cover'></motion.img>
                                <motion.img src={image3} initial={{ y: 0, x: 0, opacity: 0 }} animate={{ width: "20%", height: "40%", opacity: 1, y: -350, x: -250 }} transition={{ delay: .90, duration: 2, ease: "easeInOut" }} exit={{ opacity: 0 }} onAnimationComplete={() => setloading(false)} className='mx-auto object-cover'></motion.img>
                                <motion.img src={image4} initial={{ y: 0, x: 0, opacity: 0 }} animate={{ width: "20%", height: "40%", opacity: 1, y: -1000, x: 250 }} transition={{ delay: 1.10, duration: 2, ease: "easeInOut" }} exit={{ opacity: 0 }} onAnimationComplete={() => setloading(false)} className='mx-auto object-cover'></motion.img>
                                <motion.img src={image5} initial={{ y: 0, x: 0, opacity: 0 }} animate={{ width: "20%", height: "40%", opacity: 1, y: -850, x: 250 }} transition={{ delay: 1.30, duration: 2, ease: "easeInOut" }} exit={{ opacity: 0 }} onAnimationComplete={() => setloading(false)} className='mx-auto object-cover'></motion.img>
                            </>

                            :
                            ""
                    }
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Home;