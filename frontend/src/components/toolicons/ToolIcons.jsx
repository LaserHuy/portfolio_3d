import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiTailwindcss, SiMongodb, SiMysql,  
        SiJavascript, SiNodedotjs 
      } from 'react-icons/si';

const iconsMap = {
  React: SiReact,
  Tailwind: SiTailwindcss,
  Javascript: SiJavascript,
  Nodejs: SiNodedotjs,
  Mongodb: SiMongodb,
  MySQL: SiMysql,
};

const ToolIcons = React.forwardRef(({ iconNames, className, iconSize, borderSize }, ref) => {
 
  return (
    <div ref={ref} className={className}>
      {iconNames.map((icon, index) =>{
        const IconComponent = iconsMap[icon] 
        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, color: "#915eff" }} // Modify the color when hovering
            data-blobity
            data-blobity-radius={borderSize}
            data-blobity-offset-x={borderSize}
            data-blobity-offset-y={borderSize}
            data-blobity-magnetic={false}
          >
            {IconComponent && <IconComponent size={iconSize} />}
          </motion.div>
        )}
      )}
    </div>
  );
});

export default ToolIcons;