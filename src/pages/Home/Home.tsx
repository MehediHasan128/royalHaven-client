import Banner from "./Banner/Banner";
import LatestProperty from "./LatestProperty/LatestProperty";
import WhyUs from "./WhyUs/WhyUs";
import Communication from "./Communication/Communication";

const Home = () => {
    return (
        <>
            <Banner />
            <WhyUs />
            <Communication />
            <LatestProperty />
        </>
    );
};

export default Home;