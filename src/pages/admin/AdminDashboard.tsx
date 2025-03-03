import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { AiOutlineDollar } from "react-icons/ai";
import { FaChartLine, FaStar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { AiOutlinePropertySafety } from "react-icons/ai";
import { MdOutlinePendingActions } from "react-icons/md";
import {
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
  Cell,
  BarChart,
  CartesianGrid,
  XAxis,
  Legend,
  Bar,
} from "recharts";
import {
  buyerData,
  COLORS,
  data,
  sellerData,
  sellingData,
  sellingInformation,
} from "../../types/data";
import { PieChart, Pie } from "recharts";

function createData(
  title: string,
  price: number,
  imageURL: string,
  listingType: string
) {
  return { title, price, imageURL, listingType };
}

const rows = [
  createData("Frozen yoghurt", 159, "https://tinyurl.com/hr8dknmv", "rent"),
  createData(
    "Ice cream sandwich",
    2370,
    "https://tinyurl.com/yc5e56m9",
    "sell"
  ),
  createData("Eclair", 2625, "https://tinyurl.com/47d6abzu", "sell"),
];

const AdminDashboard = () => {
  return (
    <div>
      <Typography variant="h4">
        <span className="font-bold">
          Welcome <span className="text-[#6308da]">Mehedi Hasan</span>
        </span>
      </Typography>

      <div className="my-10">
        <div className="grid grid-cols-4 grid-rows-2 gap-5">
          <div className="col-span-3 flex gap-8">
            <div className="bg-white p-5 rounded-2xl flex-grow shadow-lg">
              <div className="flex justify-between items-center gap-20">
                <Typography variant="h6">
                  <span className="flex items-center gap-2">
                    <AiOutlineDollar />
                    Total Earning
                  </span>
                </Typography>
                <Typography variant="h6">
                  <span className="flex items-center gap-2">
                    <FaChartLine className="text-green-600" />
                    1.56%
                  </span>
                </Typography>
              </div>
              <div className="my-2">
                <Typography variant="h4">
                  <span className="font-bold">$ 334,945</span>
                </Typography>
              </div>
              <div>
                <ResponsiveContainer width={300} height={100}>
                  <AreaChart data={sellingData}>
                    <Area
                      type="monotone"
                      dataKey="sell"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      strokeWidth={2}
                    />
                    <Tooltip />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl flex-grow shadow-lg">
              <div className="flex justify-between items-center gap-20">
                <Typography variant="h6">
                  <span className="flex items-center gap-2">
                    <FaUsers />
                    Total Buyers
                  </span>
                </Typography>
                <Typography variant="h6">
                  <span className="flex items-center gap-2">
                    <FaChartLine className="text-blue-600" />
                    5.56%
                  </span>
                </Typography>
              </div>
              <div className="my-2">
                <Typography variant="h4">
                  <span className="font-bold">5.5K</span>
                </Typography>
              </div>
              <div>
                <ResponsiveContainer width={300} height={100}>
                  <AreaChart data={buyerData}>
                    <Area
                      type="monotone"
                      dataKey="buyer"
                      stroke="#5273f7"
                      fill="#5273f7"
                      strokeWidth={2}
                    />
                    <Tooltip />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl flex-grow shadow-lg">
              <div className="flex justify-between items-center gap-20">
                <Typography variant="h6">
                  <span className="flex items-center gap-2">
                    <FaUsers />
                    Total Seller
                  </span>
                </Typography>
                <Typography variant="h6">
                  <span className="flex items-center gap-2">
                    <FaChartLine className="text-orange-600" />
                    5.56%
                  </span>
                </Typography>
              </div>
              <div className="my-2">
                <Typography variant="h4">
                  <span className="font-bold">35K</span>
                </Typography>
              </div>
              <div>
                <ResponsiveContainer width={300} height={100}>
                  <AreaChart data={sellerData}>
                    <Area
                      type="monotone"
                      dataKey="seller"
                      stroke="#f77e45"
                      fill="#f77e45"
                      strokeWidth={2}
                    />
                    <Tooltip />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="row-span-2 space-y-5 overflow-hidden">
            <div className="bg-white w-full p-5 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-fit rounded-full p-2 bg-red-900 text-white">
                  <AiOutlinePropertySafety className="text-2xl" />
                </div>
                <Typography variant="h6">Active Properties</Typography>
              </div>
              <div className="mt-5">
                <Typography variant="h5">
                  <span className="font-bold">5600</span>
                </Typography>
              </div>
              <div className="flex justify-center items-center">
                <PieChart width={300} height={200}>
                  <Pie
                    data={data}
                    cx={120}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </div>
            </div>
            <div className="bg-white w-full p-5 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-fit rounded-full p-2 bg-red-900 text-white">
                  <MdOutlinePendingActions className="text-2xl" />
                </div>
                <Typography variant="h6">Pending Properties</Typography>
              </div>
              <div className="mt-5">
                <Typography variant="h5">
                  <span className="font-bold">5600</span>
                </Typography>
              </div>
            </div>
          </div>

          <div className="col-span-3 flex justify-between gap-5">
            <div className="h-full w-full flex bg-white rounded-2xl shadow-lg">
              <div className="w-[50%] h-full">
                <img
                  className="w-full h-full rounded-l-2xl brightness-75 hover:brightness-100 duration-700"
                  src="https://tinyurl.com/e9atws7m"
                  alt=""
                />
              </div>
              <div className="pl-3 py-2">
                <Typography variant="h6">
                  <span>Recent Listing</span>
                </Typography>
                <div className="my-2">
                  <Avatar
                    sx={{ width: 50, height: 50 }}
                    src="https://tinyurl.com/58kxedw3"
                  />
                </div>
                <Typography variant="subtitle2">
                  <span>Zihad Mahmud</span>
                </Typography>
                <Typography variant="caption">
                  <span className="font-medium">zihadMahmud.com</span>
                </Typography>

                <div className="mt-2">
                  <Typography variant="caption">
                    <span className="flex items-center gap-2 font-semibold">
                      <FaStar className="text-yellow-500" />
                      4.8/05
                    </span>
                  </Typography>
                </div>
              </div>
            </div>

            <div className="h-full w-full flex bg-white rounded-2xl shadow-lg">
              <div className="w-[50%] h-full">
                <img
                  className="w-full h-full rounded-l-2xl brightness-75 hover:brightness-100 duration-700"
                  src="https://tinyurl.com/vwmu4pwy"
                  alt=""
                />
              </div>
              <div className="pl-3 py-2">
                <Typography variant="h6">
                  <span>Buyer Inquiry</span>
                </Typography>
                <div className="my-2">
                  <Avatar
                    sx={{ width: 50, height: 50 }}
                    src="https://tinyurl.com/ywh23jzh"
                  />
                </div>
                <Typography variant="subtitle2">
                  <span>Md Mahfuz</span>
                </Typography>
                <Typography variant="caption">
                  <span className="font-medium">mdMahfuz@gmail.com</span>
                </Typography>

                <div className="mt-2">
                  <Typography variant="caption">
                    <span className="flex items-center gap-2 font-semibold">
                      <FaStar className="text-yellow-500" />
                      4.8/05
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 grid-rows-2 mt-5 gap-5">
          <div className="bg-white col-span-2 row-span-2 rounded-2xl shadow-lg min-h-96">
            <div className="h-[65%] overflow-y-auto">
              <div className="text-center my-2">
                <Typography variant="h6">
                  <span className="font-semibold">Pending Properties</span>
                </Typography>
              </div>
              <div>
                <TableContainer>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Property</TableCell>
                        <TableCell colSpan={2}>Seller</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.title}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-[40%] h-20 overflow-hidden rounded">
                                <img
                                  className="rounded w-full h-full"
                                  src={row.imageURL}
                                  alt=""
                                />
                              </div>
                              <Typography variant="subtitle2">
                                <span>
                                  {row.title} <br />
                                  <span
                                    className={`px-2 py-0.5 rounded-xl ${
                                      row.listingType == "rent"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                    } font-semibold text-xs uppercase`}
                                  >
                                    {row.listingType}
                                  </span>
                                </span>
                              </Typography>
                            </div>
                          </TableCell>
                          <TableCell colSpan={2}>
                            <div className="space-y-2">
                              <Avatar src="https://tinyurl.com/ywh23jzh" />
                              <div className="leading-0">
                                <Typography variant="subtitle2">
                                  <span>Mehedi Hasan</span>
                                </Typography>
                                <Typography variant="caption">
                                  <span>Dhaka, Bangladesh</span>
                                </Typography>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Typography variant="subtitle2">
                              <span>${row.price}</span>
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <button className="bg-[#002C54] px-2 py-1 rounded-xl text-white font-medium cursor-pointer">
                                Approve
                              </button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>

            <div className="mt-5 flex justify-between gap-5 px-2">
              <div className="w-full h-full bg-gray-50 rounded-2xl"><h1>This is one</h1></div>
              <div className="w-full h-full bg-gray-50 rounded-2xl"><h1>This is two</h1></div>
            </div>
          </div>
          <div className="bg-white col-span-3 rounded-2xl shadow-lg h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={sellingInformation}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid />
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="product" fill="#002C54" />
                <Bar yAxisId="right" dataKey="sell" fill="#2596be" />
                <Bar yAxisId="right" dataKey="revenue" fill="#520216" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="col-span-3 bg-white rounded-2xl shadow-lg p-2">
            <h1>This is </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
