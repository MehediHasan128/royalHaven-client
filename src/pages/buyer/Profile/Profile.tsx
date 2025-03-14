import { Divider, Typography } from "@mui/material";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentUser } from "../../../redux/features/user/userSlice";

const Profile = () => {
  const user = useAppSelector(useCurrentUser);

  return (
    <div className="min-h-screen">
      <div className="mb-5 flex items-center justify-between">
        <Typography variant="h5">
          Welcome{" "}
          <span className="font-bold text-[#0d5aa1]">
            {user?.userName?.firstName}
          </span>
        </Typography>
        <div className="space-x-3">
          <button className="border-2 border-[#002C54] px-4 py-2 text-[#002C54] rounded-lg cursor-pointer hover:-translate-x-2 duration-700">
            <Typography variant="subtitle2">
              <span>Edit Profile</span>
            </Typography>
          </button>
          <button className="border-2 border-[#002C54] bg-[#002C54] px-4 py-2 text-white rounded-lg cursor-pointer hover:translate-x-2 duration-700">
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
              className="w-full h-full object-cover rounded-xl"
              src={user?.userProfileImage}
              alt=""
            />
          </div>
          <div className="mt-5">
            <Typography variant="button">
              <span className="bg-[#002C54] px-3 py-2 rounded-lg text-white">
                {user?.userRole}
              </span>
            </Typography>
            <Typography variant="h6"></Typography>
          </div>
        </div>
        <div className="w-full space-y-5">
          <div className="border border-gray-300 h-72 p-5 rounded-lg">
            <Typography variant="h6">
              <span className="font-bold">User Information</span>
            </Typography>
            <div className="my-5">
              <Divider />
            </div>
            <div className="flex gap-24">
              <div className="space-y-2">
                <div>
                  <Typography variant="body2">
                    <span className="text-gray-600">Full Name:</span>
                  </Typography>
                  <Typography variant="h5">
                    <span className="font-semibold">
                      {user?.userName?.firstName} {user?.userName?.lastName}
                    </span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2">
                    <span className="text-gray-600">User ID:</span>
                  </Typography>
                  <Typography variant="h5">
                    <span className="font-semibold">{user?.userId}</span>
                  </Typography>
                </div>
              </div>
              <Divider orientation="vertical" flexItem />
              <div className="space-y-2">
                <div>
                  <Typography variant="body2">
                    <span className="text-gray-600">Date of birth:</span>
                  </Typography>
                  <Typography variant="h6">
                    <span>21/07/1998</span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2">
                    <span className="text-gray-600">Age:</span>
                  </Typography>
                  <Typography variant="h6">
                    <span>26 years old</span>
                  </Typography>
                </div>
              </div>
              <Divider orientation="vertical" flexItem />
              <div className="space-y-2">
                <div>
                  <Typography variant="body2">
                    <span className="text-gray-600">Status:</span>
                  </Typography>
                  <Typography variant="h6">
                    <span className="bg-[#002C54] px-2 py-1 rounded-lg text-white font-light">
                      Active
                    </span>
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2">
                    <span className="text-gray-600">Location:</span>
                  </Typography>
                  <Typography variant="h6">
                    <span>Dhaka, Bangladesh</span>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="border p-5 rounded-lg">
            <Typography variant="h6">
              <span className="font-bold">Contact Information</span>
            </Typography>
            <div className="my-5">
              <Divider />
            </div>
            <div className="mt-5">
              <Typography variant="subtitle1">
                <span className="font-semibold">Email:</span>{" "}
                <span>{user?.userEmail}</span>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
