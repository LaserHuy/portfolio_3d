import React from "react";
import wcs from "../assets/company/wcs.png";

const Banner = () => {
    return (
        <div className="w-full py-[63px] text-white/50 sm:py-20">
            <div className="container">
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center text-[30px] md:justify-start [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll">
                        <li><img src={wcs} alt="logo" className="h-[30px]" /></li>
                        <li>Welcome</li>
                        <li>to</li>
                        <li>Dinh</li>
                        <li>Huy's</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Banner;