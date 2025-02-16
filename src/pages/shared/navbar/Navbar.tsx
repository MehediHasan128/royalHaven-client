import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import * as motion from "motion/react-client";

const navItems = ["Home", "Properties", "FAQs", "About Us"];

const Navbar = () => {
  return (
    <>
      <div className="shadow py-5">
        <div className="w-[95%] mx-auto">
          <div className="grid grid-cols-3">
            {/* Website logo */}
            <div>
              <NavLink to="/" className="flex items-center gap-2">
                <img className="w-7" src={logo} alt="" />
                <Typography variant="h4">
                  <span
                    className="font-semibold text-[#176ead]"
                    style={{ fontFamily: '"Great Vibes", serif' }}
                  >
                    Royal Haven
                  </span>
                </Typography>
              </NavLink>
            </div>

            {/* Nav items */}
            <div className="flex justify-center items-center gap-8">
              {navItems.map((item) => (
                <>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <Typography variant="subtitle1">
                      <span className="font-medium">{item}</span>
                    </Typography>
                  </NavLink>
                </>
              ))}
            </div>

            {/* sign in btn */}
            <div className="text-end">
              <div className="h-full flex justify-end items-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink to="/signin">
                    <Typography variant="subtitle1">
                      <span className="bg-blue-500 px-5 py-3 font-semibold text-white rounded-3xl cursor-pointer">
                        Sign In
                      </span>
                    </Typography>
                  </NavLink>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
