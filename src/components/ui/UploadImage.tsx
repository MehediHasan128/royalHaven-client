/* eslint-disable @typescript-eslint/no-explicit-any */
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
  whiteSpace: "nowrap",
  width: 1,
});

const UploadImage = ({ children, setImage }: { children: ReactNode; setImage: any }) => {

    const handleSetImageFile = (e: any) => {
        setImage(e.target.files);
    }

  return (
    <Button component="label" fullWidth>
      {children}
      <VisuallyHiddenInput
        type="file"
        // onChange={(event) => setImage(event.target.files)}
        onChange={handleSetImageFile}
        multiple
      />
    </Button>
  );
};

export default UploadImage;
