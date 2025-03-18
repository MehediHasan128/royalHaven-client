import { Typography } from "@mui/material";
import logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { GoBell } from "react-icons/go";
import { LuMessageSquareText } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import SearchInput from "../../../components/ui/SearchInput";
import { IoIosSearch } from "react-icons/io";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentUser } from "../../../redux/features/user/userSlice";

const buttons = ["All", "Sell", "Rent", "Favorites", "Services"];

const Header = () => {
  const [activeBtn, setActiveBtn] = useState("All");
  const [searchText, setSearchText] = useState<string | null>(null);

  const currentUser = useAppSelector(useCurrentUser);

  return (
    <div className="flex items-center justify-between w-full">
      <NavLink
        to={`${(currentUser?.userRole === 'admin')? "/admin" : "/"}`}
        className="w-fit flex items-end gap-3"
      >
        <img className="w-8" src={logo} alt="" />
        <Typography variant="h5">
          <span id="logoFont">Royal Haven</span>
        </Typography>
      </NavLink>

      {currentUser?.userRole !== "admin" && (
        <div className="flex justify-between items-center gap-2 p-1 rounded-full bg-gray-200">
          {buttons.map((btn) => (
            <button
              onClick={() => setActiveBtn(btn)}
              key={btn}
              className={`${
                activeBtn === btn ? "bg-white" : "bg-transparent"
              } px-4 py-1 rounded-full cursor-pointer`}
            >
              <Typography variant="caption">
                <span
                  className={`${
                    activeBtn === btn ? "font-bold text-blue-600" : ""
                  }`}
                >
                  {btn}
                </span>
              </Typography>
            </button>
          ))}
        </div>
      )}

      <div className="flex justify-end items-center gap-3 w-[35%]">
        {currentUser?.userRole !== "admin" && (
          <div className="w-[55%]">
            <SearchInput
              name="searchField"
              placeholder="Search Properties"
              searchText={setSearchText}
              icon={<IoIosSearch />}
            />
          </div>
        )}

        {currentUser ? (
          <>
            <div className="flex items-center gap-3 min-w-[45%]">
              <div className="bg-gray-200 p-3 text-xl rounded-full">
                <LuMessageSquareText />
              </div>
              <div className="bg-gray-200 p-3 text-xl rounded-full">
                <GoBell />
              </div>
              <div className="flex flex-grow items-center gap-2">
                <img className="size-11 object-cover rounded-full" src={currentUser?.userProfileImage} alt="" />
                <div className="leading-0.5">
                  <Typography variant="subtitle2">
                    {currentUser?.userName?.firstName}
                  </Typography>
                  <Typography variant="caption">
                    <span className="font-bold">UID:</span>{" "}
                    <span className="font-semibold text-blue-600">
                      {currentUser?.userId}
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/signin" className="px-4 py-1.5 rounded-full bg-[#002C54] cursor-pointer">
              <Typography variant="button">
                <span className="font-bold text-white">Sign In</span>
              </Typography>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
