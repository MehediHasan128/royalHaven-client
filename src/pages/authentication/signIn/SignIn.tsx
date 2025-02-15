import Typography from "@mui/material/Typography";
import logo from "../../../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Divider, TextField } from "@mui/material";

const SignIn = () => {

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center bg-white rounded-2xl shadow">
        <div className="p-10 lg:p-35">
          {/* Logo section */}
          <div className="size-32 space-y-1">
            {/* image */}
            <img className="w-10" src={logo} alt="" />
            {/* Company name */}
            <Typography variant="h5">
              <span
                className="font-semibold text-[#176ead]"
                style={{ fontFamily: '"Great Vibes", serif' }}
              >
                Royal Haven
              </span>
            </Typography>
          </div>
          {/* Login Text */}
          <div>
            <Typography variant="h4">
              <span className="font-semibold">Sign in to your Account</span>
            </Typography>
            <Typography variant="caption">
              <span className="text-gray-600">
                Welcome to Royal Haven! Choese your sign in method:
              </span>
            </Typography>
          </div>
          {/* Social media */}
          <div className="flex justify-center items-center gap-3 mt-5">
            <button className="flex flex-grow justify-center items-center gap-2 bg-gray-100 py-4 px-8 rounded-lg">
              <FcGoogle className="size-6" />
              <Typography variant="body1">
                <span className="font-semibold">Google</span>
              </Typography>
            </button>
            <button className="flex flex-grow justify-center items-center gap-2 bg-gray-100 py-4 px-8 rounded-lg">
              <FaApple className="size-6" />
              <Typography variant="body1">
                <span className="font-semibold">Apple</span>
              </Typography>
            </button>
          </div>
          {/* Devider */}
          <div className="my-5">
            <Divider>
              <Typography variant="caption">
                <span className="font-semibold text-gray-700">
                  or continue with email
                </span>
              </Typography>
            </Divider>
          </div>

          {/* Main form section */}
          <div>
            <form>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
              />
            </form>
          </div>
        </div>
        <div>
          <Typography variant="h5">This is loging content</Typography>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
