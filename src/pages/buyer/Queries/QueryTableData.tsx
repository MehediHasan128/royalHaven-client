import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

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
  queryID: string;
  propertyID: string;
  propertyImage: string;
  propertyPrice: string;
  propertyLocation: string;
  sellerImage: string;
  sellerID: string;
  sellerName: string;
  sellerEmail: string;
  sellerPhoneNum: string;
  queryStatus: string;
};

const QueryTableData = ({ tableData }: { tableData: TUserDataProps[] }) => {
  return (
    <TableBody>
      {tableData.map((data) => (
        <StyledTableRow key={data.id}>
          <StyledTableCell>
            <div className="flex gap-2">
              <img
                className="size-20 object-cover rounded-xl"
                src={data?.propertyImage}
                alt=""
              />
              <div className="w-[30%]">
                <Typography variant="body1">
                  <span className="font-semibold text-gray-700">
                    <span className="text-blue-700">Property ID:</span>
                    <br />
                    {data?.propertyID}
                  </span>
                </Typography>
                <Typography style={{ margin: "5px 0px" }} variant="body1">
                  <span className="font-semibold text-gray-600">
                    Price: ${data?.propertyPrice}
                  </span>
                </Typography>
              </div>
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <div className="flex gap-2">
              <img
                className="size-20 object-cover rounded-xl"
                src={data?.sellerImage}
                alt=""
              />
              <div>
                <Typography variant="body1">
                  <span className="font-semibold text-gray-700">
                    <span className="text-blue-700">Seller ID:</span>
                    <br />
                    {data?.sellerID}
                  </span>
                </Typography>
                <Typography style={{ margin: "5px 0px" }} variant="body1">
                  <span className="font-medium text-gray-700">
                    {data?.sellerName}
                  </span>
                </Typography>
              </div>
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <Typography variant="body1">
              <span className="font-semibold text-gray-700">
                {data?.queryID}
              </span>
            </Typography>
          </StyledTableCell>
          <StyledTableCell>
          <Typography variant="body1">
              <span className="font-medium">
                Price Offer
              </span>
            </Typography>
          </StyledTableCell>
          <StyledTableCell>
            <Typography variant="body1">
              <span className="font-medium text-red-700">
                {data?.queryStatus}
              </span>
            </Typography>
          </StyledTableCell>
          <StyledTableCell>
            <Typography variant="body1">
              <span className="font-medium">
                8.35 PM <br />
                08/01/2024
              </span>
            </Typography>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default QueryTableData;
