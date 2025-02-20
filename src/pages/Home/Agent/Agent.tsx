import { Typography } from "@mui/material";
import Container from "../../../components/ui/Container";
import AgentCard from "../../../components/ui/AgentCard";
import CustomButton from "../../../components/ui/CustomButton";

const Agent = () => {
  return (
    <Container>
      <div className="lg:w-[70%] lg:text-justify">
        <Typography sx={{typography: {xs: 'h4',sm: 'h4',lg: 'h3'}}}>
          <span>Meet Our Trusted Agents</span>
        </Typography>
        <div className="border-2 border-[#142D53] w-[40%] md:w-[20%] mt-2 mb-10"></div>
        <Typography variant="body2">
          <span className="text-gray-600">
            At Royal Haven, our experienced and dedicated agents are here to
            guide you every step of the way. Whether you're buying, selling, or
            investing, our team ensures a seamless and hassle-free experience.
            Trust us to turn your real estate dreams into reality!
          </span>
        </Typography>
      </div>

        <div className="my-16 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          <AgentCard imageURL="https://tinyurl.com/yuyw45vn" name="Mehedi Hasan" email="mehedihasan@gmail.com" />
          <AgentCard imageURL="https://tinyurl.com/3eempers" name="Md. Mahfuz" email="mdmahfuz@gmail.com" />
          <AgentCard imageURL="https://tinyurl.com/bdh3behy" name="Zihad Mahmud" email="zihadmahmud@gmail.com" />
          <AgentCard imageURL="https://tinyurl.com/3wxfn295" name="Salman Jahan" email="salmanjahan@gmail.com" />
        </div>

        <CustomButton title="See More" />
    </Container>
  );
};

export default Agent;
