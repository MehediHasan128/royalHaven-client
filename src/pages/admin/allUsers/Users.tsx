import {
  Pagination,
  Paper,
  Table,
  TableContainer,
  Typography,
} from "@mui/material";
import SearchInput from "../../../components/ui/SearchInput";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { LuFilter } from "react-icons/lu";
import TableHeading from "../../../components/ui/TableHeading";
import UsersTableData from "./UsersTableData";

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
          {/* Table container */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHeading tableHeading={tableHEading} />

              <UsersTableData tableData={userData} />
            </Table>
          </TableContainer>

          {/* Table pagination */}
          <div className="mt-5 flex justify-end">
            <Pagination count={100} shape="rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
