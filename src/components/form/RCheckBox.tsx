import { Typography } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const RCheckBox = ({
  label,
  setValue,
}: {
  label?: string;
  setValue: Dispatch<SetStateAction<string | null>>;
}) => {
  const handelSetFilterValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked ? event.target.value : null);
  };

  return (
      <label id="checkbox" className="flex gap-3">
        <input
          type="checkbox"
          name="filter"
          id="filter"
          value={label}
          onChange={handelSetFilterValue}
        />
        <span className="check"></span>
        <Typography variant="subtitle2">
          <span className="font-medium">{label}</span>
        </Typography>
      </label>
  );
};

export default RCheckBox;
