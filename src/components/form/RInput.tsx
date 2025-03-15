import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  variant: 'filled' | 'outlined' | 'standard';
  required?: boolean;
  defaultValue?: string | number
};

const RInput = ({ type, name, placeholder, variant, required, label, defaultValue }: TInputProps) => {
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
            disabled={label==='UID'}
          />
        )}
      />
    </div>
  );
};

export default RInput;
