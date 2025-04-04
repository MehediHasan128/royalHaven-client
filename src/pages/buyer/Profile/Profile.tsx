import { Divider, Typography } from "@mui/material";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentUser } from "../../../redux/features/user/userSlice";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import ProfileDetailsBox, {
  TUserDataProps,
} from "../../../components/ui/ProfileDetailsBox";
import CreateSellerModal from "./CreateSellerModal";
import male from "../../../assets/images/male.png";
import female from "../../../assets/images/female.png";
import { useGetBuyerInfoQuery } from "../../../redux/features/buyer/buyerApi";
import { IoMdAddCircleOutline } from "react-icons/io";
import UploadImage from "../../../components/ui/UploadImage";
import { useGetAllSellerQuery } from "../../../redux/features/seller/sellerApi";

const Role = {
  ADMIN: "admin",
  BUYER: "buyer",
  SELLER: "seller",
};

const Profile = () => {
  const user = useAppSelector(useCurrentUser);
  const { data: buyerData } = useGetBuyerInfoQuery(user?.userId);
  const { data: sellerData } = useGetAllSellerQuery(user?.userId);

  const sellerInfo = sellerData?.data;
  const buyerInfo = buyerData?.data;

  const role = `${user?.userRole}`;
  let userData;

  switch (role) {
    case Role.BUYER:
      userData = buyerInfo;
      break;
    case Role.SELLER:
      userData = sellerInfo;
      break;

    default:
      break;
  }

  const personalData = [
    {
      title: "First Name",
      value: userData?.userName?.firstName,
      fieldName: "firstName",
    },
    {
      title: "Last Name",
      value: userData?.userName?.lastName,
      fieldName: "lastName",
    },
    { title: "Email Address", value: userData?.email, fieldName: "email" },
    {
      title: "Phone Number",
      value: userData?.contactNumber,
      fieldName: "contactNumber",
    },
    {
      title: "Date of Birth",
      value: userData?.dateOfBirth,
      fieldName: "dateOfBirth",
    },
  ];
  const addressData = [
    {
      title: "Street Address",
      value: userData?.address?.streetAddress,
      fieldName: "address.streetAddress",
    },
    {
      title: "City",
      value: userData?.address?.city,
      fieldName: "address.city",
    },
    {
      title: "Posatal Code",
      value: userData?.address?.postalCode,
      fieldName: "address.postalCode",
    },
    {
      title: "State",
      value: userData?.address?.state,
      fieldName: "address.state",
    },
    {
      title: "Country",
      value: userData?.address?.country,
      fieldName: "address.country",
    },
  ];
  const companyData = [
    {
      title: "Company Name",
      value: userData?.companyName,
      fieldName: "companyName",
    },
    {
      title: "Website link",
      value: userData?.websiteLink,
      fieldName: "websiteLink",
    },
    {
      title: "Company licence",
      value: userData?.licenceNumber,
      fieldName: "licenceNumber",
    },
  ];
  const profile = userData?.gender === "male" ? male : female;

  return (
    <div className="min-h-screen">
      <div className="mb-5 flex items-center justify-between">
        <Typography variant="h5">
          Welcome{" "}
          <span className="font-bold text-[#0d5aa1]">
            {user?.userName?.firstName}
          </span>
        </Typography>
        <div className="flex space-x-3">
          {user?.userRole === "buyer" ? (
            <CreateSellerModal>
              <Typography variant="subtitle2">
                <span>Make Seller Profile</span>
              </Typography>
            </CreateSellerModal>
          ) : (
            <></>
          )}

          <button className="border-2 border-[#002C54] bg-[#002C54] px-4 py-2 text-white rounded-lg cursor-pointer hover:-translate-x-2 duration-700">
            <Typography variant="subtitle2">
              <span>Update Password</span>
            </Typography>
          </button>
        </div>
      </div>

      <Divider />

      <div className="mt-5 flex gap-5">
        <div className="w-[25%]">
          <div className="h-72 rounded-xl">
            <img
              className="w-full h-full rounded-xl border object-cover"
              src={user?.userProfileImage ? user?.userProfileImage : profile}
              alt=""
            />
          </div>
          <div className="my-5 flex justify-between items-center">
            {user?.userProfileImage ? (
              <>
                <UploadImage>
                  <Typography variant="subtitle2">
                    <span className="flex items-center gap-2">
                      <FiEdit className="text-lg" /> Change Picture
                    </span>
                  </Typography>
                </UploadImage>
                <button className="border-2 border-[#002C54] text-white bg-[#002C54] rounded-md px-3 py-2 cursor-pointer">
                  <Typography variant="subtitle2">
                    <span className="flex items-center gap-2">
                      <AiOutlineDelete className="text-lg" /> Delete Picture
                    </span>
                  </Typography>
                </button>
              </>
            ) : (
              <>
                <UploadImage>
                  <Typography variant="subtitle2">
                    <span className="flex items-center gap-2">
                      <IoMdAddCircleOutline className="text-xl" /> Add Profile
                      Picture
                    </span>
                  </Typography>
                </UploadImage>
              </>
            )}
          </div>
          <div>
            <div>
              <Typography variant="h5">
                <span className="font-semibold">
                  {user?.userName?.firstName} {user?.userName?.lastName}
                </span>
              </Typography>
              <div className="border w-fit px-4 py-0.5 rounded-lg bg-blue-400 text-white my-3">
                <Typography variant="subtitle2">
                  <span>
                    {user?.userRole?.charAt(0).toUpperCase() +
                      user!.userRole?.slice(1)}
                  </span>
                </Typography>
              </div>
            </div>
            <div className="my-3">
              <Typography variant="body1">
                <span className="font-medium text-gray-600 flex items-center gap-3">
                  {/* {user!.userRole?.charAt(0).toUpperCase() +
                    user!.userRole?.slice(1)} */}
                  <IoMailOutline className="text-xl" />
                  {user?.userEmail}
                </span>
              </Typography>
            </div>
            <Typography variant="body2">
              <span className="font-medium text-gray-600 flex items-center gap-3">
                <CiLocationOn className="text-xl" />
                Dhaka, Bangladesh
              </span>
            </Typography>
          </div>
        </div>

        <div className="w-full space-y-5">
          <div className="border border-gray-300 h-72 p-5 rounded-lg overflow-hidden">
            <ProfileDetailsBox
              boxTitle="Personal Information"
              userData={personalData as TUserDataProps}
            />
          </div>

          <div className="border border-gray-300 bg-gray-200 h-72 p-5 rounded-lg overflow-hidden">
            <ProfileDetailsBox
              boxTitle="Address"
              userData={addressData as TUserDataProps}
            />
          </div>

          {user?.userRole === "seller" && (
            <div className="border border-gray-300  h-72 p-5 rounded-lg overflow-hidden">
              <ProfileDetailsBox
                boxTitle="Company Information"
                userData={companyData as TUserDataProps}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
