import { Pagination, Paper, Table, TableContainer, Typography } from "@mui/material";
import TableHeading from "../../../components/ui/TableHeading";
import QueryTableData from "./QueryTableData";

const tableHEading = [
  "Property",
  "Seller",
  "Query ID",
  "Inquery",
  "Query Status",
  "Timestamp",
];

const queryData = [
    {
        id: "01",
        queryID: "67d33e5b3919551d88582b09",
        propertyID: "67d33e5b3919551d88582b09",
        propertyImage: "https://tinyurl.com/454s24hd",
        propertyPrice: "1200",
        propertyLocation: "Dhaka, Bangladesh",
        sellerImage: "https://tinyurl.com/3jk7xwtw",
        sellerID: "67d33e5b3919551d816482b09",
        sellerName: "Mehedi Hasan Baized",
        sellerEmail: "mehedihasan@gmail.com",
        sellerPhoneNum: "+880123456789",
        queryStatus: "Pending"
    },
    {
        id: "01",
        queryID: "67d33e5b3919551d88582b09",
        propertyID: "67d33e5b3919551d88582b09",
        propertyImage: "https://tinyurl.com/454s24hd",
        propertyPrice: "1200",
        propertyLocation: "Dhaka, Bangladesh",
        sellerImage: "https://tinyurl.com/3jk7xwtw",
        sellerID: "67d33e5b3919551d816482b09",
        sellerName: "Mehedi Hasan Baized",
        sellerEmail: "mehedihasan@gmail.com",
        sellerPhoneNum: "+880123456789",
        queryStatus: "Pending"
    },
]

const Queries = () => {

  return (
    <div>
      <div>
        <Typography variant="h4">
          <span className="font-semibold">All Queries</span>
        </Typography>
        <Typography variant="body1">
          <span className="font-medium text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odio!
          </span>
        </Typography>
      </div>
      <div className="bg-white min-h-screen rounded-2xl mt-5 p-5">

        {/* table section */}
        <div>
          {/* Table container */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHeading tableHeading={tableHEading} />

              <QueryTableData tableData={queryData}/>
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

export default Queries;