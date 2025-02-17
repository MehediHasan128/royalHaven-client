import { Typography } from "@mui/material";
import "../../../styles/style.css";

const Banner = () => {
  return (
    <div id="bannerBackground">
      <div className="h-screen lg:px-20">
        <div className="absolute top-[30%] text-white w-[50%]">
          <div className="relative flex gap-20">
            <Typography variant="subtitle1">
              <span className="font-light relative top-3 left-15">
                #Number 1 <br />
                Platform
              </span>
            </Typography>
            <Typography variant="h1">
              <span className="">Royal Haven <br /> <span className="absolute w-full left-0">for Buying & Selling</span> <br /> Properties!</span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
