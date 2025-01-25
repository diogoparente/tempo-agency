import { Button } from "./ui/button";
import { MoonIcon, SunIcon, Menu, Globe, PhoneCall, Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { motion } from "framer-motion";
import { languages, useTranslation } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Sidebar } from "./ui/sidebar";

function MobileMenu({
  items,
}: {
  items: { title: string; url: string; icon?: any }[];
}) {
  return <Sidebar items={items} />;
}

function DesktopMenu({
  items,
}: {
  items: { title: string; url: string; icon?: any }[];
}) {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {items.map((item) => (
        <a key={item.title} href={item.url} className="flex items-center gap-2">
          {item.title}
          {item.icon ? <item.icon className="h-4 w-4 mt-1" /> : null}
        </a>
      ))}
    </div>
  );
}

function LanguageSwitcher() {
  const { t, setLang, lang: currentLanguage } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="language-switcher"
          variant="ghost"
          size="icon"
          className="hover:text-primary"
        >
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLang(lang as any)}
            className={currentLanguage === lang ? "bg-accent" : ""}
          >
            {t(`languages.${lang}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      aria-label="theme-toggle"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="hover:text-primary"
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </Button>
  );
};

const Navbar = () => {
  const { t } = useTranslation();

  const items = [
    { title: t("navbar.services"), url: "#services" },
    { title: t("navbar.projects"), url: "#projects" },
    { title: t("navbar.about"), url: "#about" },
    { title: t("navbar.contact"), url: "#contact", icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full h-20 bg-background border-b border-border fixed top-0 z-50"
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold">
            {t("navbar.brand")}
          </a>
        </div>

        {/* Desktop Navigation */}
        <DesktopMenu items={items} />
        {/* Right side controls */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <LanguageSwitcher />
          {/* Theme Toggle */}
          <ThemeToggle />
          {/* Mobile Menu Button */}
          <MobileMenu items={items} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
