"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Mail, Phone } from "lucide-react"
import { useLanguage } from "./LanguageContext"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useLanguage()
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: t("locationTitle"),
      details: t("locationBottom"), 
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: t("emailTitle"),
      details: "guilhermepereiraa95@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: t("phoneTitle"),
      details: "+55 (19) 98364-0835",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("contactMe")} <span className="text-primary">{t("me")}</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">{info.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{info.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

