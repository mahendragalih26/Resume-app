import { useState } from "react"
import { twMerge } from "tailwind-merge"

export const Header = () => {
  const [activeNav, setactiveNav] = useState<string>("home")
  const activeStyle =
    "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#"
          className={twMerge(
            activeNav === "home" ? activeStyle : "",
            "nav-item"
          )}
          onClick={() => {
            setactiveNav("home")
          }}
        >
          Home
        </a>
        <a
          href="#project"
          className={twMerge(
            activeNav === "project" ? activeStyle : "",
            "nav-item"
          )}
          onClick={() => {
            setactiveNav("project")
          }}
        >
          Projects
        </a>
        <a
          href="#about"
          className={twMerge(
            activeNav === "about" ? activeStyle : "",
            "nav-item"
          )}
          onClick={() => {
            setactiveNav("about")
          }}
        >
          About
        </a>
        <a
          href="#contact"
          className={twMerge(
            activeNav === "contact" ? activeStyle : "",
            "nav-item"
          )}
          onClick={() => {
            setactiveNav("contact")
          }}
        >
          Contact
        </a>
      </nav>
    </div>
  )
}
