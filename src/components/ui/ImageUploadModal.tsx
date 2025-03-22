import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ReactNode, useState } from "react";
// import upload from "../../assets/images/upload.png";
import { Typography } from "@mui/material";
import UploadImage from "./UploadImage";
import { useUploadUserProfilePictureMutation } from "../../redux/features/buyer/buyerApi";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/user/userSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "8px",
  p: 10,
};

const ImageUploadModal = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [imageFile, setImageFile] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [uploadUserProfilePicture] = useUploadUserProfilePictureMutation();
  const currentUser = useAppSelector(useCurrentUser)

  const handleUploadImage = () => {
    

    const formdata = new FormData();
    if(imageFile){
        formdata.append("file", imageFile)
    };
    uploadUserProfilePicture([formdata, currentUser?.userId]);

  }

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
          <UploadImage setImage={setImageFile}>
            <div className="border-2 border-dashed rounded-2xl overflow-hidden w-[70%] h-96 cursor-pointer">
              <img className="w-full h-full" src={"https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png"} alt="" />
            </div>
          </UploadImage>


          <div className="flex justify-center mt-10">
            <button onClick={handleUploadImage} className="border px-5 py-2 rounded-xl cursor-pointer hover:bg-[#002C54] hover:text-white duration-700">
              <Typography variant="button">
                <span className="font-bold">Upload</span>
              </Typography>
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ImageUploadModal;

// https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png
