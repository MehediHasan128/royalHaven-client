import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  variant: "filled" | "outlined" | "standard";
  required?: boolean;
  defaultValue?: string | number;
  size?: "small" | "medium";
  multiline?: boolean;
  row?: number;
  maxRows?: number;
};

const RInput = ({
  type,
  name,
  placeholder,
  variant,
  required,
  label,
  defaultValue,
  size,
  multiline,
  row,
  maxRows,
}: TInputProps) => {
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
            required={required}
            placeholder={placeholder}
            disabled={label === "UID"}
            size={size}
            multiline={multiline}
            rows={row}
            maxRows={maxRows}
            InputProps={{
              style: {fontSize: "14px", fontWeight: "500"},
              sx: {
                "&::placeholder": {
                  fontSize: "14px",
                  fontWeight: "800",
                },
                "& input[type=number]": {
                  MozAppearance: "textfield",
                },
                "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
                  {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
              },
            }}
          />
        )}
      />
    </div>
  );
};

export default RInput;
