import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Code, Palette, Globe, Zap, Search, Languages } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-lg h-full flex-1 bg-card backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-300"
    >
      <div className="w-12 h-12 mb-4 text-background flex items-center justify-center rounded-lg bg-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      title: t("services.SEO_Optimization.title"),
      description: t("services.SEO_Optimization.description"),
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: t("services.Web_Development.title"),
      description: t("services.Web_Development.description"),
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("services.Digital_Strategy.title"),
      description: t("services.Digital_Strategy.description"),
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t("services.Performance_Optimization.title"),
      description: t("services.Performance_Optimization.description"),
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: t("services.Internationalization.title"),
      description: t("services.Internationalization.description"),
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: t("services.UI_UX_Design.title"),
      description: t("services.UI_UX_Design.description"),
    },
  ];

  return (
    <section id="#services" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl text-zinc-200 sm:text-4xl font-bold mb-4">
            {t("services.title")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
