import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const Sidebar = ({
  items,
}: {
  items: { title: string; url: string; icon?: any }[];
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <Button
        aria-label="mobile-menu"
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {isOpen ? (
        <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
            isOpen ? "" : "-translate-x-full"
          } sm:translate-x-0 opacity-95`}
          aria-label="Sidebar"
        >
          <div className="h-full px-4 py-6 overflow-y-auto bg-background border-r border-border">
            <div className="h-16">
              <a href="/" className="text-2xl font-bold ">
                {t("navbar.brand")}
              </a>
            </div>
            <ul className="space-y-2 font-medium">
              {items.map((item) => (
                <li key={item.title} onClick={toggleSidebar}>
                  <a
                    key={item.title}
                    href={item.url}
                    className="flex items-center gap-2 w-1/2"
                  >
                    {item.title}
                    {item.icon ? <item.icon className="h-4 w-4 mt-1" /> : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      ) : null}
    </div>
  );
};

export { Sidebar };
