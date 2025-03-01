import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GSAPDemo = () => {
    const Dref = useRef(null);
    const Dref2 = useRef(null);

    useGSAP(() => {
        gsap.timeline()
            .to(Dref.current, { y: 30, duration: 0.5, ease: "power1.inOut" })
            .to(Dref.current, { y: 0, duration: 0.5, ease: "power1.inOut" });

        gsap.timeline()
            .to(Dref2.current, { x: 30, duration: 0.7, ease: "power1.inOut" })
            .to(Dref2.current, { x: 0, duration: 0.7, ease: "power1.inOut" });
    });

    return (
        <div>
            <h1 ref={Dref}>Hello <span ref={Dref2}>world</span></h1>
        </div>
    );
};

export default GSAPDemo;
