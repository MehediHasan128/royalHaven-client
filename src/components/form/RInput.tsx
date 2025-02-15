import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  variant: 'filled' | 'outlined' | 'standard';
  required?: boolean;
};

const RInput = ({ type, name, placeholder, variant, required, label }: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <TextField
            {...field}
            type={type}
            label={label}
            variant={variant}
            fullWidth
            required={required}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};

export default RInput;
