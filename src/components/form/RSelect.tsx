import { MenuItem, TextField, Typography } from "@mui/material";
import { SetStateAction } from "react";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  variant: "filled" | "outlined" | "standard";
  required?: boolean;
  defaultValue?: string | number;
  size?: "small" | "medium";
  data: {
    value: string;
    name: string;
  }[];
  setLocalValue?: (value: string | null) => void;
};

const RSelect = ({
  type,
  name,
  variant,
  required,
  label,
  defaultValue,
  size,
  data,
  setLocalValue
}: TInputProps) => {

  const handleChangeValue = (event: React.ChangeEvent<{ value: SetStateAction<string> }>): void => {
    const newValue = event.target.value;
    setLocalValue(newValue as string);
  };

  const getFullName = (shortValue: string): string => {
    const selected = data.find(item => item.value === shortValue);
    return selected ? selected.name : "";
  };
  

  return (
    <div>
      <Controller
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            {...field}
            type={type}
            label={label}
            variant={variant}
            fullWidth
            size={size}
            select={true}
            required={required}
            SelectProps={{
              MenuProps: {
                disableScrollLock: true
              }
            }}
            onChange={(e) => {
              field.onChange(e.target.value); // Update react-hook-form state
              handleChangeValue(e); // Update local state and trigger any other actions
            }}
          >
            {data?.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                <Typography variant="subtitle2">
                  <span>{item.name}</span>
                </Typography>
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </div>
  );
};

export default RSelect;
