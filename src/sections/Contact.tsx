import grainImage from "@/assets/images/grain.jpg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900  py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url${grainImage.src}`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center ">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and
                discus! how I can help you achieve your goals.
              </p>
            </div>
            <button className="text-white bg-gray-900 px-6 h-12 rounded-xl gap-2 w-max min-w-44 border border-gray-900">
              <div className="inline-flex  items-center gap-2">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
