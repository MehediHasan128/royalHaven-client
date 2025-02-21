import { Avatar, Rating, Typography } from "@mui/material";

type TDataProps = {
  name: string;
  location: string;
  ratings: string;
  comments: string;
}

const TestimonialCard = (data: TDataProps) => {

  
  return (
    <div className="p-10 md:p-24 w-[100%] mx-auto bg-white rounded-xl md:rounded-2xl">
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="flex items-center gap-2 md:w-[50%]">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: "50px", height: "50px" }}
          />
          <div>
            <Typography variant="h6">{data.name}</Typography>
            <Typography variant="body2">{data.location}</Typography>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-5">
            <Typography variant="subtitle1">{data.ratings}/05</Typography>
            <Rating
              name="half-rating-read"
              value={Number(data?.ratings)}
              precision={0.5}
              readOnly
            />
          </div>
          <div className="text-justify">
            <Typography sx={{typography: {sx: "subtitle1", sm: "h6", lg: "h5"}}}>
              <span>
                {/* Royal Haven made the home-buying process effortless! Their team
                was professional, responsive, and guided me every step of the
                way. Highly recommended! */}
                {data.comments}
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
