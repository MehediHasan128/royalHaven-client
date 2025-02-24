import { Typography } from "@mui/material";
import logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between p-20">
        <div className="w-[30%] space-y-2">
          <div className="w-fit">
            <img className="w-16 mx-auto" src={logo} alt="" />
            <Typography variant="h4">
              <span id="logoFont">Royal Haven</span>
            </Typography>
          </div>
          <div className="text-justify mt-5">
            <Typography variant="subtitle2">
              <span className="text-lg leading-6 text-gray-700">
                Royal Haven is your trusted platform for buying and selling
                premium properties. We connect buyers and sellers with ease,
                offering a seamless real estate experience.
              </span>
            </Typography>
          </div>
        </div>

        <div className="w-[65%] flex justify-end gap-20">
          {/* Quick Links */}
          <div>
            <Typography variant="h6">
              <span>Quick Links</span>
            </Typography>
            <div className="my-5 space-y-2 text-gray-600">
              <div>
                <NavLink to="/">
                  <Typography variant="body1">Home</Typography>
                </NavLink>
              </div>
              <div>
                <NavLink to="/properties">
                  <Typography variant="body1">Properties</Typography>
                </NavLink>
              </div>
              <div>
                <NavLink to="/faqs">
                  <Typography variant="body1">FAQs</Typography>
                </NavLink>
              </div>
              <div>
                <NavLink to="/about us">
                  <Typography variant="body1">About Us</Typography>
                </NavLink>
              </div>
            </div>
          </div>
          <div>
            <Typography variant="h6">
              <span>Contact Information</span>
            </Typography>
            <div className="my-5 space-y-2 text-gray-600">
              <div>
                <Typography variant="body1">Address: Dhaka, Bangladesh</Typography>
              </div>
              <div>
                <Typography variant="body1">Email: <span className="text-blue-600">support@royalhaven.com</span></Typography>
              </div>
              <div>
                <Typography variant="body1">Phone: +1 (234) 567-890</Typography>
              </div>
              <div>
                <Typography variant="body1">Website: <span className="text-blue-600">www.royalhaven.com</span></Typography>
              </div>
            </div>
          </div>
          <div>
            <Typography variant="h6">
              <span>Legal</span>
            </Typography>
            <div className="my-5 space-y-2 text-gray-600">
              <div>
                <Typography variant="body1">Terms of Services</Typography>
              </div>
              <div>
                <Typography variant="body1">Privacy Policy</Typography>
              </div>
              <div>
                <Typography variant="body1">Cookies Policy</Typography>
              </div>
              <div>
                <Typography variant="body1">Data Processing</Typography>
              </div>
            </div>
          </div>
          <div>
            <Typography variant="h6"><span className="uppercase">subscribe to our newsletter</span></Typography>
            <div className="mt-2 mb-6">
                <Typography variant="body2"><span className="text-gray-600">Latest news articles, sent your inbox</span></Typography>
            </div>
            <div className="relative">
                <input type="email" name="" id="" placeholder="Enter your email" className="px-5 py-3 bg-gray-200 w-full rounded-md focus:outline-1 focus:outline-blue-600" />
                <button className="p-3 bg-[#002C54] text-white rounded-r-md absolute top-0 right-0 cursor-pointer outline-1"><Typography variant="button"><span>subscribe</span></Typography></button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 p-10 text-center">
        <Typography variant="caption"><span className="text-gray-800 text-lg">© 2025 Royal Haven. All rights reserved.</span></Typography>
      </div>
    </div>
  );
};

export default Footer;
