import { Divider, Typography } from "@mui/material";
import { FaBookmark } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const FavoritePropertyCard = () => {
  return (
    <div className="bg-white shadow-xl rounded-xl">
      <div className="p-5 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="rounded-full size-14">
            <img
              className="rounded-full"
              src="https://tinyurl.com/3jk7xwtw"
              alt=""
            />
          </div>
          <div>
            <Typography variant="h6">
              <span className="flex items-center gap-4">
                Mehedi Hasan <MdVerified className="text-blue-500" />
              </span>
            </Typography>
            <Typography variant="subtitle2">
              <span className="text-gray-700">12 September, 2024</span>
            </Typography>
          </div>
        </div>
        <div>
        <FaBookmark className="text-2xl" />
        </div>
      </div>
      <div className="h-80">
        <img
          className="w-full h-full object-cover"
          src="https://tinyurl.com/454s24hd"
          alt=""
        />
      </div>
      <div className="p-5">
        <div>
          <Typography variant="h6">
            <span>Luxurious 4BHK Villa with Ocean View</span>
          </Typography>
          <Typography style={{ margin: "5px 0px" }} variant="body1">
            <span className="font-semibold">Price: $1200</span>
          </Typography>
          <Typography variant="subtitle1">
            <span className="flex items-center gap-2">
              <IoLocationOutline className="text-xl" /> Dhaka, Bangladesh
            </span>
          </Typography>
        </div>
        <div className="my-5">
          <Divider />
        </div>
        <div>
            <button className="bg-blue-700 px-4 py-1 rounded-lg font-semibold text-white cursor-pointer">Details</button>
        </div>
      </div>
    </div>
  );
};

export default FavoritePropertyCard;
