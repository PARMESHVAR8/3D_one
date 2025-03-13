import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";

const Naruto = () => {
  const naruto = useGLTF("./earth/scene.gltf");

  return (
    <mesh>
      {/* Lighting Enhancements */}
      <ambientLight intensity={0.5} />
      <hemisphereLight intensity={0.3} groundColor="black" />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} position={[10, 10, 10]} />

      {/* 3D Model */}
      <primitive object={naruto.scene} scale={12} position-y={0} rotation-y={0} />
    </mesh>
  );
};

const NarutoCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, toneMappingExposure: 1.5 }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <OrbitControls
        autoRotate
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
     
      <Naruto />
      <Preload all />
    </Canvas>
  );
};

export default NarutoCanvas;