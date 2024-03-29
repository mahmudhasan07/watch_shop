
import { motion } from "framer-motion";
import json from "../public/data.json";
import { useEffect, useRef, useState } from "react";
const Cards = () => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.5 // Adjust threshold as needed
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
            console.log("visable");
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
                console.log("hidden");
            }
        };
    }, []);


    return (
        <section>
            <h1 className="text-4xl font-bold text-center my-10">Cards Section</h1>
            <motion.div ref={cardRef} animate={{ x: isVisible ? 0 : -(2000), opacity: isVisible ? 1 : 0.1 }}
                transition={{ delay: isVisible ? 1 : 0, duration: 5 }} className="flex flex-wrap justify-center gap-10">
                {
                    json.map((element, idx) => <Card key={idx} card={element} id={idx}></Card>)
                }
            </motion.div>

        </section>
    );
};

const Card = ({ card, id }) => {
    const [color, setcolor] = useState("bg-white")

    const handlemodal = () => {
        document.getElementById("modal").showModal()
    }

    const handlemodal2 =()=>{
        document.getElementById("modal").close()
    }

    return (
        <>
            <motion.div onMouseEnter={handlemodal} className={`${color}  card w-80 space-y-1 border-2 p-2`}
                initial={{ x: -(id * 2000), opacity: 0.1 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
            // onScroll={{animate}}

            >
                <img className="w-72 mx-auto " src={card?.image} alt="" />
                <h1 className="font-semibold text-xl">{card.title}</h1>
                <h1 className="font-semibold text-2xl">{card.name}</h1>
                <h1 className="font-semibold">{card.description}</h1>
            </motion.div>

            <motion.dialog initial={{opacity:0, y:"250"}} animate={{opacity:1, y:0}} transition={{delay:.5, duration:2, ease:"easeIn"}} id="modal" className="w-96 h-fit mt-10 p-2">
                <div>
                    <div className="flex justify-end">
                        <button onMouseEnter={handlemodal2} className="btn btn-primary">close</button>
                    </div>
                    <h1 className="text-5xl font-extrabold ">Hello</h1>
                    <h1 className="text-5xl font-extrabold ">Hello</h1>
                    <h1 className="text-5xl font-extrabold ">Hello</h1>
                    <h1 className="text-5xl font-extrabold ">Hello</h1>
                </div>
            </motion.dialog>
        </>
    )
}

export default Cards;