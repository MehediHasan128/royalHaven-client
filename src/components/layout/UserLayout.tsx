import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Header from "../../pages/properties/Header/Header";
import { Typography } from "@mui/material";
import { AdminSidebar } from "../../routes/admin.routes";
import { MdLogout } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  useCurrentUser,
  userSignOut,
} from "../../redux/features/user/userSlice";
import { BuyerSidebar } from "../../routes/buyer.routes";
import { IoHomeOutline } from "react-icons/io5";
import { SellerSidebar } from "../../routes/seller.routes";

const Role = {
  ADMIN: "admin",
  BUYER: "buyer",
  SELLER: "seller"
};

const UserLayout = () => {
  const currentUser = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const role = `${currentUser?.userRole}`;
  let sidebarItems;

  switch (role) {
    case Role.ADMIN:
      sidebarItems = AdminSidebar;
      break;
    case Role.BUYER:
      sidebarItems = BuyerSidebar;
      break;
    case Role.SELLER:
      sidebarItems = SellerSidebar;
      break;

    default:
      break;
  }

  const handelAdminSignOut = () => {
    dispatch(userSignOut());
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full h-20 flex items-center px-5 shadow bg-white z-50">
        <Header />
      </header>

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="w-64 h-full fixed left-0 top-20 shadow-lg px-2 pt-5 pb-24">
          <div className="h-full overflow-y-auto overflow-x-hidden text-gray-700 flex flex-col">
            <div className="space-y-2 flex-grow">
              {sidebarItems!.map((item) => (
                <NavLink
                  to={item.path}
                  key={item.key}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "flex items-center gap-2 cursor-pointer text-[#002C54] bg-gray-200 px-4 py-2 rounded"
                      : "flex items-center gap-2 cursor-pointer hover:scale-105 hover:translate-x-3 duration-700 bg-transparent px-4 py-2 rounded"
                  }
                >
                  <div className="text-2xl">{item.icon}</div>
                  <Typography variant="subtitle1">
                    <span className="font-semibold">{item.label}</span>
                  </Typography>
                </NavLink>
              ))}
            </div>
            {currentUser?.userRole !== "admin" ? (
              <NavLink
                to="/"
                className="flex items-center gap-2 cursor-pointer hover:scale-105 hover:translate-x-3 duration-700 bg-transparent px-4 py-2 rounded mb-1"
              >
                <IoHomeOutline className="text-2xl" />
                <Typography variant="subtitle1">
                  <span className="font-semibold">Return Home</span>
                </Typography>
              </NavLink>
            ) : (
              <></>
            )}
            <button
              onClick={handelAdminSignOut}
              className="flex items-center gap-2 cursor-pointer hover:scale-105 hover:translate-x-3 duration-700 bg-transparent px-4 py-2 rounded mb-1"
            >
              <MdLogout className="text-2xl" />
              <Typography variant="subtitle1">
                <span className="font-semibold">Logout</span>
              </Typography>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 px-10 py-8 ml-64 min-h-screen">
          <div className="rounded-2xl min-h-screen">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
