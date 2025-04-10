import { useState } from "react";
import "../../../styles/style.css";
import { IoHome } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";
import { Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import RForm from "../../../components/form/RForm";
import logo from "../../../assets/images/logo.png";
import RInput from "../../../components/form/RInput";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import cover from "../../../assets/images/loginCover.jpg";
import { useSignUpMutation } from "../../../redux/features/user/userApi";
import RSelect from "../../../components/form/RSelect";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [signUp, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();

  const handleSignUp = async (data: FieldValues) => {
    const userInfo = {
      password: data?.password,
      buyer: {
        userName: {
          firstName: data?.firstName,
          lastName: data?.lastName,
        },
        email: data?.email,
        gender: data?.gender,
      },
    };

    try {
      const res = await signUp(userInfo).unwrap();
      if (res.statusCode === 200) {
        navigate(`/`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center bg-white">
      {/* Form section */}
      <div className="p-10 md:p-5 lg:px-30 md:w-[60%] lg:w-[35%] mx-auto">
        {/* Logo section */}
        <div className="size-28 mx-auto space-y-1">
          {/* image */}
          <img className="w-10 mx-auto" src={logo} alt="" />
          {/* Company name */}
          <Typography variant="h6">
            <span
              className="font-semibold text-[#002C54]"
              style={{ fontFamily: '"Great Vibes", serif' }}
            >
              Royal Haven
            </span>
          </Typography>
        </div>

        {/* Login Text */}
        <div className="my-5">
          <Typography variant="h4">
            <span className="font-semibold">Sign up your Account</span>
          </Typography>
          <Typography variant="caption">
            <span className="text-gray-600">
              Welcome to Royal Haven! Choese your sign up method:
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
                continue with email or password
              </span>
            </Typography>
          </Divider>
        </div>

        {/* Main form section */}
        <div>
          <RForm onSubmit={handleSignUp}>
            {/* Form Input */}
            <div className="space-y-4">
              <div className="flex justify-center gap-5">
                <RInput
                  type="text"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  placeholder="Enter your first name"
                />
                <RInput
                  type="text"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  placeholder="Enter your last name"
                />
              </div>

              <RSelect type="text" name="gender" variant="outlined" label="Gender" values={['male', 'female']} />

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
            {/* Sign in button */}
            <button type="submit" className="my-8 w-full">
              <Button
                loading={isLoading}
                fullWidth
                size="large"
                variant="contained"
              >
                Sign Up
              </Button>
            </button>
          </RForm>
        </div>

        {/* Create an account text */}
        <div className="text-center">
          <Typography variant="body2">
            <span className="font-medium">
              Already have an account?{" "}
              <NavLink to="/signin">
                <span className="font-semibold text-blue-600">SignIn</span>
              </NavLink>
            </span>
          </Typography>
        </div>
      </div>
      {/* Content section */}
      <div className="lg:w-[50%] md:h-screen overflow-hidden bg-cover relative">
        {/* background image */}
        <img className="w-full lg:h-auto md:bg-cover" src={cover} alt="" />
        {/* Content container */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center  bg-gradient-to-b md:bg-gradient-to-r from-black/75 to-black/40">
          {/* Contect section */}
          <div className="text-gray-200">
            {/* Heading text */}
            <div className="w-[95%] md:w-[90%] lg:w-[70%] mx-auto">
              <Typography variant="h2">
                <span className="font-semibold">
                  Welcome to{" "}
                  <span className="bg-gradient-to-r from-[#a0d3f8] to-[#1b9cf8] bg-clip-text text-transparent">
                    Royal Haven
                  </span>
                </span>
              </Typography>
              <div className="my-4">
                <Typography variant="h5">
                  <span>Your Gateway to Dream Properties!</span>
                </Typography>
              </div>
              <Typography variant="body2" className="text-justify">
                <span>
                  Find your perfect home or the right buyer with ease. Whether
                  you're investing, selling, or searching for your dream space,
                  we're here to make your journey smooth and rewarding. Log in
                  to access exclusive listings and personalized services.
                </span>
              </Typography>
              <div className="mt-4">
                <Typography variant="h5">
                  <span className="font-semibold">
                    Your next great property adventure starts here!
                  </span>
                </Typography>
              </div>
            </div>
          </div>
        </div>
        {/* Back to home button */}
        <div className="absolute top-0 p-5 lg:p-10 cursor-pointer text-white">
          <div id="bounceBtn">
            <Typography variant="subtitle1">
              <NavLink
                to="/"
                className="flex justify-center items-center gap-2 font-medium cursor-pointer"
              >
                <span>
                  <IoHome />
                </span>
                Go Home
              </NavLink>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
