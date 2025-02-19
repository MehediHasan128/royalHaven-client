import { Typography } from "@mui/material";
import { MdOutlineLocationOn, MdVerified } from "react-icons/md";

const LatestPropertyCard = () => {
    return (
        <div className="p-2 rounded space-y-3">
            {/* Card image */}
            <div className="relative w-full h-[500px] overflow-hidden group">
              <img
                className="w-full h-full object-cover rounded"
                src="https://static.vecteezy.com/system/resources/previews/053/286/023/non_2x/high-definition-showcasing-a-beautifully-designed-modern-duplex-house-free-photo.jpg"
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
            <div className="ml-3">
              <div className="flex justify-between items-center">
                <Typography
                  variant="subtitle1"
                  className="flex items-center gap-3"
                >
                  <span>Modern Duplex House</span>{" "}
                  <MdVerified className="text-blue-500" />
                </Typography>
                <Typography variant="subtitle2">
                  <span className="text-gray-600 mr-3">MDH506</span>
                </Typography>
              </div>
              <div className="flex justify-between items-center">
                <Typography variant="subtitle2">
                  <span>Price:</span> $550
                </Typography>
                <div className="flex justify-center items-center gap-2 mr-3 text-gray-600">
                  <MdOutlineLocationOn />
                  <Typography variant="subtitle2">Dhaka, Bangladesh</Typography>
                </div>
              </div>
            </div>
          </div>
    );
};

export default LatestPropertyCard;