import { MdDashboard } from "react-icons/md";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { FaUsers } from "react-icons/fa6";
import Users from "../pages/admin/allUsers/Users";
import { ReactNode } from "react";
import { generateAdminRoutes, generateAdminSidebar } from "../utils/generateAdminRoutesAndSidebar";

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
    icon: <MdDashboard />,
    path: "/admin/dashboard",
    name: 'Dashboard',
    element: <AdminDashboard />,
  },
  {
    icon: <FaUsers />,
    path: "/admin/users",
    name: 'All Users',
    element: <Users />,
  },
];

export const AdminRoutes = generateAdminRoutes(adminRoutes);
export const AdminSidebar = generateAdminSidebar(adminRoutes);
