import { FormControl, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

type TSelectProps = {
  name: string;
  label: string;
};

const RSelect = ({ name, label }: TSelectProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" {...field} fullWidth variant="outlined" label={label}>
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </div>
  );
};

export default RSelect;
