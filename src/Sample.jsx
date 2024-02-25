import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Sample.css"

const Sample = () => {
    const [hidden, setHidden] = useState(false)
    useEffect(()=>{
        AOS.init({})
    },[])
    return (
        <section className='border-2 h-screen flex items-center justify-center'>
            <div id='div' onClick={()=>setHidden(!hidden)} className="fade-left  text-3xl text-center font-bold">
                <h1 id='title' >Hello, World!</h1>
                {
                    hidden == true ?
                    <p id='text'>This content will fade in when scrolled into view.</p>
                    :
                    ""
                }
            </div>
        </section>
    );
};

export default Sample;