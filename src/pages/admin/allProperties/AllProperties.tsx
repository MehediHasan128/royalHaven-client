import {
  Pagination,
  Paper,
  Table,
  TableContainer,
  Typography,
} from "@mui/material";
import SearchInput from "../../../components/ui/SearchInput";
import { FiSearch } from "react-icons/fi";
import { LuFilter } from "react-icons/lu";
import { useEffect, useState } from "react";
import TableHeading from "../../../components/ui/TableHeading";
import { TPropertyInformation } from "../../../types";
// import UsersTableData from "../allUsers/UsersTableData";

const AllProperties = () => {
  const [search, setSearch] = useState<string | null>(null);
  console.log(search);
  const tableHeading = [
    "Property",
    "Title",
    "Price",
    "Property Type",
    "Listing Type",
    "Location",
    "Seller",
  ];
  const [propertyData, setPropertyData] = useState<TPropertyInformation[] | null>(null);
  useEffect(() => {
    fetch("data.json")
    .then((res) => res.json())
    .then((data) => setPropertyData(data));
  }, []);
  console.log(propertyData);

  return (
    <div>
      <div>
        <Typography variant="h4">
          <span className="font-semibold">Properties</span>
        </Typography>
        <Typography variant="body1">
          <span className="font-medium text-gray-600">
            All property from Royal Haven
          </span>
        </Typography>
      </div>

      <div className="bg-white min-h-screen rounded-2xl mt-5 p-5">
        <div className="flex justify-between items-center px-5">
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

        <div className="mt-10">
          {/* Table container */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHeading tableHeading={tableHeading} />

              {/* <UsersTableData tableData={userData} /> */}
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

export default AllProperties;
