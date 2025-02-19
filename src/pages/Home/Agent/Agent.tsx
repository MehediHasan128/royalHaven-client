import { Typography } from "@mui/material";
import Container from "../../../components/ui/Container";
import AgentCard from "../../../components/ui/AgentCard";

const Agent = () => {
  return (
    <Container>
      <div className="lg:w-[70%] text-justify">
        <Typography variant="h3">
          <span>Meet Our Trusted Agents</span>
        </Typography>
        <div className="border-2 border-[#142D53] w-[20%] mt-2 mb-10"></div>
        <Typography variant="body2">
          <span className="text-gray-600">
            At Royal Haven, our experienced and dedicated agents are here to
            guide you every step of the way. Whether you're buying, selling, or
            investing, our team ensures a seamless and hassle-free experience.
            Trust us to turn your real estate dreams into reality!
          </span>
        </Typography>
      </div>

        <div className="my-16 flex justify-center items-center gap-10">
          <AgentCard />
          <AgentCard />
          <AgentCard />
        </div>

        <div className="border w-fit mx-auto px-5 py-3 rounded-full cursor-pointer">
          <button><Typography variant="button" className="cursor-pointer">See More</Typography></button>
        </div>
    </Container>
  );
};

export default Agent;
