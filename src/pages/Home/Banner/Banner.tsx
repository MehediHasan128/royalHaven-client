import { Typography } from "@mui/material";
import "../../../styles/style.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Banner = () => {
  return (
    <div id="bannerBackground">
      <div className="h-screen lg:px-20">
        <div className="absolute top-[40%] md:top-[30%] text-white w-[80%] lg:w-[50%] px-5 lg:px-0">
          <div>
            <div className="lg:relative flex md:gap-20">
              <Typography
                sx={{
                  typography: { xs: "body2", sm: "subtitle1", lg: "subtitle1" },
                }}
              >
                <span className="font-light relative top-1 md:top-3 md:left-15">
                  #Number 1 <br />
                  Platform
                </span>
              </Typography>
              <Typography sx={{ typography: { xs: "h2", sm: "h1", lg: "h1" } }}>
                <span>
                  Royal Haven <br />{" "}
                  <span className="absolute w-full left-10 lg:left-0">
                    for Buying & Selling
                  </span>{" "}
                  <br /> Properties!
                </span>
              </Typography>
            </div>
            <Typography
              sx={{
                typography: { xs: "caption", sm: "subtitle2", lg: "subtitle2" },
              }}
            >
              <span className="absolute left-10 md:left-40 md:mt-5 lg:mt-10">
                Find Your Dream Home with Royal Haven Where, <br /> Luxury Meets
                Comfort!
              </span>
            </Typography>
          </div>
        </div>
        <div className="absolute right-0 top-[30%] px-20 space-y-10">
          <div className="border hover:border-blue-500 hover:text-blue-500 text-white p-3 rounded-full text-2xl hover:-translate-y-2 duration-700 cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="border hover:border-[#ee2a7b] hover:text-[#ee2a7b] text-white p-3 rounded-full text-2xl hover:-translate-y-2 duration-700 cursor-pointer">
            <FaInstagram />
          </div>
          <div className="border hover:border-blue-500 hover:text-blue-500 text-white p-3 rounded-full text-2xl hover:-translate-y-2 duration-700 cursor-pointer">
            <FaTwitter />
          </div>
          <div className="border hover:border-red-500 hover:text-red-500 text-white p-3 rounded-full text-2xl hover:-translate-y-2 duration-700 cursor-pointer">
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
