"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "./LanguageContext"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("aboutMe")} <span className="text-primary">{t("me")}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src="/placeholder.jpeg"
                alt="Guilherme Pereira"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-lg flex items-center justify-center p-1">
              <span className="text-white text-lg font-bold">8+</span>
              <span className="text-white text-xs ml-1">{t("yearsExperience")}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">{t("softwareDeveloper")}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t("aboutDescription1")}</p>
            <p className="text-gray-600 dark:text-gray-400">{t("aboutDescription2")}</p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="font-semibold">{t("name")}</p>
                <p className="text-gray-600 dark:text-gray-400">Guilherme Pereira</p>
              </div>
              <div>
                <p className="font-semibold">{t("email")}</p>
                <p className="text-gray-600 dark:text-gray-400">guilhermepereiraa95@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">{t("location")}</p>
                <p className="text-gray-600 dark:text-gray-400">São Paulo, Brazil</p>
              </div>
              <div>
                <p className="font-semibold">{t("availability")}</p>
                <p className="text-gray-600 dark:text-gray-400">{t("availabilityStatus")}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

