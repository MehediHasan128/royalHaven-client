import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ReactNode } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  width: 1,
});

const UploadImage = ({children}: {children: ReactNode}) => {
  return (
    <Button
      component="label"
      tabIndex={-1}
    >
      {children}
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => console.log(event.target.files)}
        multiple
      />
    </Button>
  );
};

export default UploadImage;
