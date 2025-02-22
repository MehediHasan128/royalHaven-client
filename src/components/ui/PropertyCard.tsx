import { Divider, Typography } from "@mui/material";
import { IoHeart, IoStar } from "react-icons/io5";
import React, { useState } from "react";
import { IoBookmark } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";


type TCardProps = {
    id: string;
    imageURL: string;
    title: string;
    location: string;
    price: number;
    type: string;
    ratings: number;
    setId: React.Dispatch<React.SetStateAction<string>>
}


const PropertyCard = ({id, imageURL, title, location, price, type, ratings, setId}: TCardProps) => {
  const [clickHeart, setClickHeart] = useState(false);
  const [clickBookMark, setClickBookMark] = useState(false);

  return (
    <div className="rounded-xl p-1">
      <div onClick={() => setId(id)} className="h-60 rounded-xl relative overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-xl hover:scale-110 duration-700 cursor-pointer"
          src={imageURL}
          alt="property"
        />
        <div className="absolute top-2 right-1 px-3 text-xl flex items-center gap-2">
          <IoHeart
            onClick={() => setClickHeart(!clickHeart)}
            className={`${
              clickHeart ? "text-red-700" : "text-white"
            } cursor-pointer`}
          />
          <IoBookmark
            onClick={() => setClickBookMark(!clickBookMark)}
            className={`${
              clickBookMark ? "text-green-500" : "text-white"
            } cursor-pointer`}
          />
        </div>
      </div>
      <div className="mt-2 leading-1">
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption">
          <span className="flex gap-1">
            <FaLocationDot className="text-blue-600" />{location}
          </span>
        </Typography>
        <div className="pr-2 my-2">
          <Divider />
        </div>
        <div className="flex justify-between items-center">
          <Typography variant="subtitle1">
            <span className="font-semibold">
              $ {price} <sub className="text-gray-500">{(type === "rent")? "/month" : ""}</sub>
            </span>
          </Typography>
          <Typography variant="subtitle2">
            <span className="flex items-center gap-1">
                <IoStar className="text-[#e9be00]" />
                {ratings}/5
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
