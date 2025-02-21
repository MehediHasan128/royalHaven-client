import { Avatar, Typography } from "@mui/material";
import logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { LuMessageSquareText } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const buttons = ["All", "Sell", "Rent", "Favorites", "Services"];

const Header = () => {
  const [activeBtn, setActiveBtn] = useState("All");

  return (
    <div className="flex items-center justify-between w-full">
      <NavLink to="/home" className="w-fit flex items-end gap-3">
        <img className="w-8" src={logo} alt="" />
        <Typography variant="h5">
          <span id="logoFont">Royal Haven</span>
        </Typography>
      </NavLink>
      <div className="flex justify-between items-center gap-2 p-1 rounded-full bg-gray-100">
        {buttons.map((btn) => (
          <button
            onClick={() => setActiveBtn(btn)}
            key={btn}
            className={`${
              activeBtn === btn
                ? "bg-white text-red-600 font-medium"
                : "bg-transparent text-black"
            } px-4 py-1 rounded-full cursor-pointer`}
          >
            <Typography variant="caption">{btn}</Typography>
          </button>
        ))}
      </div>
      <div className="mr-5 w-[40%] flex justify-center gap-3 items-center">
        <div className="relative w-[50%]">
          <input
            className="bg-gray-100 py-2 px-10 rounded-full border-none focus:outline focus:outline-blue-700 w-full"
            type="text"
            name="searchField"
            id="searchField"
            placeholder="Search"
          />
          <div className="absolute top-0 left-0 rounded-l-full h-full pl-3 flex justify-center items-center text-xl">
            <IoIosSearch />
          </div>
          <button className="absolute top-0 right-0 rounded-l-full h-full pr-3 flex justify-center items-center text-xl hover:scale-105 duration-700 cursor-pointer">
            <MdOutlineCancel className="hidden" />
          </button>
        </div>
        <div className="bg-gray-100 p-3 text-xl rounded-full">
          <LuMessageSquareText />
        </div>
        <div className="bg-gray-100 p-3 text-xl rounded-full">
          <GoBell />
        </div>
        <div className="flex items-center gap-2">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <div className="leading-0.5">
            <Typography variant="subtitle2">Mehedi Hasan</Typography>
            <Typography variant="caption">mehedihadan@gmail.com</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
