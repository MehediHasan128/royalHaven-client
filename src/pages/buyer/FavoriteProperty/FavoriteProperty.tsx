import { Divider, Typography } from "@mui/material";
import FavoritePropertyCard from "../../../components/ui/FavoritePropertyCard";

const FavoriteProperty = () => {
  return (
    <div>
      <div>
        <Typography variant="h4">
          <span className="font-semibold">Favorite Properties</span>
        </Typography>
        <Typography variant="body2">
          <span className="text-gray-700 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium quae tempora soluta reprehenderit cupiditate nemo sunt
            earum quasi deleniti ipsam?
          </span>
        </Typography>
      </div>
      <div className="my-8">
        <Divider />
      </div>

      <div className="grid grid-cols-4 gap-5">
        <FavoritePropertyCard />
        <FavoritePropertyCard />
        <FavoritePropertyCard />
        <FavoritePropertyCard />
        <FavoritePropertyCard />
        <FavoritePropertyCard />
        <FavoritePropertyCard />
        <FavoritePropertyCard />
      </div>
    </div>
  );
};

export default FavoriteProperty;
