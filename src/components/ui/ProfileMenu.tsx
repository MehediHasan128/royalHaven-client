import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { ReactNode, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  useCurrentUser,
  userSignOut,
} from "../../redux/features/user/userSlice";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

const ProfileMenu = ({ children }: { children: ReactNode }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentUser = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();

  const handleUserSignOut = () => {
    dispatch(userSignOut());
  };

  return (
    <div>
      <Box>
        <Tooltip title="Account settings">
          <Box onClick={handleClick}>{children}</Box>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        disableScrollLock={true}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to="/signin" className="flex items-center gap-2 w-full">
            <img className="size-12 object-cover rounded-full" src={currentUser?.userProfileImage} alt="" />
            <Typography variant="h6"><span className="text-md font-semibold">My Profile</span></Typography>
          </NavLink>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleUserSignOut();
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Signout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
