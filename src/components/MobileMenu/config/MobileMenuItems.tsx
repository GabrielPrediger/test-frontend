import { HomeIcon, LogOut, User } from "lucide-react";
import type { MenuItem } from "../../../@types/Menu";

export const MobileMenuItems: MenuItem[] = [
  {
    icon: <HomeIcon size={26} className="text-primary-700" />,
    label: "Início",
    path: "/dashboard/home",
  },
  {
    icon: <User size={26} className="text-primary-700" />,
    label: "Clientes",
    path: "/dashboard/clientes",
  },
  {
    icon: <LogOut size={26} className="text-primary-700" />,
    label: "Sair",
    path: "/",
  },
]