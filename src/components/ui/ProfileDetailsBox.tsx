import { Divider, Typography } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import ProfileDetailsEditModal from "./ProfileDetailsEditModal";

export type TUserDataProps = {
  title: string;
  value: string;
}[];

const ProfileDetailsBox = ({
  boxTitle,
  userData,
}: {
  boxTitle: string;
  userData: TUserDataProps;
}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Typography variant="h6">
          <span className="font-bold">{boxTitle}</span>
        </Typography>
        <ProfileDetailsEditModal userData={userData}>
          <button className="border border-gray-400 text-gray-600 rounded-full px-4 py-1 cursor-pointer">
            <Typography variant="subtitle1">
              <span className="flex items-center gap-2 font-medium">
                <FiEdit className="text-lg" /> Edit
              </span>
            </Typography>
          </button>
        </ProfileDetailsEditModal>
      </div>

      <div className="my-5">
        <Divider />
      </div>

      <div className="w-[50%]">
        <div className="grid grid-cols-2 gap-5">
          {userData?.map((data, idx) => (
            <div key={idx}>
              <Typography variant="body2">
                <span className="font-medium text-gray-600">{data?.title}</span>
              </Typography>
              <Typography variant="body1">
                <span className="font-medium">{data?.value}</span>
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileDetailsBox;
