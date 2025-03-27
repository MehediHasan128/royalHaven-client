import { ReactNode, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import { MdApproval, MdBlockFlipped } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useUpdateUserStatusMutation } from "../../redux/features/user/userApi";

const UserActionDropdown = ({
  children,
  userId,
  refetch
}: {
  children: ReactNode;
  userId: string;
  refetch: () => void;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [updateUserStatus] = useUpdateUserStatusMutation();

  const handleUpdateUserStatus = (uid: string, userStatus: string) => {
    const updatedData = {status: userStatus}
    updateUserStatus([updatedData, uid]);
    setAnchorEl(null);
    refetch();
  };

  return (
    <div>
      <button onClick={handleClick}>{children}</button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleUpdateUserStatus}
        disableScrollLock={true}
      >
        <MenuItem onClick={() => handleUpdateUserStatus(userId, 'active')}>
          <Typography variant="subtitle2">
            <span className="text-xs font-semibold flex items-center gap-2 text-green-600">
              <MdApproval className="text-lg" /> Approved
            </span>
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => handleUpdateUserStatus(userId, 'suspended')}>
          <Typography variant="subtitle2">
            <span className="text-xs font-semibold flex items-center gap-2 text-yellow-600">
              <IoIosRemoveCircleOutline className="text-lg" />
              Suspended
            </span>
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => handleUpdateUserStatus(userId, 'banned')}>
          <Typography variant="subtitle2">
            <span className="text-xs font-semibold flex items-center gap-2 text-red-600">
              <MdBlockFlipped className="text-lg" />
              Block
            </span>
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserActionDropdown;
