import { Typography } from "@mui/material";
import { MdOutlineLocationOn, MdVerified } from "react-icons/md";

type TLatestPropertyCardProps = {
  imageURL: string;
  title: string;
  code: string;
  price: string;
  location: string;
}

const LatestPropertyCard = ({imageURL, title, code, price, location}: TLatestPropertyCardProps) => {
    return (
        <div data-aos="fade-up" className="p-2 rounded space-y-3">
            {/* Card image */}
            <div className="relative w-full h-[150px] md:h-[300px] lg:h-[500px] overflow-hidden group">
              <img
                className="w-full h-full object-cover rounded"
                src={imageURL}
                alt=""
              />
              {/* Details button */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#00000060] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                <button className="border border-white text-white px-4 py-2 rounded-full cursor-pointer transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  <Typography variant="button">Details</Typography>
                </button>
              </div>
            </div>
            {/* Card content */}
            <div className="lg:ml-3">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <Typography
                  variant="subtitle1"
                  className="flex items-center gap-3"
                >
                  <span>{title}</span>{" "}
                  <MdVerified className="text-blue-500" />
                </Typography>
                <Typography variant="subtitle2">
                  <span className="text-gray-600 mr-3">{code}</span>
                </Typography>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <Typography variant="subtitle2">
                  <span>Price:</span> <span className="text-blue-600">${price}</span>
                </Typography>
                <div className="flex md:justify-center items-center gap-1 md:gap-2 md:mr-3 text-gray-600">
                  <MdOutlineLocationOn />
                  <Typography sx={{typography: {xs: "caption", lg: "subtitle2"}}}>{location}</Typography>
                </div>
              </div>
            </div>
          </div>
    );
};

export default LatestPropertyCard;




