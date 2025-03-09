import AdminDashboard from "../pages/admin/AdminDashboard";
import Users from "../pages/admin/allUsers/Users";
import { AiOutlineHome } from "react-icons/ai";
import { ReactNode } from "react";
import { generateAdminRoutes, generateAdminSidebar } from "../utils/generateAdminRoutesAndSidebar";
import { PiUsersThreeLight } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import AllProperties from "../pages/admin/allProperties/AllProperties";
import { MdPendingActions } from "react-icons/md";

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
    name: 'Dashboard',
    element: <AdminDashboard />,
  },
  {
    icon: <PiUsersThreeLight />,
    path: "/admin/users",
    name: 'Users',
    element: <Users />,
  },
  {
    icon: <AiOutlineHome />,
    path: "/admin/properties",
    name: 'Properties',
    element: <AllProperties />,
  },
  {
    icon: <MdPendingActions />,
    path: "/admin/pendingProperties",
    name: 'Pending Properties',
    element: <AllProperties />,
  },
];

export const AdminRoutes = generateAdminRoutes(adminRoutes);
export const AdminSidebar = generateAdminSidebar(adminRoutes);
