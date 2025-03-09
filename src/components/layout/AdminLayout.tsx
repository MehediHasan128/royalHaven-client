import { NavLink, Outlet } from "react-router-dom";
import Header from "../../pages/properties/Header/Header";
import { Typography } from "@mui/material";
import { AdminSidebar } from "../../routes/admin.routes";

const AdminLayout = () => {
  const sideItems = AdminSidebar;
  
  return (
    <div className="h-screen flex flex-col">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full h-20 flex items-center px-5 shadow bg-white z-50">
        <Header />
      </header>

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="w-64 h-full fixed left-0 top-20 shadow-lg px-2 pt-5 pb-24">
          <div className="h-full overflow-y-auto overflow-x-hidden space-y-2 text-gray-700">
            {sideItems.map((item) => (
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
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-4 ml-64 min-h-screen">
          <div className="rounded-2xl min-h-screen p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
