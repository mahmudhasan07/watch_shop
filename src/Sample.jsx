import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Sample.css"

const Sample = () => {
    const [hidden, setHidden] = useState("hidden")
    useEffect(()=>{
        AOS.init({
            
        })
    },[])
    return (
        <section className='border-2 h-screen flex items-center justify-center'>
            <div id='div' className="fade-left  text-3xl w-fit h-fit text-center font-bold">
                <h1 id='title' onClick={()=>setHidden("flex")}>Hello, World!</h1>
                <p id='text' className={`${hidden} transition-all`} onClick={()=>setHidden("hidden")}>This content will fade in when scrolled into view.</p>
            </div>
        </section>
    );
};

export default Sample;