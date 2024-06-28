import { Home, Leaf, Recycle, Earth, Handshake } from "lucide-react";
export const sidebarLinks = [
  {
    imgURL: Home,
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    imgURL: Leaf,
    route: "/dashboard/carbon-calculator",
    label: "Carbon Calculator",
  },
  {
    imgURL: Recycle,
    route: "/dashboard/waste-management",
    label: "Manage Wastes",
  },
  {
    imgURL: Earth,
    route: "/dashboard/save-the-world",
    label: "Save The World",
  },
  {
    imgURL: Handshake,
    route: "/communities",
    label: "Communities",
  },
  // {
  //   imgURL: "/assets/user.svg",
  //   route: "/profile",
  //   label: "Profile",
  // },
];