import { motion } from "framer-motion";

import { PicProfileCanvas } from "./canvas";
import { LogoHuy } from "./logoHuy";
import { picprofile } from "../assets";
import { styles } from "../style";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-around w-full h-screen mx-auto">
      <div className={`${styles.paddingX} relative inset-0 md:top-[120px] max-w-8xl
      ml-4 flex flex-row items-start gap-5`} >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient"/>
          </div>
          <div>
            <h1 className={`${styles.sectionHeadText} text-white`}>
              Hello, I'm <br/> <span className="text-[#915eff] sm:hidden">Dinh Huy</span>
            </h1>
            <LogoHuy className="w-[420px] h-[100px] hidden sm:block"/>
            <p className={`${styles.heroSubText} mt-2 text-white-80`}>
                I'm a junior full stack DevWeb.<br className="sm:block hidden" />
                This website is built with ReactJs and Tailwind.
            </p>
          </div>
      </div>
      <div className="relative top-[50px] w-[650px] hidden md:flex">
          <PicProfileCanvas className="absolute" />
          <img src={picprofile} alt="logo" 
          className="w-[200px] h-[250px] object-contain
          inset-x-0 inset-y-0 m-auto
          animate-[bounce_3s_infinite_ease_alternate] absolute"/>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center
      items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;
