"use client"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"
import { Environment, OrbitControls } from "@react-three/drei"

export default function Scene() {
  return (
    <Canvas style={{ backgroundColor: "#141414" }}>
      {/* <directionalLight position={[0, 3, -2]} intensity={3} /> */}
      <Environment preset="city" />
      <OrbitControls makeDefault />
      <Model />
      <gridHelper
        args={[10, 40, "#404040", "#404040"]}
        position={[0, -1.45, 0]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  )
}
