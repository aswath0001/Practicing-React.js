import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GSAPDemo = () => {
    const Dref = useRef(null);
    useGSAP (() => {
        gsap.to(Dref.current,{
            y:30,
            duration : 0.5,
            yoyo : true,
            ease:'power1.inOut',
            onComplete :() => {
                gsap.to (Dref.current,{
                    y:0,
                    duration: 0.5,
                    ease:'power1.inOut'
                })
            }
        }

        )
    })
  return (
    <div >
       <h1 ref={Dref}>Hello</h1>
    </div>
  )
}

export default GSAPDemo