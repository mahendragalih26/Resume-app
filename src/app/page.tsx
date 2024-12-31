"use client"
import Preloader from "@/components/Preloader"
import { AboutSection } from "@/sections/About"
import { ContactSection } from "@/sections/Contact"
import { Footer } from "@/sections/Footer"
import { Header } from "@/sections/Header"
import { HeroSection } from "@/sections/Hero"
import { HomePage } from "@/components/HomePage"
import { ProjectsSection } from "@/sections/Projects"
import { TapeSection } from "@/sections/Tape"
import { TestimonialsSection } from "@/sections/Testimonials"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Canvas3D = dynamic(() => import("@/components/3dModel"), { ssr: false })

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      setTimeout(() => {
        setIsLoading(false)
        document.body.style.cursor = "default"
        window.scrollTo(0, 0)
      }, 2000)
    })()
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Canvas3D />
      <Header />
      <HeroSection />
      <HomePage
        title={"Software Engineer"}
        subtitle1={"Hello I'm"}
        subtitle2={"Galih Mahendra"}
        description={
          "Hi, I am a Software Engineer who has a strong interest in the combination of colors, patterns, images, and animations"
        }
        usePhoto
      />
      <div id="project" className="pt-14 md:pt-0">
        <ProjectsSection />
      </div>
      <TapeSection />
      <TestimonialsSection />
      <div id="about" className="pt-14 md:pt-0">
        <AboutSection />
      </div>
      <div id="contact" className="pt-14 md:pt-0">
        <ContactSection />
      </div>
      <Footer />
    </>
  )
}
