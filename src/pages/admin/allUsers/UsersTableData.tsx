import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { HiDotsHorizontal } from "react-icons/hi";
import { PhotoView } from "react-photo-view";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

type TUserDataProps = {
  id: string;
  verified: boolean;
  name: string;
  profileImage: string;
  email: string;
  role: string;
  status: string;
  location: string;
  lastLogin: string;
  create: string;
  update: string;
};

const UsersTableData = ({ tableData }: { tableData: TUserDataProps[] }) => {
  return (
    <TableBody>
      {tableData.map((data: TUserDataProps) => (
        <StyledTableRow key={data.id}>
          <StyledTableCell>
            <div className="flex items-center gap-4">
              <div
                className={`border-2 ${
                  data.verified ? "border-green-700" : "border-red-700"
                } w-fit rounded-full p-1`}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <PhotoView src={data.profileImage}>
                    <img
                      src={data.profileImage}
                      alt=""
                      className="w-full h-full cursor-pointer"
                    />
                  </PhotoView>
                </div>
              </div>
              <div>
                <Typography variant="subtitle1">
                  <span className="font-semibold">{data.name}</span>
                </Typography>
                <Typography variant="caption">
                  <span className="font-bold text-gray-600">{data.email}</span>
                </Typography>
              </div>
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <Typography variant="subtitle1">
              <span className="font-semibold">{data.create}</span>
            </Typography>
          </StyledTableCell>
          <StyledTableCell>
            <Typography variant="subtitle1">
              <span className="font-semibold">{data.role}</span>
            </Typography>
          </StyledTableCell>
          <StyledTableCell>
            <Typography variant="subtitle1">
              <span
                className={`font-semibold ${
                  data.status === "Active" ? "text-green-600" : "text-red-600"
                }`}
              >
                {data.status}
              </span>
            </Typography>
          </StyledTableCell>
          <StyledTableCell>
            <Typography variant="subtitle1">
              <span className="font-semibold">{data.location}</span>
            </Typography>
          </StyledTableCell>
          <StyledTableCell>
            <div>
              <HiDotsHorizontal className="text-2xl cursor-pointer" />
            </div>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default UsersTableData;
