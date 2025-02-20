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
      <div data-aos="fade-up" className="mx-3 hidden lg:flex justify-end gap-2 mt-10">
        <div className="bg-gray-300 p-2 md:p-4 rounded-full text-lg cursor-pointer hover:-translate-x-1 duration-700">
          <FaAngleLeft />
        </div>
        <div className="bg-gray-300 p-2 md:p-4 rounded-full text-lg cursor-pointer hover:translate-x-1 duration-700">
          <FaChevronRight />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 lg:gap-3">
        {/* Card */}
        <LatestPropertyCard imageURL="https://static.vecteezy.com/system/resources/previews/053/286/023/non_2x/high-definition-showcasing-a-beautifully-designed-modern-duplex-house-free-photo.jpg" title="Modern Duplex" code="MDH503" price="550" location="Dhaka, Bangladesh" />
        <LatestPropertyCard imageURL="https://cdn.shopify.com/s/files/1/0518/2557/4043/files/ongriddesign_duplex_home_design_2024_3_1024x1024.jpg?v=1703230949" title="Modern Duplex" code="MDH503" price="1250" location="Kuala lampur, Malaysia" />
        <LatestPropertyCard imageURL="https://ongrid.design/cdn/shop/files/ongriddesign_elevation_duplex_32.jpg?v=1707387897" title="Modern Duplex" code="MDH503" price="850" location="Singapore" />
        <LatestPropertyCard imageURL="https://cdn.prod.website-files.com/5d13ec82c4ad4286e691a14b/5d362b60cd15db11d3d24e6a_duplex_v_twin_image.jpg" title="Modern Duplex" code="MDH503" price="1550" location="Los Angle, USA" />
      </div>
    </Container>
  );
};

export default LatestProperty;
