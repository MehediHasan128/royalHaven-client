import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import UserDetailsModal from "../../../components/ui/UserDetailsModal";

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

export type TTableData = {
  id: string;
  userName: {
    firstName: string;
    lastName: string;
  };
  profileUniqueUserName: string;
  email: string;
  profileImage: string;
  gender: string;
  dateOfBirth: string;
  contactNumber: string;
  address: {
    streetAddress: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  companyName: string;
  websiteLink: string;
  licenceNumber: string;
  identityNumber: string;
};

const SellerTableData = ({ tableData }: { tableData: TTableData[] }) => {

  return (
    <TableBody>
      {tableData?.map((data) => (
        <StyledTableRow key={data?.id}>
          <StyledTableCell>
            <div className="flex gap-2">
              <div className="size-20 overflow-hidden">
                <img
                  className="w-full h-full object-center object-cover rounded-xl"
                  src={data?.profileImage}
                  alt=""
                />
              </div>
              <div>
                <Typography variant="h6">
                  <span>{data?.userName.firstName}</span>
                </Typography>
                <Typography variant="body2">
                  <span className="font-semibold">
                    UID: <span className="text-blue-600">{data?.id}</span>
                  </span>
                </Typography>
              </div>
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <div>
              <Typography variant="subtitle1">
                <span className="font-semibold">{data?.email}</span>
              </Typography>
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <div>
              <Typography variant="subtitle1">
                <span className="font-semibold">
                  {data?.address.city}, {data?.address?.country}
                </span>
              </Typography>
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <div>
              <UserDetailsModal userData={data}>
                <button className="px-5 py-2 rounded-lg bg-black text-white cursor-pointer hover:scale-110 duration-700">
                  <Typography variant="button">
                    <span className="font-semibold">Dtails</span>
                  </Typography>
                </button>
              </UserDetailsModal>
            </div>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default SellerTableData;
