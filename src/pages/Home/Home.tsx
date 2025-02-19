import Banner from "./Banner/Banner";
import LatestProperty from "./LatestProperty/LatestProperty";
import WhyUs from "./WhyUs/WhyUs";
import Communication from "./Communication/Communication";
import Agent from "./Agent/Agent";

const Home = () => {
    return (
        <>
            <Banner />
            <WhyUs />
            <LatestProperty />
            <Communication />
            <Agent />
        </>
    );
};

export default Home;