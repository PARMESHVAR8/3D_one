import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'

export default function Earth() {
  const gltf = useLoader(GLTFLoader, '/sports/scene.gltf')

  return (
    <>
      <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} autoRotate={true} autoRotateSpeed={100} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <primitive object={gltf.scene} scale={10} />
    </>
  )
}

