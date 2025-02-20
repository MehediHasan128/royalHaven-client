import { Avatar, Rating, Typography } from "@mui/material";

const TestimonialCard = () => {
    return (
        <div className="p-24 w-[80%] mx-auto bg-white rounded-2xl border">
            <div className="flex items-start gap-10">
              <div className="flex items-center gap-2 w-[50%]">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: "50px", height: "50px" }}
                />
                <div>
                  <Typography variant="h6">Mehedi Hasan</Typography>
                  <Typography variant="body2">New York, USA</Typography>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Typography variant="subtitle1">04/05</Typography>
                  <Rating
                    name="half-rating-read"
                    value={4}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className="text-justify">
                  <Typography variant="h4">
                    <span>
                      Royal Haven made the home-buying process effortless! Their
                      team was professional, responsive, and guided me every
                      step of the way. Highly recommended!
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
    );
};

export default TestimonialCard;