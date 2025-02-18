import { Typography } from "@mui/material";
import "../../../styles/style.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";

const Banner = () => {
  return (
    <div id="bannerBackground">
      <div className="h-screen lg:px-20">
        <div className="absolute top-[30%] md:top-[20%] lg:top-[25%] text-white w-[90%] lg:w-[60%] px-5 lg:px-0">
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
                  ROYAL HAVEN <br />{" "}
                  <span className="absolute w-full left-10 lg:left-14">
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
              <span className="absolute left-16 md:left-40 mt-4 md:mt-5 lg:mt-10 text-gray-300">
                Find Your Dream Home with Royal Haven Where, <br /> Luxury Meets
                Comfort!
              </span>
            </Typography>
          </div>
        </div>
        <div className="absolute lg:right-0 top-[55%] md:top-[65%] lg:top-[30%] px-20 space-x-5 lg:space-y-10 flex lg:block mt-5 md:mt-0">
          <div className="border hover:border-blue-500 hover:text-blue-500 text-white p-2 lg:p-3 rounded-full md:text-2xl hover:-translate-y-2 duration-700 cursor-pointer md:w-fit">
            <FaFacebookF />
          </div>
          <div className="border hover:border-[#ee2a7b] hover:text-[#ee2a7b] text-white p-2 lg:p-3 rounded-full md:text-2xl hover:-translate-y-2 duration-700 cursor-pointer md:w-fit">
            <FaInstagram />
          </div>
          <div className="border hover:border-blue-500 hover:text-blue-500 text-white p-2 lg:p-3 rounded-full md:text-2xl hover:-translate-y-2 duration-700 cursor-pointer md:w-fit">
            <FaTwitter />
          </div>
          <div className="border hover:border-red-500 hover:text-red-500 text-white p-2 lg:p-3 rounded-full md:text-2xl hover:-translate-y-2 duration-700 cursor-pointer md:w-fit">
            <FaYoutube />
          </div>
        </div>
        <div className="absolute bottom-14 md:bottom-10">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="text-white flex flex-col lg:flex-row justify-between w-[90%] mx-auto lg:w-[70%] lg:mx-0 gap-5 lg:gap-0">
              <div className="flex items-center gap-2 lg:w-[45%]">
                <div
                  className="bg-[#63636360] rounded-full
              p-3"
                >
                  <AiOutlineSafety className="md:text-xl lg:text-3xl" />
                </div>
                <Typography variant="caption">
                  <span className="text-justify text-gray-300">
                    Experience a seamless way to buy and sell properties with
                    Royal Haven. Enjoy verified listings, secure transactions,
                    and expert support for a hassle-free real estate journey.
                  </span>
                </Typography>
              </div>
              <div className="flex items-center gap-2 lg:w-[45%]">
                <div
                  className="bg-[#63636360] rounded-full
              p-3"
                >
                  <BiSupport className="md:text-xl lg:text-3xl" />
                </div>
                <Typography variant="caption">
                  <span className="text-justify text-gray-300">
                    Experience a seamless way to buy and sell properties with
                    Royal Haven. Enjoy verified listings, secure transactions,
                    and expert support for a hassle-free real estate journey.
                  </span>
                </Typography>
              </div>
            </div>
            <button className="text-white font-light border px-5 rounded-full mx-16 cursor-pointer hover:scale-110 duration-700 mt-7 lg:mt-0 w-fit py-1 lg:py-0">
              <Typography variant="button">Get Started</Typography>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;