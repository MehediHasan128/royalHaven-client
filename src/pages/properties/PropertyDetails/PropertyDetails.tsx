import { Typography } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import PropertyFlotaingInformation from "./PropertyFlotaingInformation";
import { useEffect, useState } from "react";
import { TPropertyInformation } from "../../../types";

// const properties = [
//   {
//     id: 1,
//     imageUrl: "https://tinyurl.com/mtvrmku7",
//     title: "Luxury Villa with Ocean View",
//     description:
//       "A beautiful 5-bedroom villa with a stunning ocean view and modern amenities.",
//     bedrooms: 5,
//     bathrooms: 4,
//     type: "sell",
//     price: 1200000,
//     location: "Malibu, California",
//     ratings: 4.8,
//   },
//   {
//     id: 2,
//     imageUrl: "https://tinyurl.com/27ps47j8",
//     title: "Cozy Apartment in Downtown",
//     description:
//       "A 2-bedroom apartment in the heart of downtown with easy access to restaurants and shopping.",
//     bedrooms: 2,
//     bathrooms: 1,
//     type: "rent",
//     price: 2000,
//     location: "New York, NY",
//     ratings: 4.5,
//   },
//   {
//     id: 3,
//     imageUrl: "https://tinyurl.com/bdunbm96",
//     title: "Spacious Family Home",
//     description:
//       "A large 4-bedroom house perfect for families, with a backyard and garage.",
//     bedrooms: 4,
//     bathrooms: 3,
//     type: "sell",
//     price: 450000,
//     location: "Austin, Texas",
//     ratings: 4.7,
//   },
//   {
//     id: 4,
//     imageUrl: "https://tinyurl.com/5bvpnznt",
//     title: "Modern Studio Apartment",
//     description:
//       "A stylish and fully furnished studio apartment in a prime location.",
//     bedrooms: 1,
//     bathrooms: 1,
//     type: "rent",
//     price: 1500,
//     location: "San Francisco, CA",
//     ratings: 4.6,
//   },
//   {
//     id: 5,
//     imageUrl: "https://tinyurl.com/bdde4fnj",
//     title: "Penthouse with City View",
//     description:
//       "A luxurious penthouse with a breathtaking city skyline view and high-end interiors.",
//     bedrooms: 3,
//     bathrooms: 2,
//     type: "sell",
//     price: 950000,
//     location: "Chicago, IL",
//     ratings: 4.9,
//   },
//   {
//     id: 6,
//     imageUrl: "https://tinyurl.com/3ub46f8r",
//     title: "Beachfront Bungalow",
//     description:
//       "A charming 2-bedroom bungalow with direct beach access and a private pool.",
//     bedrooms: 2,
//     bathrooms: 2,
//     type: "rent",
//     price: 3000,
//     location: "Miami, FL",
//     ratings: 4.8,
//   },
//   {
//     id: 7,
//     imageUrl: "https://tinyurl.com/2r5v3mxy",
//     title: "Rustic Cabin in the Mountains",
//     description:
//       "A peaceful 3-bedroom cabin surrounded by nature, perfect for a getaway.",
//     bedrooms: 3,
//     bathrooms: 2,
//     type: "sell",
//     price: 320000,
//     location: "Denver, CO",
//     ratings: 4.7,
//   },
//   {
//     id: 8,
//     imageUrl: "https://tinyurl.com/4v753fva",
//     title: "Suburban Townhouse",
//     description:
//       "A comfortable townhouse with modern amenities, ideal for families.",
//     bedrooms: 3,
//     bathrooms: 2.5,
//     type: "rent",
//     price: 1800,
//     location: "Seattle, WA",
//     ratings: 4.6,
//   },
//   {
//     id: 9,
//     imageUrl: "https://tinyurl.com/3kkprbud",
//     title: "Elegant Mansion",
//     description:
//       "A stunning 6-bedroom mansion with a grand entrance and luxurious finishes.",
//     bedrooms: 6,
//     bathrooms: 5,
//     type: "sell",
//     price: 2500000,
//     location: "Beverly Hills, CA",
//     ratings: 4.9,
//   },
//   {
//     id: 10,
//     imageUrl: "https://tinyurl.com/y4vzdpnd",
//     title: "Minimalist Loft",
//     description:
//       "A stylish and modern loft with an open floor plan and beautiful city views.",
//     bedrooms: 2,
//     bathrooms: 1,
//     type: "rent",
//     price: 2200,
//     location: "Los Angeles, CA",
//     ratings: 4.7,
//   },
// ];


const PropertyDetails = ({ propertyId }: { propertyId: string }) => {

  const [properties, setPropeties] = useState<TPropertyInformation[] | null>(null);
    useEffect(() => {
      fetch("data.json")
      .then((res) =>res.json())
      .then((data) => setPropeties(data))
    }, [])

  const property = properties?.find((item) => item.id === propertyId) as TPropertyInformation;
  
  if (!property) {
    return <div>Loading or No property found...</div>;
  }

  const { propertyImage, propertyTitle, price, listingType, location } = property;

  return (
    <div className="w-[40%] bg-white rounded-2xl p-2 min-h-screen">
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
          <Typography variant="h6">
            <span className="font-semibold">{propertyTitle}</span>
          </Typography>
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
