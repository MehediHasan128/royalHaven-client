import Affordable from "./Affordable/Affordable";
import Banner from "./Banner/Banner";
import LatestProperty from "./LatestProperty/LatestProperty";
import WhyUs from "./WhyUs/WhyUs";

const Home = () => {
    return (
        <>
            <Banner />
            <WhyUs />
            <Affordable />
            <LatestProperty />
        </>
    );
};

export default Home;