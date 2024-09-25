import { Card } from "@/components/Card"
import { SectionHeader } from "@/components/Sectionheader"
import Image from "next/image"
import bookImage from "@/assets/images/book-cover.png"
import StarIcon from "@/assets/icons/star.svg"
import JavaScriptIcon from "@/assets/icons/square-js.svg"
import Html5Icon from "@/assets/icons/html5.svg"
import CSS3icon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import { TechIcon } from "@/components/TechIcon"
import mapImage from "@/assets/images/map2.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader"
import { ToolboxItems } from "@/components/ToolbokItems"

const toolboxItems = [
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "HTML5", iconType: Html5Icon },
  { title: "CSS3", iconType: CSS3icon },
  { title: "React", iconType: ReactIcon },
]

const hobbies = [
  { title: "Swimming", emoji: "🏊‍♀️", left: "5%", top: "5%" },
  { title: "Photogrphy", emoji: "📷", left: "50%", top: "5%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
]

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and more "
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Read" description="Explore The Books" />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore The Technology and tools"
                className="px-6 pt-6"
              />
              <ToolboxItems items={toolboxItems} className="mt-6" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest"
                className="px-6 pt-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-900">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outlined-gray-950/30">
                <Image
                  src={smileMemoji}
                  alt="smilling emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
