import React from 'react';
import { motion } from "framer-motion"
const Slide = () => {
    return (
        <section>
            <motion.div initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: 2, ease: "linear" }} className='space-y-3'>
                <h1 className='text-8xl font-extrabold'>Welcome to Our Website</h1>
                <marquee className="text-5xl font-bold">50% off in our regular watches</marquee>
            </motion.div>
        </section>
    );
};

export default Slide;