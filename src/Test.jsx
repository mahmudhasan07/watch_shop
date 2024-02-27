
import { Outlet, useNavigate } from "react-router-dom";
import banner from "../public/watch_banner.png"
import { motion } from "framer-motion"
// import "./Test.css"

const Test = () => {

    const div1 = {
        initial: { opacity: 0 , x:-200 },
        animate: { opacity: 1, x:0},
    }
    const div2 = {
        initial: { opacity: 0 , x:200 },
        animate: { opacity: 1, x:0,},
    }

    const navigate = useNavigate()
    return (
        <section className="relative">
            <div className="h-[600px] ">
                <motion.img id="image" initial={{ width: "25%", height: "40%", y: "50%" }} animate={{ width: "100%", height: "100%", y: 0,  }} style={{filter:"brightness(65%)"}} transition={{ delay: .2, duration: 2.5, ease: "backOut" }} className=" mx-auto object-cover object-center" src={banner} alt="" ></motion.img>
            </div>
            <div className="absolute top-1/4 overflow-hidden flex flex-wrap justify-around">
                <motion.div variants={div1} initial="initial" animate="animate" transition={{delay:2.8, duration:3, ease : "backOut"}} className="my-auto text-white space-y-3">
                    <h1 className="text-4xl font-bold">Welcome come back to our website</h1>
                    <p className="text-2xl font-semibold">Where you can buy your favorite watch in latest collection </p>
                    <button onClick={()=>navigate("/hello")} className="btn">Shop Now</button>
                </motion.div>
                <motion.div variants={div2} initial="initial" animate="animate" transition={{delay:2.8, duration:3, ease : "backOut"}} className="w-1/3 rounded-xl">
                    <motion.img initial={{y:-15}} animate={{y:15}} transition={{delay:3, ease:"easeInOut", duration:1.5, repeat:Infinity, repeatType:"reverse"}} src={banner} className="rounded-xl" alt="" ></motion.img>
                </motion.div>
            </div>
        </section>
    );
};

export default Test;