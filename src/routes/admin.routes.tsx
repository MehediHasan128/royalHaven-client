import AdminDashboard from "../pages/admin/AdminDashboard";
import Users from "../pages/admin/allUsers/Users";
import { AiOutlineHome } from "react-icons/ai";
import { ReactNode } from "react";
import {
  generateUserRoutes,
  generateUserSidebar,
} from "../utils/generateUserRoutesAndSidebar";
import { PiUsersThreeLight } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import AllProperties from "../pages/admin/allProperties/AllProperties";
import { MdOutlineReportProblem, MdPendingActions } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import PendingSeller from "../components/icons/PendingSeller";
import SellerRequest from "../pages/admin/sellerRequest/SellerRequest";

export type TAdminRoutesItem = {
  index?: boolean;
  icon?: ReactNode;
  path?: string;
  name?: string;
  element: ReactNode;
};

export const adminRoutes = [
  {
    index: true,
    element: <AdminDashboard />,
  },
  {
    icon: <LuLayoutDashboard />,
    path: "/admin/dashboard",
    name: "Dashboard",
    element: <AdminDashboard />,
  },
  {
    icon: <PiUsersThreeLight />,
    path: "/admin/users",
    name: "Users",
    element: <Users />,
  },
  {
    icon: <PendingSeller />,
    path: "/admin/sellerReqest",
    name: "Seller Request",
    element: <SellerRequest />,
  },
  {
    icon: <AiOutlineHome />,
    path: "/admin/properties",
    name: "Properties",
    element: <AllProperties />,
  },
  {
    icon: <MdPendingActions />,
    path: "/admin/pendingProperties",
    name: "Pending Properties",
    element: <AllProperties />,
  },
  {
    icon: <MdOutlineReportProblem />,
    path: "/admin/reports",
    name: "Reports",
    element: <AllProperties />,
  },
  {
    icon: <IoSettingsOutline />,
    path: "/admin/settings",
    name: "Settings",
    element: <AllProperties />,
  },
];

export const AdminRoutes = generateUserRoutes(adminRoutes);
export const AdminSidebar = generateUserSidebar(adminRoutes);
