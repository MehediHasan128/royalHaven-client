import { Typography } from "@mui/material";
import { MdVerified } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const AgentCard = () => {
  return (
    <div className="rounded-xl space-y-4">
      <div className="w-96 h-96">
        <img
          className="rounded-xl w-full h-full object-cover"
          src="https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png"
          alt=""
        />
      </div>
      <div className="bg-gray-100 rounded-xl p-3 shadow flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Typography variant="subtitle1">
              <span className="font-medium">Mehedi Hasan</span>
            </Typography>
            <MdVerified className="text-blue-600" />
          </div>
          <Typography variant="caption">
            <span className="flex items-center gap-1">
              <MdEmail className="text-lg" /> mehedihasan12926@gmail.com
            </span>
          </Typography>
        </div>
        <div className="border w-fit px-4 py-1 rounded-full hover:scale-105 duration-500 cursor-pointer">
            <button><Typography variant="button" className="cursor-pointer">Get Details</Typography></button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
