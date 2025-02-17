import { ListItem, Typography } from "@mui/material";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type tItems = {
  path: string;
  label: string;
  icon: ReactNode;
};

export const generateSideNav = (items: tItems[]) => {
  const sidebar = items.map((item) => (
    <ListItem key={item.label}>
      <NavLink
        to={item.path}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-blue-500 font-semibold" : "text-gray-500 font-medium"
        }
      >
        <Typography
          variant="subtitle1"
          className="flex justify-center items-center gap-3"
        >
          <span>{item.icon}</span>
          <span className="">{item.label}</span>
        </Typography>
      </NavLink>
    </ListItem>
  ));

  return sidebar;
};
