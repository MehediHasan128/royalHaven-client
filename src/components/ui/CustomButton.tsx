import { Typography } from "@mui/material";

const CustomButton = ({title}: {title: string}) => {
    return (
        <div className="border w-fit mx-auto px-3 py-1 md:px-5 md:py-3 rounded-full cursor-pointer">
          <button><Typography variant="button" className="cursor-pointer">{title}</Typography></button>
        </div>
    );
};

export default CustomButton;