import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa6";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { generateSideNav } from "../../utils/generateSideNav";
import { BsBuildings } from "react-icons/bs";
import logo from "../../assets/images/logo.png";
import { Divider, Typography } from "@mui/material";

const SideNavbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const sideMenuOptions = [
    {
      icon: <IoHomeOutline />,
      path: "/",
      label: "Home",
    },
    {
      icon: <BsBuildings />,
      path: "/properties",
      label: "Properties",
    },
    {
      icon: <FaQuestion />,
      path: "/faq",
      label: "FAQs",
    },
    {
      icon: <MdOutlineRoundaboutRight />,
      path: "/about",
      label: "About Us",
    },
  ];

  const sidebarOptions = generateSideNav(sideMenuOptions);

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <BiMenuAltLeft className="w-12 text-3xl" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box>
          <div className="p-8">
            <div className="w-fit mx-auto">
              <img className="w-8 mx-auto" src={logo} alt="" />
              <Typography variant="h6">
                <span
                  className="font-semibold text-[#176ead]"
                  style={{ fontFamily: '"Great Vibes", serif' }}
                >
                  Royal Haven
                </span>
              </Typography>
            </div>
          </div>
        </Box>
        <Divider />
        <Box
          sx={{ width: 250 }}
          onClick={toggleDrawer(false)}
        >
          <List>{sidebarOptions}</List>
        </Box>
        <Box>

        </Box>
      </Drawer>
    </div>
  );
};

export default SideNavbar;
