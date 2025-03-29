"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase } from "lucide-react"
import { useLanguage } from "./LanguageContext"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useLanguage()

  const experiences = [
    {
      title: t("exp1Title"),
      company: t("exp1Company"),
      period: t("exp1Period"),
      description: t("exp1Description"),
    },
    {
      title: t("exp2Title"),
      company: t("exp2Company"),
      period: t("exp2Period"),
      description: t("exp2Description"),
    },
    {
      title: t("exp3Title"),
      company: t("exp3Company"),
      period: t("exp3Period"),
      description: t("exp3Description"),
    },
    {
      title: t("exp4Title"),
      company: t("exp4Company"),
      period: t("exp4Period"),
      description: t("exp4Description"),
    },
    {
      title: t("exp5Title"),
      company: t("exp5Company"),
      period: t("exp5Period"),
      description: t("exp5Description"),
    },
    {
      title: t("exp6Title"),
      company: t("exp6Company"),
      period: t("exp6Period"),
      description: t("exp6Description"),
    },
    {
      title: t("exp7Title"),
      company: t("exp7Company"),
      period: t("exp7Period"),
      description: t("exp7Description"),
    },
  ]

  return (
    <section id="experience" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("workExperience")} <span className="text-primary">{t("experience")}</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center space-x-2 text-primary font-medium my-2">
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

