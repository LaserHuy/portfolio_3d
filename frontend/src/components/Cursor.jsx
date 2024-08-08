import { useEffect, useRef } from "react";
import gsap from "gsap";

const colors = [
    "rgba(221, 116, 245, 0.459)",
    "#D0AAFB",
];

const Cursor = ({ isActive }) => {
    const size = isActive ? 100 : 10;
    const circles = useRef([]);
    const mouse = useRef({ x: 0, y: 0 });

    const delayedMouse = useRef({ x: 0, y: 0 });

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.current = { x: clientX, y: clientY };

    };

    const lerp = (x, y, n) => x * (1 - n) + y * n;
    const rafId = useRef(null);

    const moveCircle = (x, y) => {
        circles.current.forEach((circle) => {
            gsap.to(circle, {
                x,
                y,
                duration: 0.3,
                ease: "power3",
            });
        });
    };

    const animate = () => {
        const { x, y } = delayedMouse.current;
        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.03),
            y: lerp(y, mouse.current.y, 0.03),
        };

        moveCircle(delayedMouse.current.x, delayedMouse.current.y);
        rafId.current = window.requestAnimationFrame(animate);
    };

    useEffect(() => {
        animate();
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.cancelAnimationFrame(rafId.current);
        }
    }, [isActive]);

    return (
        <>
            {colors.map((color, index) => (
                <div
                    key={index}
                    ref={(el) => (circles.current[index] = el)}
                    className="cursor fixed top-0 left-0 blur-md pointer-events-none"
                    style={{
                        width: size,
                        height: size,
                        borderRadius: "50%",
                        backgroundColor: color,
                        backdropFilter: `blur(${isActive ? 0 : 0.5}rem)`,
                        zIndex: 3,
                        pointerEvents: "none",
                        mixBlendMode: "difference",
                        filter: "drop-shadow(0 0 0.5rem #D0AAFB)",
                        transform: "translate(-50%, -50%)",
                        transition: "all 0.3s ease-out",
                        transitionProperty: "width, height, border",
                    }}
                />
            ))}
        </>
    )
};

export default Cursor;