import Banner from "./Banner/Banner";
import LatestProperty from "./LatestProperty/LatestProperty";
import WhyUs from "./WhyUs/WhyUs";
import Communication from "./Communication/Communication";
import Agent from "./Agent/Agent";
import Investment from "./Investment/Investment";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <>
            <Banner />
            <WhyUs />
            <LatestProperty />
            <Communication />
            <Agent />
            <Testimonial />
            <Investment />
        </>
    );
};

export default Home;