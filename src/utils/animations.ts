import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

// Define types for the props
interface AnimationProps {
  duration?: number
  ease?: string
  [key: string]: any // Additional properties depending on the animation
}

interface ScrollProps {
  trigger?: Element | string
  start?: string
  end?: string
  toggleActions?: string
  [key: string]: any // Additional properties for ScrollTrigger
}

export const animateWithGsap = (
  target: Element | string,
  animationProps: AnimationProps,
  scrollProps?: ScrollProps
): void => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  })
}

// Define types for the timeline and rotation
interface Timeline {
  to(
    target: any,
    vars: gsap.TweenVars,
    position?: string | number
  ): gsap.core.Timeline
}

export const animateWithGsapTimeline = (
  timeline: Timeline,
  rotationRef: React.RefObject<any>,
  rotationState: number,
  firstTarget: Element | string,
  secondTarget: Element | string,
  animationProps: AnimationProps
): void => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  })

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  )

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  )
}
