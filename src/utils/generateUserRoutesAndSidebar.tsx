import { ReactNode } from "react";
import { TAdminRoutesItem } from "../routes/admin.routes";

type TRoutes = {
  index?: boolean;
  path?: string;
  element: ReactNode;
};
type TSidebar = {
  key: string;
  icon: ReactNode;
  path: string;
  label: string;
};

export const generateUserRoutes = (items: TAdminRoutesItem[]) => {
  const routes = items.reduce((acc: TRoutes[], item) => {
    if (item.index) {
      acc.push({
        index: item.index,
        element: item.element,
      });
    }
    if (!item.index) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    return acc;
  }, []);

  return routes;
};

export const generateUserSidebar = (items: TAdminRoutesItem[]) => {
  const sidebar = items.reduce((acc: TSidebar[], item) => {
    if (!item.index) {
      acc.push({
        key: item.name!,
        icon: item.icon,
        path: item.path!,
        label: item.name!,
      });
    }

    return acc;
  }, []);

  return sidebar;
};
