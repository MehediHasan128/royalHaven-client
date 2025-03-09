import {
  Pagination,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SearchInput from "../../../components/ui/SearchInput";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { LuFilter } from "react-icons/lu";
import { PhotoView } from "react-photo-view";
import { HiDotsHorizontal } from "react-icons/hi";
import TableHeading from "../../../components/ui/TableHeading";

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

const userData = [
  {
    id: "hsui57852%wk",
    verified: true,
    name: "Mehedi Hasan",
    profileImage: "https://tinyurl.com/3ewvn56f",
    email: "mehedihasan@gmail.com",
    role: "Seller",
    status: "Active",
    location: "Dhaka, Bangladesh",
    lastLogin: "8:30 AM",
    create: "5.30 PM, 05/02/2025",
    update: "6.30 PM, 08/10/2025",
  },
  {
    id: "hsui5785he79%wk",
    verified: true,
    name: "Md Mahfuz",
    profileImage: "https://tinyurl.com/msnfws8f",
    email: "mahfuz@gmail.com",
    role: "Buyer",
    status: "Active",
    location: "Los Angle, USA",
    lastLogin: "2:45 AM",
    create: "8.10 PM, 05/02/2025",
    update: "6.30 PM, 08/10/2025",
  },
  {
    id: "hsui575he79%wk",
    verified: false,
    name: "Md Mahfuz",
    profileImage: "https://tinyurl.com/msnfws8f",
    email: "mahfuz@gmail.com",
    role: "Buyer",
    status: "Suspended",
    location: "Los Angle, USA",
    lastLogin: "2:45 AM",
    create: "8.10 PM, 05/02/2025",
    update: "6.30 PM, 08/10/2025",
  },
];

const tableHEading = [
  "User Profile",
  "CreatedAt",
  "Role",
  "Status",
  "Location",
  "Action",
];

const Users = () => {
  const [search, setSearch] = useState<string | null>(null);

  return (
    <div>
      <div>
        <Typography variant="h4">
          <span className="font-semibold">All Users</span>
        </Typography>
        <Typography variant="body1">
          <span className="font-medium text-gray-600">
            Get all the users from Royal Haven
          </span>
        </Typography>
      </div>
      <div className="bg-white min-h-screen rounded-2xl mt-5 p-5">
        {/* Search and filter section */}
        <div className="flex justify-between items-center">
          <div className="w-[20%]">
            <SearchInput
              name="user"
              placeholder="Search User..."
              searchText={setSearch}
              icon={<FiSearch />}
            />
          </div>
          <div className="flex items-center gap-2 border w-fit px-3 py-2 rounded-md hover:border-green-500 hover:text-green-500 duration-700 cursor-pointer">
            <LuFilter className="text-xl" />
            <Typography variant="subtitle1">
              <span className="font-medium">Filter</span>
            </Typography>
          </div>
        </div>

        {/* table section */}
        <div className="mt-10">
          {/* <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>User Profile</StyledTableCell>
                  <StyledTableCell>CreatedAt</StyledTableCell>
                  <StyledTableCell>Role</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell>Location</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {userData.map((data) => (
                  <StyledTableRow key={data.id}>
                    <StyledTableCell>
                      <div className="flex items-center gap-4">
                        <div
                          className={`border-2 ${
                            data.verified
                              ? "border-green-700"
                              : "border-red-700"
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
                            <span className="font-bold text-gray-600">
                              {data.email}
                            </span>
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
                            data.status === "Active"
                              ? "text-green-600"
                              : "text-red-600"
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
                    <StyledTableCell align="right">
                      <div className="flex justify-end pr-3">
                        <HiDotsHorizontal className="text-2xl cursor-pointer" />
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
          <TableHeading tableHeading={tableHEading} />
          <div className="mt-5 flex justify-end">
            <Pagination count={100} shape="rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
