import { Divider, Typography } from "@mui/material";
import SearchInput from "../../../components/ui/SearchInput";
import { useState } from "react";
import RCheckBox from "../../../components/form/RCheckBox";
import { CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import PriceSlider from "../../../components/ui/PriceSlider";
import { RiCustomSize } from "react-icons/ri";
import { TbHexagonNumber0 } from "react-icons/tb";
import { PiDatabaseLight } from "react-icons/pi";

const Sidebar = () => {
  const [searchText, setSearchText] = useState<string | null>(null);
  const [filterLocation, setFilterLocation] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);

  const priceSlider = price !== "Custom";

  return (
    <div>
      {/* Sidebar Heading */}
      <div className="flex justify-between items-center px-4 mb-4">
        <Typography variant="subtitle1">
          <span className="font-semibold">Custom Filter</span>
        </Typography>
        <Typography variant="subtitle2">
          <span className="font-semibold text-blue-600 cursor-pointer">
            Clear All
          </span>
        </Typography>
      </div>

      <Divider />

      <div className="px-4 my-4">
        <SearchInput
          name="propertyLocation"
          placeholder="Location"
          searchText={setSearchText}
          icon={<CiLocationOn />}
        />
        <div className="my-4 space-y-2 px-2">
          <RCheckBox label="Dhaka, Bangladesh" setValue={setFilterLocation} />
          <RCheckBox label="Los Angle, USA" setValue={setFilterLocation} />
        </div>
      </div>

      <Divider />

      <div className="px-4 my-4">
        <SearchInput
          name="price"
          placeholder="Price Range"
          searchText={setSearchText}
          icon={<MdAttachMoney />}
        />
        <div className="my-4 space-y-2 px-2">
          <RCheckBox label="Under $1,000" setValue={setPrice} />
          <RCheckBox label="$1,000-$15,000" setValue={setPrice} />
          <RCheckBox label="More Than $15,000" setValue={setPrice} />
          <RCheckBox label="Custom" setValue={setPrice} />
        </div>
        <PriceSlider disabled={priceSlider} />
      </div>

      <Divider />

      <div className="px-4 my-4">
        <SearchInput
          name="propertyArea"
          placeholder="Property Size"
          searchText={setSearchText}
          icon={<RiCustomSize />}
        />
        <div className="my-4 space-x-2 flex justify-between">
          <div className="w-[50%]">
            <input type="text" name="min" id="min" placeholder="min" className="bg-gray-200 w-full h-full py-1 px-3 rounded focus:outline-1 outline-blue-600" />
          </div>
          <div className="w-[50%]">
            <input type="text" name="max" id="max" placeholder="max" className="bg-gray-200 w-full h-full py-1 px-3 rounded focus:outline-1 outline-blue-600" />
          </div>
        </div>
      </div>

      <Divider />

      <div className="px-4 my-4">
        <SearchInput
          name="propertyType"
          placeholder="Property Type"
          searchText={setSearchText}
          icon={<TbHexagonNumber0 />}
        />
        <div className="my-4 space-y-2 px-2">
          <RCheckBox label="Single Family Home" setValue={setPrice} />
          <RCheckBox label="Condo/Townhouse" setValue={setPrice} />
          <RCheckBox label="Apartment" setValue={setPrice} />
          <RCheckBox label="Villa" setValue={setPrice} />
        </div>
      </div>

      <Divider />

      <div className="px-4 my-4">
        <SearchInput
          name="propertyType"
          placeholder="Amenities"
          searchText={setSearchText}
          icon={<PiDatabaseLight />}
        />
      </div>
    </div>
  );
};

export default Sidebar;
