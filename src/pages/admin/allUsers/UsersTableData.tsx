import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { HiDotsHorizontal } from "react-icons/hi";
import { TUserInformation } from "./Users";
import { format } from "date-fns";
import UserActionDropdown from "../../../components/ui/UserActionDropdown";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UsersTableData = ({ tableData, refetch }: { tableData: TUserInformation[], refetch: () => void }) => {
  const formateDate = (timeStamp: string, type: string) => {
    const dateAndTime =
      type === "date"
        ? format(new Date(timeStamp), "MMMM do yyyy")
        : format(new Date(timeStamp), "h:mm a");

    return dateAndTime;
  };

  return (
    <TableBody>
      {tableData?.map((data: TUserInformation) => (
        <StyledTableRow>
          <StyledTableCell>
            <div className="flex items-center gap-2">
              <div className="size-10 overflow-hidden rounded-full">
                <img className="object-cover" src={data?.profileImage} alt="" />
              </div>
              <div>
                <Typography variant="subtitle2">
                  <span>
                    {data.userName.firstName} {data.userName.lastName}
                  </span>
                </Typography>
              </div>
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <div className="w-56">
              <Typography variant="subtitle2">
                <span>{data.email}</span>
              </Typography>
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <div className="w-32">
              <Typography variant="subtitle2">
                <span>
                  {data.role.charAt(0).toUpperCase() + data.role.slice(1)}
                </span>
              </Typography>
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <div className="w-32">
              <Typography variant="subtitle2">
                {data.status === "active" ? (
                  <span className="text-green-600">
                    {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
                  </span>
                ) : (
                  <>
                    {data.status === "suspended" ? (
                      <span className="text-yellow-600">
                        {data.status.charAt(0).toUpperCase() +
                          data.status.slice(1)}
                      </span>
                    ) : (
                      <span className="text-red-600">
                        {data.status.charAt(0).toUpperCase() +
                          data.status.slice(1)}
                      </span>
                    )}
                  </>
                )}
              </Typography>
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <div className="w-56">
              <Typography variant="subtitle2">
                <span>{formateDate(data.createdAt, "date")}</span>,{" "}
                <span className="text-blue-800 font-bold">
                  {formateDate(data.createdAt, "time")}
                </span>
              </Typography>
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <UserActionDropdown userId={data._id} refetch={refetch}>
              <HiDotsHorizontal className="text-xl cursor-pointer" />
            </UserActionDropdown>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default UsersTableData;
