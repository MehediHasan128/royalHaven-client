import AdminDashboard from "../pages/admin/AdminDashboard";
import Users from "../pages/admin/allUsers/Users";
import { ReactNode } from "react";
import {
  generateUserRoutes,
  generateUserSidebar,
} from "../utils/generateUserRoutesAndSidebar";
import { CgProfile } from "react-icons/cg";
import AllProperties from "../pages/admin/allProperties/AllProperties";
import { MdOutlineFavoriteBorder, MdOutlineQueryStats, MdOutlineReportProblem } from "react-icons/md";
import { IoBookmarkOutline } from "react-icons/io5";

export type TAdminRoutesItem = {
  index?: boolean;
  icon?: ReactNode;
  path?: string;
  name?: string;
  element: ReactNode;
};

export const buyerRoutes = [
  {
    index: true,
    element: <AdminDashboard />,
  },
  {
    icon: <CgProfile />,
    path: "/buyer/profile",
    name: "Profile",
    element: <AdminDashboard />,
  },
  {
    icon: <MdOutlineQueryStats />,
    path: "/buyer/queries",
    name: "Queries",
    element: <Users />,
  },
  {
    icon: <MdOutlineFavoriteBorder />,
    path: "/buyer/favouriteProperties",
    name: "Favourite Properties",
    element: <AllProperties />,
  },
  {
    icon: <IoBookmarkOutline />,
    path: "/buyer/bookmarkProperties",
    name: "Bookmark Properties",
    element: <AllProperties />,
  },
  {
    icon: <MdOutlineReportProblem />,
    path: "/buyer/reports",
    name: "Reports",
    element: <AllProperties />,
  },
];

export const BuyerRoutes = generateUserRoutes(buyerRoutes);
export const BuyerSidebar = generateUserSidebar(buyerRoutes);
