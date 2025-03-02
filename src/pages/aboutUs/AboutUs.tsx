import { Typography } from "@mui/material";
import cover from "../../assets/images/duplex.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen p-10">
      <div className="relative">
        <img className="w-full rounded-3xl brightness-75" src={cover} alt="" />
        <div className="absolute top-0 bottom-0 rounded-3xl w-full h-full flex justify-center items-center">
          <div className="w-[50%] text-center text-white">
            <Typography variant="h1">
              <span className="font-extrabold">About Us</span>
            </Typography>
            <Typography variant="h6">
              <span>
                Welcome to Royal Haven, your trusted destination for buying and
                selling properties with confidence and ease.
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
