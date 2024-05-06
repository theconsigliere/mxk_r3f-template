"use client"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"
import { Environment, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Scene() {
  const modelProps = useControls("Model Props", {
    rotation: { value: 1, min: 0.0, max: 10 },
    // amplitude: { value: 0.1, min: 0, max: 1 },
  })

  return (
    <Canvas style={{ backgroundColor: "#141414" }}>
      {/* <directionalLight position={[0, 3, -2]} intensity={3} /> */}
      <Environment preset="city" />
      <OrbitControls makeDefault />
      <Model {...modelProps} />
      <gridHelper
        args={[10, 40, "#404040", "#404040"]}
        position={[0, -1.15, 0]}
        rotation={[0, 0, 0]}
      />
    </Canvas>
  )
}
