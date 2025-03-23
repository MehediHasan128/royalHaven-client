/* eslint-disable @typescript-eslint/no-explicit-any */
import { UploadButton } from "@bytescale/upload-widget-react";
import { UploadWidgetReactConfig } from "@bytescale/upload-widget-react/dist/UploadWidgetReactConfig";
import { ReactNode } from "react";
import { useUploadUserProfilePictureMutation } from "../../redux/features/buyer/buyerApi";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/user/userSlice";

const options: UploadWidgetReactConfig = {
  apiKey: "public_W23MT5Y83PfYiQd9h6aNjMN8WYkK", // This is your API key.
  maxFileCount: 1,
};

const UploadImage = ({ children }: { children: ReactNode }) => {

  const [uploadUserProfilePicture] = useUploadUserProfilePictureMutation();
  const currentUser = useAppSelector(useCurrentUser);



  const handleImageUpload = async(files: any) => {
    const imageFiel = files[0]?.originalFile.file;

    const formData = new FormData();
    if (imageFiel) {
      formData.append("file", imageFiel);
    };

    await uploadUserProfilePicture([formData, currentUser?.userId]);
  };

  return (
    <UploadButton options={options} onComplete={handleImageUpload}>
      {({ onClick }) => (
        <button
          onClick={onClick}
          className="border-2 border-[#002C54] text-[#002C54] rounded-md px-3 py-2 cursor-pointer"
        >
          {children}
        </button>
      )}
    </UploadButton>
  );
};

export default UploadImage;
