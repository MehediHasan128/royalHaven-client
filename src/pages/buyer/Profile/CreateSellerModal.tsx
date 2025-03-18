import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ReactNode, useState } from "react";
import RForm from "../../../components/form/RForm";
import { FieldValues } from "react-hook-form";
import RInput from "../../../components/form/RInput";
import { Divider } from "@mui/material";
import RMultipleSelect from "../../../components/form/RMultipleSelect";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

const CreateSellerModal = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateSellerAccount = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="border-2 border-[#002C54] px-4 py-2 rounded-lg cursor-pointer hover:-translate-x-2 duration-700"
      >
        {children}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={true}
      >
        <Box sx={style}>
          <RForm onSubmit={handleCreateSellerAccount}>
            <div>
              <div className="mb-10 text-center">
                <Typography variant="h6">
                  <span className="font-semibold">
                    Give information to create seller account
                  </span>
                </Typography>
              </div>

              <RInput
                type="text"
                name="userName"
                label="User name"
                placeholder="Enter user name"
                variant="outlined"
                required
              />

              <div className="my-5">
                <Typography variant="body1">
                  <span className="font-semibold">Seller Information</span>
                </Typography>
              </div>

              <div className="grid grid-cols-3 gap-5">
                <RInput
                  type="text"
                  name="companyName"
                  label="Company name"
                  placeholder="Enter company name"
                  variant="outlined"
                />
                <RInput
                  type="text"
                  name="websiteLink"
                  label="Website Link"
                  placeholder="Enter website link"
                  variant="outlined"
                />
                <RInput
                  type="text"
                  name="licenseNumber"
                  label="License Number"
                  placeholder="Enter license number"
                  variant="outlined"
                />
              </div>

              <div className="my-5">
                <Divider />
              </div>

              <div className="my-5">
                <Typography variant="body1">
                  <span className="font-semibold">Verification Documents</span>
                </Typography>
              </div>

              <div>
                <RInput
                  type="text"
                  name="governmentID"
                  label="Passport/Driving License/National ID"
                  placeholder="Enter passport, driving license or national id number"
                  variant="outlined"
                  required
                />
              </div>

              <div className="my-5">
                <button type="submit" className="border px-5 py-2 rounded-lg cursor-pointer"><Typography variant="button"><span className="font-semibold">Submit</span></Typography></button>
              </div>
            </div>
          </RForm>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateSellerModal;
