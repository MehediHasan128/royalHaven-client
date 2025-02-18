import { Divider, Typography } from "@mui/material";
import discusse from "../../../assets/images/discusse.jpg";
import { GoVerified } from "react-icons/go";

const Affordable = () => {
  return (
    <div className="p-10 lg:px-20 lg:py-32">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-20 relative">
        <div className="lg:w-[50%]">
          <Typography variant="h2">
            Seamless Communication, <br /> Smarter Decisions!
          </Typography>
          <div className="my-10 text-justify">
            <Typography variant="h6">
              <span className="text-gray-600">
                At Royal Haven, we believe that clear and efficient
                communication is the key to successful property transactions.
                Our Client & Agent Discussion feature ensures that buyers,
                sellers, and investors can seamlessly connect with experienced
                real estate professionals for personalized guidance.
              </span>
            </Typography>
          </div>

          <Typography variant="h5">Why It Matters?</Typography>
          <div className="border-2 border-[#002C54] w-20 mt-3"></div>

          <div className="my-10 space-y-4">
            <div>
              <Typography
                variant="body1"
                className="flex justify-between items-start"
              >
                <span className="flex items-center gap-2 text-lg font-bold">
                  <GoVerified className="text-2xl text-green-500" />{" "}
                  Personalized Assistance:
                </span>
                <span className="w-[55%] lg:w-[60%]">
                  Our expert agents understand your needs and provide tailored
                  property recommendations.
                </span>
              </Typography>
            </div>
            <div>
              <Typography
                variant="body1"
                className="flex justify-between items-start"
              >
                <span className="flex items-center gap-2 text-lg font-bold">
                  <GoVerified className="text-2xl text-green-500" />{" "}
                  Real-Time Market Insights:
                </span>
                <span className="w-[55%] lg:w-[60%]">
                Stay updated with the latest property trends, pricing, and investment opportunities.
                </span>
              </Typography>
            </div>
            <div>
              <Typography
                variant="body1"
                className="flex justify-between items-start"
              >
                <span className="flex items-center gap-2 text-lg font-bold">
                  <GoVerified className="text-2xl text-green-500" />{" "}
                  Hassle-Free Transactions:
                </span>
                <span className="w-[55%] lg:w-[60%]">
                Get expert advice on legal documentation, financing, and negotiation strategies.
                </span>
              </Typography>
            </div>
            <div>
              <Typography
                variant="body1"
                className="flex justify-between items-start"
              >
                <span className="flex items-center gap-2 text-lg font-bold">
                  <GoVerified className="text-2xl text-green-500" />{" "}
                  Instant Support:
                </span>
                <span className="w-[55%] lg:w-[60%]">
                Whether you're buying, selling, or investing, our agents are always available for consultations.
                </span>
              </Typography>
            </div>
          </div>

          <div className="lg:absolute lg:bottom-20 lg:w-[50%]">
            <Divider />
            <div className="my-5">
              <Typography variant="subtitle1">
                With Royal Haven, you’re never alone in your real estate
                journey—our agents are here to guide you every step of the way!
              </Typography>
            </div>
            <button className="border px-8 py-2 rounded-full cursor-pointer">
              <Typography variant="button">Find Now</Typography>
            </button>
          </div>
        </div>
        <div data-aos="fade-left" className="lg:w-[35%]">
          <img className="rounded-xl md:rounded-3xl" src={discusse} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Affordable;
