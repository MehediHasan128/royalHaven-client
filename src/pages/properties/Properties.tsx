import { useState } from "react";
import Header from "./Header/Header";
import MainPropertyContainer from "./MainPropertyContainer/MainPropertyContainer";
import PropertyDetails from "./PropertyDetails/PropertyDetails";
import Sidebar from "./Sidebar/Sidebar";
import { RxCross2 } from "react-icons/rx";

const Properties = () => {
  const [propertyId, setPropertyId] = useState<string | null>(null);

  return (
    <div className="h-screen flex flex-col">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full h-20 flex items-center px-5 shadow bg-white z-50">
        <Header />
      </header>

      <div className="flex flex-1 pt-20">
        {/* Sidebar */}
        <aside className="w-64 h-full py-4 fixed left-0 top-20 shadow-lg">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-4 ml-64 min-h-screen">
          <div className="grid grid-cols-5 gap-5">
            <div
              className={`${
                propertyId === null
                  ? "col-span-5"
                  : "col-span-3 bg-white rounded-2xl p-2"
              }`}
            >
              <MainPropertyContainer id={propertyId} setId={setPropertyId} />
            </div>
            <div className={`${propertyId === null ? "hidden" : "col-span-2"}`}>
                <div className="p-2 flex justify-end bg-gray-200 rounded-t-2xl">
                  <RxCross2 onClick={() => setPropertyId(null)} className="text-3xl cursor-pointer" />
                </div>
              <div className="bg-white rounded-b-2xl p-2">
                <PropertyDetails propertyId={propertyId} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Properties;

// w-[60%] bg-white rounded-2xl p-2 min-h-screen
