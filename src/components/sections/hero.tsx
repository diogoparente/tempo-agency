import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const Hero = () => {
  const { t } = useTranslation();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-[600px] bg-zinc-800">
      <div className="z-10 mx-4 relative min-h-[600px] -mt-4  bg-background flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-border  rounded-bl-2xl rounded-br-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/5" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5 }}
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Abstract background shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 blur-3xl pointer-events-none">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/20 rounded-full" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
