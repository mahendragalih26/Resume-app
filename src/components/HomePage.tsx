import { Photo } from "@/components/Photo"
import { Fragment, use } from "react"
import { twMerge } from "tailwind-merge"

export const HomePage = ({
  title,
  subtitle1,
  subtitle2,
  description,
  usePhoto = false,
}: {
  title: string
  subtitle1: string
  subtitle2: string
  description: string
  usePhoto?: boolean
}) => {
  return (
    <section className="h-full font-jetbrain">
      <div className="container mx-auto h-full">
        <div
          className={twMerge(
            usePhoto && "md:flex-row",
            "flex flex-col items-center justify-between "
          )}
        >
          <div
            className={twMerge(
              "text-center order-2 md:order-none",
              usePhoto && "md:text-left"
            )}
          >
            <span className="text-lg md:text-xl">{title}</span>
            <h1 className="h1 mb-6 text-3xl md:text-5xl leading-[1.1] font-semibold">
              {subtitle1} <br />{" "}
              <span className="text-accent">{subtitle2}</span>
            </h1>
            <p
              className={twMerge(
                !usePhoto && "m-auto",
                "max-w-[500px] mb-9 text-white/80"
              )}
            >
              {description}
            </p>{" "}
          </div>
          {usePhoto && (
            <div className="order-1 md:order-none mb-8 md:mb-0">
              <Fragment>
                <Photo />
                <div className="text-center">
                  <div className=" bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                    <div className="bg-green-500 size-2.5 rounded-full relative">
                      <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
                    </div>
                    <div className="text-sm font-medium">
                      Available for new project
                    </div>
                  </div>
                </div>
              </Fragment>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
