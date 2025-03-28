import { MenuItem, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  variant: "filled" | "outlined" | "standard";
  required?: boolean;
  defaultValue?: string | number;
  size?: "small" | "medium";
  values: string[];
};

const RSelect = ({
  type,
  name,
  variant,
  required,
  label,
  defaultValue,
  size,
  values,
}: TInputProps) => {

  const [value, setValue] = useState(defaultValue || '');
  console.log(value);

  const handleChangeValue = (event: SelectChangeEvent): void => {
    setValue(event.target.value);
  }

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
            onChange={handleChangeValue}
          >
            {values?.map((value: string) => (
              <MenuItem value={value}>
                <Typography variant="subtitle2">
                  <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
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
