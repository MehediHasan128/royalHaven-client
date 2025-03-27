import { ReactNode } from "react";
import {
  generateUserRoutes,
  generateUserSidebar,
} from "../utils/generateUserRoutesAndSidebar";
import { CgProfile } from "react-icons/cg";
import AllProperties from "../pages/admin/allProperties/AllProperties";
import { MdOutlineQueryStats, MdOutlineReportProblem } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import Profile from "../pages/buyer/Profile/Profile";
import Queries from "../pages/buyer/Queries/Queries";
import FavoriteProperty from "../pages/buyer/FavoriteProperty/FavoriteProperty";
import { RiHome9Line } from "react-icons/ri";

export type TAdminRoutesItem = {
  index?: boolean;
  icon?: ReactNode;
  path?: string;
  name?: string;
  element: ReactNode;
};

export const sellerRoutes = [
  {
    index: true,
    element: <Profile />,
  },
  {
    icon: <CgProfile />,
    path: "/seller/profile",
    name: "Profile",
    element: <Profile />,
  },
  {
    icon: <MdOutlineQueryStats />,
    path: "/seller/customerQueries",
    name: "Customer Queries",
    element: <Queries />,
  },
  {
    icon: <RiHome9Line />,
    path: "/seller/myProperties",
    name: "My Properties",
    element: <FavoriteProperty />,
  },
  {
    icon: <GoCodeReview />,
    path: "/seller/review",
    name: "Reviews",
    element: <AllProperties />,
  },
  {
    icon: <MdOutlineReportProblem />,
    path: "/seller/reports",
    name: "Reports",
    element: <AllProperties />,
  },
];

export const SellerRoutes = generateUserRoutes(sellerRoutes);
export const SellerSidebar = generateUserSidebar(sellerRoutes);
