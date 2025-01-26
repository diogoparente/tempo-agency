import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  categories?: string[];
  link?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing the key features and technologies used in its development.",
  imageUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
  categories = ["Web Development", "UI/UX"],
  link = "#",
}: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="w-full bg-card"
    >
      <Card className="overflow-hidden h-[420px] flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category, index) => (
              <Badge key={index} variant="secondary">
                {t(category)}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent>
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardContent>

        <CardFooter className="mt-auto">
          <Button variant="outline" className="w-full" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      id: "1",
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      imageUrl: "/assets/project1.png",
      categories: ["categories.web3", "categories.blog", "categories.webdev"],
      link: "https://coveragelabs.io",
    },
    {
      id: "3",
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      imageUrl: "/assets/project2.png",
      categories: [
        "categories.blog",
        "categories.webdev",
        "categories.fintech",
      ],
      link: "https://litebill.co",
    },
    {
      id: "2",
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      imageUrl: "/assets/project3.png",
      categories: ["categories.webdev", "categories.blog"],
      link: "https://imdiogo.com",
    },
  ];

  const categories = [
    "categories.all",
    "categories.webdev",
    "categories.blog",
    "categories.web3",
    "categories.fintech",
  ];

  const [selectedCategory, setSelectedCategory] = useState("categories.all");

  const filteredProjects =
    selectedCategory === "categories.all"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  return (
    <div id="#projects" className="w-full bg-background py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            {t("home.recentProjects")}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t("projects.grid.subtitle")}
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="m-1"
              >
                {t(category)}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                categories={project.categories}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {t("projects.grid.noProjects")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
