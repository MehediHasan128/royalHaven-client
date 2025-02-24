import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropertyTabPanel from "../../../components/ui/PropertyTabPanel";
import { useState } from "react";
import { Typography } from "@mui/material";
import { TPropertyInformation } from "../../../types";
import {
  MdOutlineMeetingRoom,
  MdOutlineKingBed,
  MdOutlineBathtub,
  MdOutlineKitchen,
} from "react-icons/md";
import { PiGarageDuotone } from "react-icons/pi";
import { TbChartAreaLine } from "react-icons/tb";
import Featured from "../../../components/ui/Featured";

type TData = {
  data: TPropertyInformation;
};

const a11yProps = (index: number) => {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
};

const PropertyFlotaingInformation = (data: TData) => {
  const propertyData = data?.data;
  const { properrtyDescription, totalArea, bathRoom, bedRoom, totalRoom } =
    propertyData as TPropertyInformation;

  const [value, setValue] = useState(0);
  const [showText, setShowText] = useState(false);
  const handleChange = (_event: unknown, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab
          style={{ textTransform: "none", borderBottom: "1px solid gray" }}
          label="Overview"
          {...a11yProps(0)}
        />
        <Tab
          style={{ textTransform: "none", borderBottom: "1px solid gray" }}
          label="Reviews"
          {...a11yProps(1)}
        />
        <Tab
          style={{ textTransform: "none", borderBottom: "1px solid gray" }}
          label="About"
          {...a11yProps(2)}
        />
      </Tabs>

      {/* Panel 1 */}
      <PropertyTabPanel value={value} index={0}>
        <div>
          <Typography variant="subtitle1">
            <span className="font-medium">Description:</span>
          </Typography>
          <Typography variant="subtitle2" className="text-justify">
            {properrtyDescription.length > 320 ? (
              <>
                {showText ? (
                  <span className="text-gray-600">
                    {properrtyDescription}{" "}
                    <span
                      onClick={() => setShowText(!showText)}
                      className="font-semibold text-blue-600 cursor-pointer"
                    >
                      {showText ? "Hide" : "See More"}
                    </span>
                  </span>
                ) : (
                  <span className="text-gray-600">
                    {properrtyDescription.slice(0, 300)}
                    <span>
                      <span className="bg-gradient-to-r from-gray-600 via-gray-300 to-gray-100 bg-clip-text text-transparent">
                        {properrtyDescription.slice(300, 320)}......
                      </span>
                      <span
                        onClick={() => setShowText(!showText)}
                        className="font-semibold text-blue-600 cursor-pointer"
                      >
                        {showText ? "Hide" : "See More"}
                      </span>
                    </span>
                  </span>
                )}
              </>
            ) : (
              <>{properrtyDescription}</>
            )}
          </Typography>
        </div>
        <div className="my-5 w-fit grid grid-cols-3 gap-2">
          <Featured
            icon={<MdOutlineMeetingRoom />}
            value={totalRoom as number}
            title="Rooms"
          />
          <Featured
            icon={<MdOutlineKingBed />}
            value={bedRoom as number}
            title="Beds"
          />
          <Featured
            icon={<MdOutlineBathtub />}
            value={bathRoom as number}
            title="Baths"
          />
          <Featured icon={<MdOutlineKitchen />} value="1" title="Kitchens" />
          <Featured icon={<TbChartAreaLine />} value={totalArea} title="sqft" />
          <Featured icon={<PiGarageDuotone />} value="1" title="Garage" />
        </div>
        <div className="my-10 space-x-3">
          <button className="bg-[#002b5417] px-6 py-2 rounded-full font-medium text-[#002C54]">Contact Agent</button>
          <button className="bg-[#002C54] text-white px-6 py-2 rounded-full font-medium">Order Now</button>
        </div>
        <div>
          <img className="h-96 w-full object-cover rounded-2xl" src="https://tinyurl.com/2ax4z27s" alt="" />
        </div>
      </PropertyTabPanel>

      {/* Panel 2 */}
      <PropertyTabPanel value={value} index={1}>
        Item Two
      </PropertyTabPanel>

      {/* Panel 3 */}
      <PropertyTabPanel value={value} index={2}>
        Item Three
      </PropertyTabPanel>
    </Box>
  );
};

export default PropertyFlotaingInformation;