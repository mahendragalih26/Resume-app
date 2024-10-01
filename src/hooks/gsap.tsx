"use client"
import { ComponentPropsWithoutRef, useLayoutEffect, useRef } from "react"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animations"

export const AnimatedText = ({ children }: ComponentPropsWithoutRef<"div">) => {
  const text = useRef(null)

  useGSAP(() => {
    animateWithGsap(
      text.current ?? "",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      {
        markers: false,
      }
    )
  }, [])

  return (
    <div ref={text} className="g_fadeIn">
      {children}
    </div>
  )
}
