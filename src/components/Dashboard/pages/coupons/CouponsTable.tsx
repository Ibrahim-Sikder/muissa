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
import { useGetAllCouponPaymentQuery } from "@/redux/api/paymentApi";
import { getCookie } from "@/helpers/Cookies";
import Loader from "@/components/Loader";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

// const couponData = [
//   {
//     name: "Coupon 1",
//     code: "COUPON1",
//     discount: "10%",
//     status: "Active",
//     startDate: "2021-09-01",
//     endDate: "2021-09-30",
//   },
//   {
//     name: "Coupon 2",
//     code: "COUPON2",
//     discount: "20%",
//     status: "Active",
//     startDate: "2021-09-01",
//     endDate: "2021-09-30",
//   },
//   {
//     name: "Coupon 3",
//     code: "COUPON3",
//     discount: "30%",
//     status: "Active",
//     startDate: "2021-09-01",
//     endDate: "2021-09-30",
//   },
//   {
//     name: "Coupon 4",
//     code: "COUPON4",
//     discount: "40%",
//     status: "Active",
//     startDate: "2021-09-01",
//     endDate: "2021-09-30",
//   },
//   {
//     name: "Coupon 5",
//     code: "COUPON5",
//     discount: "50%",
//     status: "Active",
//     startDate: "2021-09-01",
//     endDate: "2021-09-30",
//   },
// ];

const CouponsTable = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const token = getCookie("mui-token");
  const page = 1;
  const rowsPerPage = 5;
  const noop = () => {};

  const { data, error, isLoading, refetch } = useGetAllCouponPaymentQuery({
    token,
    page,
    limit: rowsPerPage,
  });

  const handleDelete = async (id: string) => {
    // Implement delete functionality
    console.log(`Deleting coupon with id: ${id}`);
    setLoading(true);
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/coupons/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.status === 200) {
        toast.success(response?.data?.message);
        refetch();
        setLoading(false);
      }
    } catch (error: any) {
      if (error?.response) {
        const { status, data } = error.response;
        if ([400, 401, 409, 404, 500].includes(status)) {
          toast.error(data.message);
        } else {
          toast.error(["An unexpected error occurred."]);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
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
            {data?.coupons?.map((coupon: any, index: number) => (
              <TableRow hover key={index}>
                <TableCell>{coupon.coupon_name}</TableCell>
                <TableCell>{coupon.coupon_code}</TableCell>
                <TableCell>{coupon.coupon_discount}</TableCell>
                <TableCell>{coupon.coupon_status}</TableCell>
                <TableCell>
                  {dayjs(coupon.start_date).format("MMMM D, YYYY")}
                </TableCell>
                <TableCell>
                  {dayjs(coupon.end_date).format("MMMM D, YYYY")}
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    <DeleteButtonWithConfirmation
                      onDelete={() => handleDelete(coupon?._id)}
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
        count={data?.coupons?.length}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

export default CouponsTable;
