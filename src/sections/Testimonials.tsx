import Image from "next/image"
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png"
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png"
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png"
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png"
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png"
import grainImage from "@/assets/images/grain.jpg"
import { Card } from "@/components/Card"
import { SectionHeader } from "@/components/Sectionheader"
import { Fragment } from "react"

const testimonials = [
  {
    name: "Nugroho Wicaksono",
    position: "Games Partnership Manager at Nuon",
    text: "I've had the pleasure of working alongside Galih for years and he has consistently demonstrated his unwavering dedication and hard work. Not only does Galih tackle tasks with unmatched enthusiasm, but his ability to quickly grasp new concepts and methodologies is truly remarkable. In addition to his professional prowess, Galih stands out as a genuinely friendly and amiable individual, always ready to offer a helping hand or share a kind word. I wholeheartedly recommend Galih to any team or organization looking for someone who brings both a strong work ethic and a positive attitude to the table.",
    avatar: memojiAvatar1,
  },
  {
    name: "Najibullah Rizqy Fathoni",
    position: "Mobile Developer",
    text: "I highly recommend Galih as Frontend Developer. He is very passionate and has great vision for his work. His focus keeps everything moving smoothly, he makes sure all the deadlines are met, and makes sure that whatever project he is working on meets the highest standards.",
    avatar: memojiAvatar2,
  },
  {
    name: "Septian Reza Andrianto",
    position: "Software Engineer | MSIG life",
    text: "Mas Galih and I work together at Sinarmas MSIG, He is a front end engineer, I'm not in doubt with his skills. He can make good vibes when the team feels burnout. He has good communication, so make integrate process so easy. He can complete the job quickly and well. He always support us when we got the trouble. I hope someday we can work together again.",
    avatar: memojiAvatar3,
  },
  {
    name: "Mohammad Fachmi Firmansyah",
    position: "Software Engineer | UI Developer | Creative Tech Enthusiast",
    text: "Good working adaptation",
    avatar: memojiAvatar5,
  },
]

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Dont`t just take my word for it. See what my clients have to say about
        my work"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-500"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
