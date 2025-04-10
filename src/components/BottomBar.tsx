import { GoHome } from "react-icons/go";
import { FiUser, FiBell, FiSettings } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function BottomBar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: GoHome, path: "/", label: "Inicio" },
    { icon: FiUser, path: "/profile", label: "Perfil" },
    { icon: FiBell, path: "/notifications", label: "Notificaciones" },
    { icon: FiSettings, path: "/settings", label: "Configuración" },
  ];

  return (
    <div className="fixed bottom-0 bg-[#f7f7f7] h-16 w-full px-4 border-t border-gray-200">
      <div className="flex justify-between items-center h-full max-w-2xl mx-auto text-2xl">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center justify-center p-2 transition-colors"
          >
            <item.icon
              className={`transition-colors ${isActive(item.path) ? "text-black" : "text-[#6F6F6D]"
                } hover:text-black`}
              aria-label={item.label}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
