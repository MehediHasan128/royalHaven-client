import { ReactNode } from "react";
import {
  generateUserRoutes,
  generateUserSidebar,
} from "../utils/generateUserRoutesAndSidebar";
import { CgProfile } from "react-icons/cg";
import AllProperties from "../pages/admin/allProperties/AllProperties";
import {
  MdOutlineFavoriteBorder,
  MdOutlineQueryStats,
  MdOutlineReportProblem,
} from "react-icons/md";
import { IoBookmarkOutline } from "react-icons/io5";
import { GoCodeReview } from "react-icons/go";
import Profile from "../pages/buyer/Profile/Profile";
import Queries from "../pages/buyer/Queries/Queries";
import FavoriteProperty from "../pages/buyer/FavoriteProperty/FavoriteProperty";

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
    path: "/seller/queries",
    name: "Queries",
    element: <Queries />,
  },
  {
    icon: <MdOutlineFavoriteBorder />,
    path: "/seller/favouriteProperties",
    name: "Favourite Properties",
    element: <FavoriteProperty />,
  },
  {
    icon: <IoBookmarkOutline />,
    path: "/seller/bookmarkProperties",
    name: "Bookmark Properties",
    element: <AllProperties />,
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
