import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TTableData } from "../../pages/admin/sellerRequest/SellerTableData";
import { FaCheck, FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { AiTwotoneIdcard } from "react-icons/ai";
import { Divider } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { useCreateSellerMutation } from "../../redux/features/seller/sellerApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "8px",
};

const UserDetailsModal = ({
  children,
  userData,
}: {
  children: ReactNode;
  userData: TTableData;
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [createSeller] = useCreateSellerMutation();

  const handleApproveBuyerReq = (payload: TTableData) => {
    createSeller(payload);
  }
  const handleCancleBuyerReq = (buyerId: string) => {
    console.log(buyerId);
  }

  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={true}
      >
        <Box sx={style}>
          <div>
            <div className="flex gap-3">
              <div className="size-40 rounded-xl overflow-hidden">
                <img
                  className="object-cover"
                  src={userData.profileImage}
                  alt={userData.userName.firstName}
                />
              </div>
              <div>
                <Typography variant="h6">
                  <span className="font-bold flex items-center gap-2">
                    {userData.userName.firstName} {userData.userName.lastName}
                    <span className="text-2xl text-blue-600">
                      {userData?.gender === "male" ? (
                        <IoMdMale />
                      ) : (
                        <IoMdFemale />
                      )}
                    </span>
                  </span>
                </Typography>
                <Typography variant="body1">
                  <span className="flex items-center gap-2 text-gray-600 font-semibold">
                    <AiTwotoneIdcard className="text-xl" /> {userData.id}
                  </span>
                </Typography>
                <Typography variant="body1">
                  <span className="flex items-center gap-2 text-gray-600 font-semibold">
                    <IoMail /> {userData.email}
                  </span>
                </Typography>
                <Typography variant="body1">
                  <span className="flex items-center gap-2 text-gray-600 font-semibold">
                    <FaLocationDot /> {userData.address.city},{" "}
                    {userData.address.country}
                  </span>
                </Typography>
                <Typography variant="body1">
                  <span className="flex items-center gap-2 text-gray-600 font-semibold">
                    <FaPhone /> {userData.contactNumber}
                  </span>
                </Typography>
                <Typography variant="body1">
                  <span className="flex items-center gap-2 text-gray-600 font-semibold">
                    <FaBirthdayCake /> {userData.dateOfBirth}
                  </span>
                </Typography>
              </div>
            </div>
            <div className="my-5">
              <Divider />
            </div>
            <div>
              <Typography variant="subtitle1">
                <span className="font-semibold">
                  Username:{" "}
                  <span className="text-blue-700">
                    {userData?.profileUniqueUserName}
                  </span>
                </span>
              </Typography>
              <Typography variant="subtitle1">
                <span className="font-semibold">
                  ID Number:{" "}
                  <span className="text-blue-700">
                    {userData?.identityNumber}
                  </span>
                </span>
              </Typography>

              <div className="my-5">
                <Divider><Typography variant="subtitle1">
                <span className="font-semibold">
                  <span className="text-blue-700">
                    Company Information
                  </span>
                </span>
              </Typography></Divider>
              </div>

              <div className="grid grid-cols-3 gap-10">
                <div>
                    <Typography variant="body2"><span className="font-semibold text-gray-700">Company Name:</span></Typography>
                    <Typography variant="subtitle1"><span className="font-semibold">{userData.companyName}</span></Typography>
                </div>
                <div>
                    <Typography variant="body2"><span className="font-semibold text-gray-700">Website Link:</span></Typography>
                    <Typography variant="subtitle1"><span className="font-semibold text-blue-700 underline">{userData.websiteLink}</span></Typography>
                </div>
                <div>
                    <Typography variant="body2"><span className="font-semibold text-gray-700">Licence Num:</span></Typography>
                    <Typography variant="subtitle1"><span className="font-semibold">{userData.licenceNumber}</span></Typography>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-5">
                <button onClick={() => handleApproveBuyerReq(userData)} className="border px-5 py-3 rounded-lg cursor-pointer bg-green-800 text-white"><Typography variant="button"><span className="flex items-center gap-2">Approved<FaCheck className="text-xl" /></span></Typography></button>
                <button onClick={() => handleCancleBuyerReq(userData?.id)} className="border px-5 py-3 rounded-lg cursor-pointer bg-red-800 text-white"><Typography variant="button"><span className="flex items-center gap-2">Cancle<RxCross2 className="text-2xl" /></span></Typography></button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UserDetailsModal;
