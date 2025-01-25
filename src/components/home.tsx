import Navbar from "./Navbar";
import { useTranslation } from "../lib/i18n";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import Services from "./sections/services";

import Contact from "./sections/contact";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />

      <main className="pt-20 bg-foreground">
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-card py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {t("home.copyright")}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
