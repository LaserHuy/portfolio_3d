import React from 'react';
import { motion } from 'framer-motion';

const ShinyBtn = () => {
  return (
    <motion.button
        className="px-6 py-2 rounded-xl relative radial-gradient"
        initial={{ "--x": "100%", scale: 1 }}
        animate={{ "--x": "-100%" }}
        whileTap={{ scale: 0.90 }}
        transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            scale: { yoyo: Infinity, duration: 0.5 },
        }}
        // whileHover={{ scale: 1.05 }}

    >
        <span className="text-neutral-100 tracking-wide font-light
        h-full w-full block relative linear-mask
        ">
            ShinyBtn
        </span>
        <span className="block absolute inset-0 rounded-xl p-px linear-overlay" />
    </motion.button>
  )
}

export default ShinyBtn;
