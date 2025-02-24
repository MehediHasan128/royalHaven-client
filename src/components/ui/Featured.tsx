import { Typography } from "@mui/material";
import { ReactNode } from "react";

const Featured = ({
  icon,
  value,
  title,
}: {
  icon: ReactNode;
  value: number | string;
  title: string;
}) => {
  return (
    <div className="flex justify-center gap-1 bg-gray-100 w-fit px-3 py-2 text-gray-700 rounded-full">
      {icon}
      <Typography variant="caption">
        <span className="font-semibold">{value} {title}</span>
      </Typography>
    </div>
  );
};

export default Featured;
