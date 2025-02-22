import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropertyTabPanel from "../../../components/ui/PropertyTabPanel";
import { useState } from "react";
import { Typography } from "@mui/material";
import { TPropertyInformation } from "../../../types";

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
  const { properrtyDescription } = propertyData as TPropertyInformation;

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
          </Typography>
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
