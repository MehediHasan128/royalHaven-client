import { Outlet } from "react-router-dom";
import Header from "../../pages/properties/Header/Header";

const AdminLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full h-20 flex items-center px-5 shadow bg-white z-50">
        <Header />
      </header>

      <div className="flex flex-1 pt-20">
        {/* Sidebar */}
        <aside className="w-64 h-full py-4 fixed left-0 top-20 shadow-lg p-5">
          <h1>This is sidebar</h1>
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
