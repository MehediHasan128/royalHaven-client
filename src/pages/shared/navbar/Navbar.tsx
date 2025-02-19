import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import logoWhite from "../../../assets/images/logo-white.png";
import logoBlue from "../../../assets/images/logo.png";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import SideNavbar from "../../../components/ui/SideNavbar";

const navItems = ["Home", "Properties", "FAQs", "About Us"];

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      const bannerHeight = document.getElementById("bannerBackground")?.clientHeight || 0;
      setIsScrolled(window.scrollY > bannerHeight);
      console.log(window.scrollY, bannerHeight);
    }

    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, [])

  return (
    <>
      <div className="py-5 fixed w-full z-50 backdrop-blur-lg backdrop-brightness-125">
        <div className={`w-[95%] mx-auto ${isScrolled ? "text-[#142D53]" : "text-white"}`}>
          <div className="grid lg:grid-cols-3">
            {/* Menubar and logo */}
            <div className="flex">
              {/* Menubar */}
              <div onClick={() => setSidebar(!sidebar)} className="flex lg:hidden items-center h-full cursor-pointer">
                <SideNavbar />
              </div>
              {/* Website logo */}
              <div className="w-fit mx-auto lg:mx-0">
                <NavLink to="/" className="flex items-center gap-2">
                  <img className="w-7" src={`${isScrolled ? logoBlue : logoWhite}`} alt="" />
                  <Typography variant="h4">
                    <span
                      className={`font-semibold ${isScrolled ? "text-[#142D53]" : "text-white"}`}
                      style={{ fontFamily: '"Great Vibes", serif' }}
                    >
                      Royal Haven
                    </span>
                  </Typography>
                </NavLink>
              </div>
            </div>

            {/* Nav items */}
            <div className="hidden lg:flex justify-center items-center gap-8">
              {navItems.map((item) => (
                <>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-blue-500" : ""
                    }
                  >
                    <Typography variant="body1">
                      <span className="font-light">{item}</span>
                    </Typography>
                  </NavLink>
                </>
              ))}
            </div>

            {/* sign in btn */}
            <div className="text-end hidden lg:flex justify-end">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink to="/signin">
                  <Typography variant="button">
                    <span className={`border px-5 py-3 font-medium ${isScrolled? "text-black" : "text-white"} rounded-3xl cursor-pointer`}>
                      Sign In
                    </span>
                  </Typography>
                </NavLink>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
