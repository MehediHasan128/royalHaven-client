import { useState } from "react";
import Header from "./Header/Header";
import MainPropertyContainer from "./MainPropertyContainer/MainPropertyContainer";
import PropertyDetails from "./PropertyDetails/PropertyDetails";
import Sidebar from "./Sidebar/Sidebar";

const Properties = () => {

  const [propertyId, setPropertyId] = useState<number>(1);

  return (
    <div className="h-screen flex flex-col">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full h-20 flex items-center px-5 shadow bg-white z-50">
        <Header />
      </header>

      <div className="flex flex-1 pt-20">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white h-full p-4 fixed left-0 top-20">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-4 ml-64">
          <div className="flex gap-5">
            <MainPropertyContainer setId={setPropertyId} />
            <PropertyDetails propertyId={propertyId}/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Properties;
