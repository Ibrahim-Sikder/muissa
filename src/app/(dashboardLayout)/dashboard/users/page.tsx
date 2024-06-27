"use client";

import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useCallback, useState } from "react";
import UserCreateModal from "./_components/UserCreateModal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import Loader from "@/components/Loader";
import { useDeleteUserMutation, useGetAllUserQuery } from "@/redux/api/userApi";
import { getCookie } from "@/helpers/Cookies";
import { toast } from "sonner";
import axios from "axios";


const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const token = getCookie("mui-token");

  const {
    data: allUser,
    isLoading,
    error,
    refetch,
  } = useGetAllUserQuery({ token });
  // const [deleteUser] = useDeleteUserMutation()

  // const handleDelete = async (userId: string) => {
  //   await deleteUser(userId);
  // };
  // const [deleteUser] = useDeleteUserMutation();

  const handleDelete = useCallback(
    async (id: string) => {
      setLoading(true);

      try {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/${id}`,

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
        if (error?.data) {
          toast.error([error.data.message]);
        } else if (error.message) {
          toast.error([error.message]);
        } else {
          toast.error(["An unexpected error occurred."]);
        }
      } finally {
        setLoading(false);
      }
    },
    [refetch, token]
  );

  const columns: GridColDef[] = [
    { field: "userId", headerName: "User ID", flex: 1, minWidth: 130 },
    { field: "name", headerName: "Name", flex: 1, minWidth: 230 },
    { field: "auth", headerName: "Email", flex: 1, minWidth: 230 },
    { field: "status", headerName: "Status", flex: 1, minWidth: 120 },
    { field: "role", headerName: "Role", flex: 1, minWidth: 120 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      minWidth: 150,
      sortable: false,
      renderCell: (params) => {
        const handleEdit = () => {
          console.log("Edit:", params.row);
        };

        const handleDeleteUser = () => {
          handleDelete(params.row._id);
        };

        return (
          <Stack direction="row" spacing={1}>
            {/* <IconButton color="primary" onClick={handleEdit}>
              <EditIcon />
            </IconButton> */}
            <IconButton
              disabled={loading}
              sx={{ color: "red" }}
              onClick={handleDeleteUser}
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </Stack>
        );
      },
    },
  ];

 

  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }
  return (
    <Box>
      <Box sx={{ width: "100%", padding: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          margin="10px 0"
          spacing={{ xs: 2, sm: 0 }}
        >
          {/* <TextField size="small" label="Search User" variant="outlined" /> */}
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Create A User
          </Button>
        </Stack>

        <UserCreateModal open={isModalOpen} setOpen={handleClose} />

        <Box sx={{ height: "calc(100vh - 150px)", width: "100%" }}>
          <DataGrid
            rows={allUser?.users}
            columns={columns}
            autoHeight
            getRowId={(row) => row._id}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            sx={{
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#ddffdd",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Users;
