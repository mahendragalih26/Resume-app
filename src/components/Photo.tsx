"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import ProfilePhoto from "@/assets/images/profile/photo.png"

export const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 3, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 5, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] sl:h-[498px] mix-blend-lighten"
        >
          <Image
            src={ProfilePhoto}
            priority
            quality={100}
            fill
            alt="profile"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
