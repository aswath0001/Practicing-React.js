import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import './App.css';

const Animation = () => {
    const boxRef = useRef(); 

    useGSAP(() => {
        gsap.to(boxRef.current, { 
            x:600,
            duration: 3,
        });
    });

    return (
        <div className="app">
            <div className="box" ref={boxRef}>
            </div>
        </div>
    );
};

export default Animation;
