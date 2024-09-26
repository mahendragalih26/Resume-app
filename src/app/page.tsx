"use client"
import Preloader from "@/components/Preloader"
import { AboutSection } from "@/sections/About"
import { ContactSection } from "@/sections/Contact"
import { Footer } from "@/sections/Footer"
import { Header } from "@/sections/Header"
import { HeroSection } from "@/sections/Hero"
import { ProjectsSection } from "@/sections/Projects"
import { TapeSection } from "@/sections/Tape"
import { TestimonialsSection } from "@/sections/Testimonials"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

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
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
