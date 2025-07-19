import { HomeIcon } from "lucide-react";
import type { MenuItem } from "../@types";

export const menuItems: MenuItem[] = [
  {
    icon: <HomeIcon size={26} />,
    label: "Início",
    path: "/dashboard/home",
  },
]