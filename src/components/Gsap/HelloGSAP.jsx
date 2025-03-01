import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HelloGSAP = () => {
    const headingRef = useRef(null);

    useEffect(() => {
        gsap.from(headingRef.current, {x:360});
    }, []);

    return (
        <div>
            <h1 ref={headingRef}>Hello, GSAP!</h1>
        </div>
    );
};

export default HelloGSAP;
