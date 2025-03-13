import { Avatar, Typography } from "@mui/material";
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

const userRole = "admin";

const Header = () => {
  const [activeBtn, setActiveBtn] = useState("All");
  const [searchText, setSearchText] = useState<string | null>(null);

  const currentUser = useAppSelector(useCurrentUser);

  return (
    <div className="flex items-center justify-between w-full">
      <NavLink
        to={`${userRole === "admin" ? "/admin" : "/home"}`}
        className="w-fit flex items-end gap-3"
      >
        <img className="w-8" src={logo} alt="" />
        <Typography variant="h5">
          <span id="logoFont">Royal Haven</span>
        </Typography>
      </NavLink>
      {userRole !== "admin" ? (
        <>
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
        </>
      ) : (
        <></>
      )}
      <div className="mr-5 flex justify-end gap-3 items-center w-[40%]">
        {userRole !== "admin" ? (
          <>
            <div className="w-full">
              <SearchInput
                name="searchField"
                placeholder="Search Properties"
                searchText={setSearchText}
                icon={<IoIosSearch />}
              />
            </div>
          </>
        ) : (
          <></>
        )}
        {userRole && (
          <>
            <div className="bg-gray-200 p-3 text-xl rounded-full">
              <LuMessageSquareText />
            </div>
            <div className="bg-gray-200 p-3 text-xl rounded-full">
              <GoBell />
            </div>
            <div className="flex items-center gap-2">
              <Avatar alt="Remy Sharp" src={currentUser?.userProfileImage} />
              <div className="leading-0.5">
                <Typography variant="subtitle2">
                  {currentUser?.userName?.firstName}
                </Typography>
                <Typography variant="caption">
                  <span className="font-bold">UID:</span>{" "}
                  <span className="font-semibold text-blue-600">{currentUser?.userId}</span>
                </Typography>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
