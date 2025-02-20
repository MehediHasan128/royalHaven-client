import { Typography } from "@mui/material";
import { MdVerified } from "react-icons/md";
import { MdEmail } from "react-icons/md";

type TAgentCardProp = {
  imageURL: string;
  name: string;
  email: string;
};

const AgentCard = ({ imageURL, name, email }: TAgentCardProp) => {
  return (
    <div data-aos="fade-up" className="rounded-xl lg:min-h-[500px] space-y-3">
      <div className="h-42 md:h-64 lg:h-96 overflow-hidden rounded-xl">
        <img className="w-full h-full object-cover" src={imageURL} alt="" />
      </div>
      <div className="bg-gray-200 rounded-xl p-2 md:p-3">
        <div className="flex items-center gap-2">
          <Typography sx={{ typography: { sx: "caption", lg: "subtitle1" } }}>
            <span className="font-medium">{name}</span>
          </Typography>
          <MdVerified className="text-sm md:text-lg text-blue-600" />
        </div>
        <Typography variant="caption">
          <span className="flex items-center gap-1">
            <MdEmail className="hidden md:flex text-lg" /> {email}
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default AgentCard;