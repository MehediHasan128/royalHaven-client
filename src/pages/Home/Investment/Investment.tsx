import { Typography } from "@mui/material";

const Investment = () => {
  return (
    <div id="investment" className="relative">
      <div data-aos="fade-up" className="flex justify-center">
        <div className="mt-32  text-center absolute">
          <Typography variant="h2">
            <span className="font-semibold">Unlock Your Dream Home Today!</span>
          </Typography>
          <div className="my-10">
            <Typography variant="h6">
              <span className="font-light">
                Join us on the journey to homeownership and discover the <br />
                perfect palce to call your own.
              </span>
            </Typography>
          </div>
          <div>
            <button className="border px-5 py-3 rounded-full"><Typography variant="button">Invest Now</Typography></button>
          </div>
        </div>
      </div>
      <div id="transparentText" className="absolute h-full w-full flex justify-center items-end">
        <h1 className="p-0 m-0 text-[50px] md:text-[100px] lg:text-[250px]">ownvestment</h1>
      </div>
    </div>
  );
};

export default Investment;
