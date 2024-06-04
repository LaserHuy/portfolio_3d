import { useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";


const PicProfile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  

  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <hemisphereLight intensity={0.45} />
      <pointLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere args={[1, 100, 150]} scale={isMobile ? 1.7 : 2}>
        <MeshDistortMaterial 
          color="#3d1c76"
          attach="material"
          distort={0.5}
          speed={2} />
      </Sphere>
    </Canvas>
  )
}

export default PicProfile;
