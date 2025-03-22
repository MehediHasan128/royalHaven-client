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
// import male from '../../../assets/images/male.png';
import female from '../../../assets/images/female.png';
import { useGetBuyerInfoQuery } from "../../../redux/features/buyer/buyerApi";

const Profile = () => {
  const user = useAppSelector(useCurrentUser);
  const {data} = useGetBuyerInfoQuery(user?.userId);
  const buyerData = data?.data;
  console.log(buyerData);

  const personalData = [
    { title: "First Name", value: buyerData?.userName?.firstName, fieldName: "firstName" },
    { title: "Last Name", value: buyerData?.userName?.lastName, fieldName: "lastName" },
    { title: "Email Address", value: buyerData?.email, fieldName: "email" },
    { title: "Phone Number", value: buyerData?.contactNumber, fieldName: "contactNumber" },
  ];
  const addressData = [
    { title: "Street Address", value: buyerData?.address?.streetAddress, fieldName: "address.streetAddress" },
    { title: "City", value: buyerData?.address?.city, fieldName: "address.city" },
    { title: "Posatal Code", value: buyerData?.address?.postalCode, fieldName: "address.postalCode" },
    { title: "State", value: buyerData?.address?.state, fieldName: "address.state" },
    { title: "Country", value: buyerData?.address?.country, fieldName: "address.country" }
  ];

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
          <CreateSellerModal>

            <Typography variant="subtitle2">
              <span>Make Seller Profile</span>
            </Typography>

          </CreateSellerModal>

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
              className="w-full h-full rounded-xl border"
              src={
                (user?.userProfileImage) ? user?.userProfileImage : female
              }
              alt=""
            />
          </div>
          <div className="my-5 flex justify-between items-center">
            <button className="border-2 border-[#002C54] text-[#002C54] rounded-md px-3 py-2 cursor-pointer">
              <Typography variant="subtitle2">
                <span className="flex items-center gap-2">
                  <FiEdit className="text-lg" /> Change Picture
                </span>
              </Typography>
            </button>
            <button className="border-2 border-[#002C54] text-white bg-[#002C54] rounded-md px-3 py-2 cursor-pointer">
              <Typography variant="subtitle2">
                <span className="flex items-center gap-2">
                  <AiOutlineDelete className="text-lg" /> Delete Picture
                </span>
              </Typography>
            </button>
          </div>
          <div>
            <Typography variant="h5">
              <span className="font-semibold">
                {user?.userName?.firstName} {user?.userName?.lastName}
              </span>
            </Typography>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
