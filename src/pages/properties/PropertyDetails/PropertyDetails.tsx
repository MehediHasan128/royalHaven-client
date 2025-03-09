import { Typography } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import PropertyFlotaingInformation from "./PropertyFlotaingInformation";
import { useEffect, useState } from "react";
import { TPropertyInformation } from "../../../types";
import PageSkeleton from "../../../components/skeleton/PageSkeleton";

const PropertyDetails = ({ propertyId }: { propertyId: string | null }) => {
  const [properties, setPropeties] = useState<TPropertyInformation[] | null>(
    null
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => setPropeties(data));
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const property = properties?.find(
    (item) => item.id === propertyId
  ) as TPropertyInformation;

  if (!property) {
    return <PageSkeleton />;
  }

  const { propertyImage, propertyTitle, price, listingType, location } =
    property;

  return (
    <div>
      {/* Image section */}
      <div className="h-80">
        <div className="grid grid-cols-3 grid-rows-4 gap-3 h-full w-full">
          <div className="row-span-4 col-span-2">
            <img
              className="h-full w-full rounded-xl"
              src={propertyImage}
              alt=""
            />
          </div>
          <div className="row-span-2 col-span-1">
            <img
              className="h-full w-full rounded-xl"
              src={propertyImage}
              alt=""
            />
          </div>
          <div className="row-span-2 col-span-1">
            <img
              className="h-full w-full rounded-xl"
              src={propertyImage}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Details section */}
      {/* Title section */}
      <div className="my-5 px-2 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-4">
            <Typography variant="h6">
              <span className="font-semibold">{propertyTitle}</span>
            </Typography>
            <Typography variant="button"><span className={`${listingType === "rent"? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} px-3 py-1 rounded-xl`}>{listingType}</span></Typography>
          </div>
          <Typography variant="body2">
            <span className="flex gap-2 font-medium text-gray-600">
              <FaLocationDot className="text-blue-600" /> {location}
            </span>
          </Typography>
        </div>
        <div className="pr-3">
          <Typography variant="h6">
            <span className="font-semibold">
              $ {price}
              <span className="text-gray-500">
                <sub>{listingType === "rent" ? "/month" : null}</sub>
              </span>
            </span>
          </Typography>
        </div>
      </div>

      <PropertyFlotaingInformation data={property} />
    </div>
  );
};

export default PropertyDetails;
