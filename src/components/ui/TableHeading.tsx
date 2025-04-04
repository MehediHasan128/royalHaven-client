import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
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

type TTableProps = {
  alignItem?: "right" | "left" | "center" | "justify" | "inherit";
  tableHeading: string[];
};

const TableHeading = ({ tableHeading }: TTableProps) => {
  return (
    <TableHead>
      <TableRow>
        {tableHeading.map((item, idx) => (
          <StyledTableCell key={idx}>{item}</StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeading;
