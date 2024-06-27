"use client";

import {
  Card,
  CardHeader,
  Typography,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Divider,
  TablePagination,
  Button,
  Link,
} from "@mui/material";
import { FaPlus, FaEye } from "react-icons/fa";

import dayjs from "dayjs";
import { FaPencil } from "react-icons/fa6";
import DeleteButtonWithConfirmation from "@/components/DeleteButtonWithConfirmation";
import { useGetCouponQuery } from "@/redux/api/couponApi";
import Loader from "@/components/Loader";


type TCoupon = {
  coupon_name:string,
  coupon_code: string,
  coupon_discount:string,
  coupon_status:string,
  startDate:string,
  endDate:string,

}

const CouponsTable = () => {
  const {data:couponData,isLoading} = useGetCouponQuery({})

  if(isLoading){
    return <Loader/>
  }
  console.log(couponData)




  const handleDelete = (id: number) => {

    console.log(`Deleting coupon with id: ${id}`);
  };


  const count = couponData?.length;
  const page = 0;
  const rowsPerPage = 5;
  const noop = () => {};

  return (
   <>
     <Card sx={{ boxShadow: "none" }}>
      <CardHeader
        title={
          <Typography variant="h5" fontWeight={700}>
            Coupons
          </Typography>
        }
        subheader="List of all coupons available in the system."
        action={
          <Link href="/dashboard/coupons/create">
            <Button
              color="primary"
              size="small"
              variant="contained"
              startIcon={<FaPlus />}
            >
              Add New Coupon
            </Button>
          </Link>
        }
      />
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {couponData?.coupons?.map((coupon:TCoupon, index:number) => (
              <TableRow hover key={index}>
                <TableCell>{coupon.coupon_name}</TableCell>
                <TableCell>{coupon.coupon_code}</TableCell>
                <TableCell>{coupon.coupon_discount}</TableCell>
                <TableCell>{coupon.coupon_status}</TableCell>
                <TableCell>
                  {dayjs(coupon.startDate).format("MMMM D, YYYY")}
                </TableCell>
                <TableCell>
                  {dayjs(coupon.endDate).format("MMMM D, YYYY")}
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    <DeleteButtonWithConfirmation
                      onDelete={() => handleDelete(index)}
                      isLoading={isLoading}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
    <Card sx={{ boxShadow: "none" }}>
      <CardHeader
        title={
          <Typography variant="h5" fontWeight={700}>
            Discount
          </Typography>
        }
        subheader="List of all discount available in the system."
        action={
          <Link href="/dashboard/coupons/create">
            <Button
              color="primary"
              size="small"
              variant="contained"
              startIcon={<FaPlus />}
            >
              Add New Discount
            </Button>
          </Link>
        }
      />
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {couponData?.coupons?.map((coupon:TCoupon, index:number) => (
              <TableRow hover key={index}>
                <TableCell>{coupon.coupon_name}</TableCell>
                <TableCell>{coupon.coupon_code}</TableCell>
                <TableCell>{coupon.coupon_discount}</TableCell>
                <TableCell>{coupon.coupon_status}</TableCell>
                <TableCell>
                  {dayjs(coupon.startDate).format("MMMM D, YYYY")}
                </TableCell>
                <TableCell>
                  {dayjs(coupon.endDate).format("MMMM D, YYYY")}
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    <DeleteButtonWithConfirmation
                      onDelete={() => handleDelete(index)}
                      isLoading={isLoading}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
   </>
  );
};

export default CouponsTable;