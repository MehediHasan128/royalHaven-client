import Typography from "@mui/material/Typography";
import logo from "../../../assets/images/logo.png";
import cover from "../../../assets/images/loginCover.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Button, Checkbox, Divider } from "@mui/material";
import { FieldValues } from "react-hook-form";
import RForm from "../../../components/form/RForm";
import RInput from "../../../components/form/RInput";
import { useState } from "react";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleLogin = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center bg-white">
        <div className="p-10 md:p-5 lg:p-30 md:w-[50%] lg:w-[35%] mx-auto">

          {/* Logo section */}
          <div className="size-28 mx-auto space-y-1">
            {/* image */}
            <img className="w-10 mx-auto" src={logo} alt="" />
            {/* Company name */}
            <Typography variant="h6">
              <span
                className="font-semibold text-[#176ead]"
                style={{ fontFamily: '"Great Vibes", serif' }}
              >
                Royal Haven
              </span>
            </Typography>
          </div>

          {/* Login Text */}
          <div className="my-5">
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
          <div className="flex justify-center items-center gap-3">
            <button className="flex flex-grow justify-center items-center gap-2 bg-gray-100 border border-gray-100 py-4 px-8 rounded-lg cursor-pointer hover:border hover:border-black duration-500 hover:bg-transparent">
              <FcGoogle className="size-6" />
              <Typography variant="body1">
                <span className="font-semibold">Google</span>
              </Typography>
            </button>
            <button className="flex flex-grow justify-center items-center gap-2 bg-gray-100 border border-gray-100 py-4 px-8 rounded-lg cursor-pointer  hover:border hover:border-black duration-500 hover:bg-transparent">
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
            <RForm onSubmit={handleLogin}>
              {/* Form Input */}
              <div className="space-y-4">
                <RInput
                  type="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  placeholder="Enter your email"
                />
                <div className="relative">
                  <RInput
                    type={showPass ? "text" : "password"}
                    name="password"
                    label="Password"
                    variant="outlined"
                    placeholder="*****"
                  />
                  <div className="absolute top-0 right-0 h-full px-1 flex justify-center items-center">
                    {showPass ? (
                      <div
                        onClick={() => setShowPass(!showPass)}
                        className="bg-white px-3 text-center cursor-pointer"
                      >
                        <FaRegEye className="text-lg" />
                      </div>
                    ) : (
                      <div
                        onClick={() => setShowPass(!showPass)}
                        className="bg-white px-3 text-center cursor-pointer"
                      >
                        <FaRegEyeSlash className="text-lg" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Remember or forgot pass */}
              <div className="flex justify-between items-center my-3">
                <div className="flex items-center">
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Typography variant="body2">
                    <span className="text-gray-700 font-medium">
                      Remember me
                    </span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2">
                    <span className="font-medium text-blue-600 cursor-pointer">
                      Forgot Password?
                    </span>
                  </Typography>
                </div>
              </div>
              {/* Sign in button */}
              <div>
                <Button fullWidth size="large" variant="contained">
                  Sign In
                </Button>
              </div>
            </RForm>
          </div>

          {/* Create an account text */}
          <div className="text-center mt-8">
            <Typography variant="body2">
              <span className="font-medium">
                Don't have an account?{" "}
                <span className="font-semibold text-blue-600">
                  Create an account
                </span>
              </span>
            </Typography>
          </div>

        </div>
        <div className="md:w-[50%] md:h-screen overflow-hidden bg-cover relative">
          <img className="w-full md:h-full lg:h-auto md:bg-cover" src={cover} alt="" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center  bg-gradient-to-b md:bg-gradient-to-l from-black/75 to-black/15">
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
