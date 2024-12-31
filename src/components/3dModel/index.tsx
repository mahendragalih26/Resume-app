// import * as THREE from "three"
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

// const camera = new THREE.PerspectiveCamera(
//   10,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// )
// camera.position.z = 13

// const scene = new THREE.Scene()
// let robot
// const loader = new GLTFLoader()
// loader.load(
//   "./model/steambot.glb",
//   (gltf) => {
//     robot = gltf.scene
//     scene.add(robot)
//   },
//   (xhr) => {},
//   (error) => {}
// )
// const renderer = new THREE.WebGLRenderer({ alpha: true })
// renderer.setSize(window.innerWidth, window.innerHeight)

// // render to id
// document.getElementById("container3D")?.appendChild(renderer.domElement)

// const reRender3D = () => {
//   requestAnimationFrame(reRender3D)
//   renderer.render(scene, camera)
// }

// export default reRender3D()

import {
  Environment,
  Html,
  OrbitControls,
  ScrollControls,
  useProgress,
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { SteamBotModel } from "./steamBot"
import { Suspense } from "react"

function Loader() {
  const { progress, active } = useProgress()
  return <Html center>{progress.toFixed(1)}% loaded</Html>
}

const Canvas3D = () => {
  return (
    <div className="h-[100vh] w-[100vw] fixed">
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        className="relative h-svh"
      >
        {/* <OrbitControls /> */}
        {/* <directionalLight intensity={3} position={[-5, -5, 0]} /> */}
        {/* <ambientLight intensity={8} /> */}
        <Environment preset="lobby" />
        <Suspense fallback={<Loader />}>
          {/* <ScrollControls damping={0.2} pages={7}> */}
          <SteamBotModel />
          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Canvas3D
