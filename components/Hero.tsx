"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const downloadFile = (url: string, filename: string) => {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const handleDownload = () => {
    const fileUrl = "/file.pdf";
    downloadFile(fileUrl, "guilherme-pereira-full-stack-developer.pdf");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-xl font-medium text-primary">{t("hello")}</h2>
        <h1 className="text-4xl md:text-6xl font-bold">Guilherme Pereira</h1>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-400">
          {t("jobTitle")}
        </h3>
        <p className="text-lg max-w-2xl">{t("heroDescription")}</p>

        <div className="flex space-x-4">
          <a href="mailto:example@example.com">
            <Button className="rounded-full">
              <Mail className="mr-2 h-4 w-4" /> {t("contactMe")}
            </Button>
          </a>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={handleDownload}
          >
            {t("downloadCV")}
          </Button>
        </div>

        <div className="flex space-x-4 pt-4">
          <a
            href="https://github.com/guilhermepereiraa95"
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-pereira-full-stack-developer/"
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
