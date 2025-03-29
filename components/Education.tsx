"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap } from "lucide-react"
import { useLanguage } from "./LanguageContext"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useLanguage()

  const education = [
    {
      degree: t("edu1Degree"),
      institution: t("edu1Institution"),
      period: t("edu1Period"),
      description: t("edu1Description"),
    },
    {
      degree: t("edu2Degree"),
      institution: t("edu2Institution"),
      period: t("edu2Period"),
      description: t("edu2Description"),
    },
    {
      degree: t("edu3Degree"),
      institution: t("edu3Institution"),
      period: t("edu3Period"),
      description: t("edu3Description"),
    },
  ]

  return (
    <section id="education" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("myEducation")} <span className="text-primary">{t("education")}</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              <div className="mb-4 text-primary">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-primary font-medium mb-2">{edu.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{edu.period}</p>
              <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>

              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-700 delay-200">
                <GraduationCap size={20} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

