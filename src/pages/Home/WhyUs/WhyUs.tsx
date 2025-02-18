import { Typography } from "@mui/material";
import { GoVerified } from "react-icons/go";

const WhyUs = () => {
  return (
    <div className="bg-gray-200 py-20 px-5 md:px-10 lg:p-20 flex flex-col lg:flex-row justify-center items-start gap-16 md:gap-16 lg:gap-10">
      <div>
        <Typography
          sx={{
            typography: { xs: "h4", sm: "h3", lg: "h2" },
          }}
        >
          Why Choose Us
        </Typography>
        <div className="border-2 w-[25%] lg:w-[15%] mt-2 border-[#002C54]"></div>
        <div className="flex flex-col gap-3 mt-10 lg:mt-16">
          <Typography
            sx={{
              typography: { xs: "subtitle1", sm: "body1", lg: "h6" },
            }}
            className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4"
          >
            <span className="flex items-center gap-2">
              <GoVerified className="text-xl text-green-600" />
              <span className="font-semibold">Trusted Property Platform:</span>
            </span>{" "}
            <span className="font-light">
              A seamless experience for buying and selling real estate.
            </span>
          </Typography>

          <Typography
            sx={{
              typography: { xs: "subtitle1", sm: "body1", lg: "h6" },
            }}
            className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4"
          >
            <span className="flex items-center gap-2">
              <GoVerified className="text-xl text-green-600" />
              <span className="font-semibold">Verified Listings:</span>
            </span>{" "}
            <span className="font-light">
            Only genuine and high-quality properties.
            </span>
          </Typography>

          <Typography
            sx={{
              typography: { xs: "subtitle1", sm: "body1", lg: "h6" },
            }}
            className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4"
          >
            <span className="flex items-center gap-2">
              <GoVerified className="text-xl text-green-600" />
              <span className="font-semibold">Expert Guidance:</span>
            </span>{" "}
            <span className="font-light">
            Our professionals assist you at every step.
            </span>
          </Typography>

          <Typography
            sx={{
              typography: { xs: "subtitle1", sm: "body1", lg: "h6" },
            }}
            className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4"
          >
            <span className="flex items-center gap-2">
              <GoVerified className="text-xl text-green-600" />
              <span className="font-semibold">Secure Transactions:</span>
            </span>{" "}
            <span className="font-light">
            Transparent deals with complete legal support.
            </span>
          </Typography>

          <Typography
            sx={{
              typography: { xs: "subtitle1", sm: "body1", lg: "h6" },
            }}
            className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4"
          >
            <span className="flex items-center gap-2">
              <GoVerified className="text-xl text-green-600" />
              <span className="font-semibold">User-Friendly Experience:</span>
            </span>{" "}
            <span className="font-light">
            Easily browse, compare, and invest with confidence.
            </span>
          </Typography>
        </div>
      </div>
      <div>
        <Typography
          sx={{
            typography: { xs: "h4", sm: "h3", lg: "h2" },
          }}
        >
          Our Collaborations
        </Typography>
        <div className="border-2 w-[25%] lg:w-[15%] mt-2 border-[#002C54]"></div>
        <div className="flex flex-col gap-3 mt-10 lg:mt-16">
        <Typography
            sx={{
              typography: { xs: "subtitle1", sm: "body1", lg: "h6" },
            }}
            className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4"
          >
            <span className="flex items-center gap-2">
              <GoVerified className="text-xl text-green-600" />
              <span className="font-semibold">Partnered with Leading Builders & Agencies:</span>
            </span>{" "}
            <span className="font-light">
            Bringing you premium real estate options.
            </span>
          </Typography>

          <Typography
            sx={{
              typography: { xs: "subtitle1", sm: "body1", lg: "h6" },
            }}
            className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4"
          >
            <span className="flex items-center gap-2">
              <GoVerified className="text-xl text-green-600" />
              <span className="font-semibold">Trusted Financial Institutions:</span>
            </span>{" "}
            <span className="font-light">
            Hassle-free home loan assistance.
            </span>
          </Typography>

          <Typography
            sx={{
              typography: { xs: "subtitle1", sm: "body1", lg: "h6" },
            }}
            className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4"
          >
            <span className="flex items-center gap-2">
              <GoVerified className="text-xl text-green-600" />
              <span className="font-semibold">Property Inspection & Legal Experts:</span>
            </span>{" "}
            <span className="font-light">
            Ensuring 100% safe investments.
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
