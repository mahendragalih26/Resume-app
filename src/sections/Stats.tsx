import CountUp from "react-countup"

export const Stats = () => {
  const stats = [
    { num: 5, text: "Years of Experience" },
    { num: 26, text: "Project Completed" },
    { num: 9, text: "Technologies Mastered" },
    { num: 1000, text: "Code Commit" },
  ]
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto md:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-1 gap-4 items-center justify-center md:justify-start"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-2xl md:text-4xl font-extrabold"
              />
              <p className="text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
