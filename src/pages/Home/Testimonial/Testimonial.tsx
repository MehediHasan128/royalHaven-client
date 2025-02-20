import { Typography } from "@mui/material";
import Container from "../../../components/ui/Container";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import TestimonialCard from "../../../components/ui/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="bg-gray-100">
      <Container>
        <div className="lg:w-[70%] lg:text-justify">
          <Typography sx={{ typography: { xs: "h4", sm: "h4", lg: "h3" } }}>
            <span>What Our Clients Say</span>
          </Typography>
          <div className="border-2 border-[#142D53] w-[40%] md:w-[20%] mt-2 mb-10"></div>
          <Typography variant="body2">
            <span className="text-gray-600">
              At Royal Haven, we take pride in helping our clients find their
              dream properties with ease and confidence. Don’t just take our
              word for it—hear from our satisfied buyers, sellers, and investors
              who have experienced seamless transactions and exceptional
              service. Your trust is our greatest achievement!
            </span>
          </Typography>
        </div>

        <div className="flex justify-center items-center mt-20">
          <div className="cursor-pointer hover:-translate-x-3 duration-700">
            <GoChevronLeft className="text-7xl" />
          </div>
          <TestimonialCard />
          <div className="cursor-pointer hover:translate-x-3 duration-700">
            <GoChevronRight className="text-7xl" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
