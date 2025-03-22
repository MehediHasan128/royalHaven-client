import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ReactNode, useState } from "react";
import { TUserDataProps } from "./ProfileDetailsBox";
import { Divider, Typography } from "@mui/material";
import RForm from "../form/RForm";
import RInput from "../form/RInput";
import { FieldValues } from "react-hook-form";
import { useUpdateBuyerInfoMutation } from "../../redux/features/buyer/buyerApi";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/user/userSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "8px",
  width: "40%",
};

const ProfileDetailsEditModal = ({
  children,
  userData,
}: {
  children: ReactNode;
  userData: TUserDataProps;
}) => {

  const currentUser = useAppSelector(useCurrentUser)
  console.log(currentUser?.userId);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [updateBuyerInfo, {data}] = useUpdateBuyerInfoMutation();

  const handleUpdateInformation = (data: FieldValues) => {
    
    updateBuyerInfo([data, currentUser?.userId]);

    handleClose();
  };

  console.log(data);

  return (
    <div>
      <button onClick={handleOpen}>{children}</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={true}
      >
        <Box sx={style}>
          <div>
            <Typography variant="h6">
              <span>Edit Information</span>
            </Typography>
          </div>
          <div className="my-5">
            <Divider />
          </div>
          <div>
            <RForm onSubmit={handleUpdateInformation}>
              <div className="grid grid-cols-2 gap-5">
                {userData.map((data, idx) => (
                  <div key={idx}>
                    <RInput
                      type="text"
                      name={data.fieldName}
                      label={data.title}
                      variant="outlined"
                      defaultValue={data.value}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <button type="submit" className="bg-[#002C54] px-5 py-2 rounded-lg cursor-pointer"><Typography variant="subtitle2"><span className="font-semibold text-white">Update</span></Typography></button>
              </div>
            </RForm>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ProfileDetailsEditModal;
