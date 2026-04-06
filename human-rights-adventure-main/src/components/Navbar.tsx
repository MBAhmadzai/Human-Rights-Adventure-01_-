import { motion } from "framer-motion";
import { Home, Gamepad2, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { tr, type LangCode } from "@/lib/translations";

interface NavbarProps {
  lang: LangCode;
}

const Navbar = ({ lang }: NavbarProps) => {
  const location = useLocation();

  const links = [
    { to: "/", icon: Home, labelKey: "navHome" },
    { to: "/games", icon: Gamepad2, labelKey: "navGames" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border shadow-sm"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 20 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Heart className="w-6 h-6 text-accent fill-accent" />
          </motion.div>
          <span className="font-display font-bold text-lg text-foreground hidden sm:inline">
            {tr("heroTitle", lang)}
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link key={link.to} to={link.to}>
                <motion.div
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-display text-sm transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tr(link.labelKey, lang)}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
