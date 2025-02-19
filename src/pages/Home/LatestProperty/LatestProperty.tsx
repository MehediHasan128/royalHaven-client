import { Typography } from "@mui/material";
import LatestPropertyCard from "../../../components/ui/LatestPropertyCard";

const LatestProperty = () => {
  return (
    <div className="bg-gray-100 px-10 py-32">
      <div className="w-[90%] mx-auto">
        <div className="w-[70%]">
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
        <div className="mt-20 grid grid-cols-4 gap-3">
          {/* Card */}
          <LatestPropertyCard />
          <LatestPropertyCard />
          <LatestPropertyCard />
          <LatestPropertyCard />
        </div>
      </div>
    </div>
  );
};

export default LatestProperty;
