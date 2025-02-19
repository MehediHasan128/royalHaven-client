import { Typography } from "@mui/material";
import LatestPropertyCard from "../../../components/ui/LatestPropertyCard";
import { FaChevronRight, FaAngleLeft } from "react-icons/fa6";
import Container from "../../../components/ui/Container";

const LatestProperty = () => {
  return (
    <Container>
      <div className="lg:w-[70%] text-justify">
        <Typography variant="h3">
          <span>Latest Property</span>
        </Typography>
        <div className="border-2 border-[#142D53] w-[10%] mt-2 mb-10"></div>
        <Typography variant="body2">
          <span className="text-gray-600">
            Explore the Latest & Most Exclusive Properties! Stay ahead in the
            real estate market with our freshly listed properties. Whether
            you're searching for a dream home, a luxury apartment, or a smart
            investment, we bring you the best deals in prime locations. Our
            carefully curated listings ensure quality, affordability, and
            unmatched value.
          </span>
        </Typography>
      </div>
      <div data-aos="fade-up" className="mx-3 flex justify-end gap-2 md:mt-10">
        <div className="bg-gray-300 p-2 md:p-4 rounded-full text-lg cursor-pointer hover:-translate-x-1 duration-700">
          <FaAngleLeft />
        </div>
        <div className="bg-gray-300 p-2 md:p-4 rounded-full text-lg cursor-pointer hover:translate-x-1 duration-700">
          <FaChevronRight />
        </div>
      </div>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-4 lg:gap-3">
        {/* Card */}
        <LatestPropertyCard />
        <LatestPropertyCard />
        <LatestPropertyCard />
        <LatestPropertyCard />
      </div>
    </Container>
  );
};

export default LatestProperty;
