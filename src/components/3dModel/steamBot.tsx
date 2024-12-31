import React, { useEffect, useLayoutEffect, useRef } from "react"
import { useGLTF, useAnimations, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { Group } from "three"
import { useMotionValue, useSpring } from "framer-motion"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export function SteamBotModel(props: any) {
  const group = useRef<Group>(null)

  //   model ref
  const robotGroupRef = useRef<Group>(null)
  const robotRef = useRef<Group>(null)

  //   const tl = useRef()
  const { nodes, materials, animations, scene } = useGLTF("/steambot.glb")
  const { actions, names, clips } = useAnimations(animations, group)
  const { viewport } = useThree()
  const scroll = useScroll()
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { damping: 1, stiffness: 20 })

  useEffect(() => {
    //@ts-ignore
    // actions["Animations"].play().paused = true
    actions[names[0]].reset().fadeIn(1).play()
  }, [])

  //   useFrame(() => {
  //     // tl.current.seek(scroll.offset + tl.current.duration())
  //     // console.log(
  //     //   "scroll = ",
  //     //   scroll?.offset,
  //     //   (actions[names[0]].getClip().duration * scroll.offset) / 4
  //     // )
  //     //@ts-ignore
  //     // actions[names[0]].time =
  //     //   //@ts-ignore
  //     //   (actions[names[0]].getClip().duration * scroll.offset) / 10
  //   })

  const FLOAT_SPEED = 1.5

  useGSAP(() => {
    if (!group.current || !robotGroupRef.current) return

    //   isReady();

    // Set can starting location
    gsap.set(group.current.position, { x: 5, y: 0 })
    gsap.set(group.current.rotation, { z: 0 })

    const introTl = gsap.timeline({
      defaults: {
        duration: 10,
        ease: "back.out(1.4)",
      },
    })

    if (window.scrollY < 20) {
      introTl.from(robotGroupRef.current.position, { y: -5, x: 1 }, 0)
    }

    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    })

    scrollTl
      // Rotate can group
      .to(group.current.rotation, { y: 4, x: 0 })
      .to(group.current.position, { x: -5 }, 0)

      .to(group.current.rotation, { x: 0, y: 6 })

      //   Restart position
      .to(
        group.current.position,
        { x: 5, duration: 3, ease: "sine.inOut" },
        1.3
      )

      //   restart rotation
      //   .to(robotGroupRef.current.rotation, { y: 0 }, 0)
      .to(group.current.rotation, { x: 0, y: 0 })
  })

  return (
    <group
      ref={group}
      {...props}
      //   position={[5, 0, 0]}
      scale={viewport.width / 8.5}
      dispose={null}
    >
      <group name="Sketchfab_Scene" ref={robotGroupRef}>
        <group name="Sketchfab_model" rotation={[-1, 0, 1]} scale={0.009}>
          <group
            name="a50809838f364547b5219b761a62190bfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group ref={robotRef} name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    //@ts-ignore
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material_11637}
                    //@ts-ignore
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group
                    name="Object_6"
                    position={[-25.781, 53.995, 9.808]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Steambot_Fly_LOD0"
                    position={[-25.781, 53.995, 9.808]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/steambot.glb")
