import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
    const size = 20;
    const circle = useRef();
    const mouse = useRef({ x: 0, y: 0 });

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.current = { x: clientX, y: clientY };

        moveCircle(mouse.current.x, mouse.current.y);
    };

    const moveCircle = (x, y) => {
        gsap.set(circle.current, { x, y });
    };

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => window.removeEventListener("mousemove", manageMouseMove);
    }, []);

    return (
        <div 
            ref={circle}
            className="cursor fixed top-0 left-0 bg-[#bf61ff]" 
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
                zIndex: 5,
                pointerEvents: "none",
                mixBlendMode: "difference",
                transform: "translate(-50%, -50%)",
                transition: "all 0.1s ease",
                transitionProperty: "width, height, border",
            }}
        />
    )
};

export default Cursor;