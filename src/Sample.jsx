import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import "./Sample.css"

const Sample = () => {
    useEffect(()=>{
        AOS.init({
            
        })
    },[])
    return (
        <section className='border-2 my-10'>
            <div className=" text-3xl text-black text-center font-bold" data-aos="fade-left" data-aos-easing="ease-in-out-back" data-aos-delay="700" data-aos-duration="2000">
                <h1>Hello, World!</h1>
                <p>This content will fade in when scrolled into view.</p>
            </div>
        </section>
    );
};

export default Sample;