import { HomeIcon, User } from "lucide-react";
import type { MenuItem } from "../@types";

export const menuItems: MenuItem[] = [
  {
    icon: <HomeIcon size={26} className="text-primary-50" />,
    label: "Início",
    path: "/dashboard/home",
  },
  {
    icon: <User size={26} className="text-primary-50" />,
    label: "Clientes",
    path: "/dashboard/clientes",
  },
]