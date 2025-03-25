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
  import { useState } from "react";
  import TableHeading from "../../../components/ui/TableHeading";
import SellerTableData from "./SellerTableData";
import { useGetAllSellerReqQuery } from "../../../redux/features/seller/sellerApi";
  
  const SellerRequest = () => {
    const [search, setSearch] = useState<string | null>(null);
    console.log(search);

    const {data: sellerReqData} = useGetAllSellerReqQuery(undefined);
    const tableData = sellerReqData?.data;
    
    

    const tableHeading = [
      "Profile",
      "Email",
      "Location",
      "Details"
    ];
    
  
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
  
                <SellerTableData tableData={tableData} />
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
  
  export default SellerRequest;
  