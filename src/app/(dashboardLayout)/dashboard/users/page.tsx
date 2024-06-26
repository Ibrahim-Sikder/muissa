"use client";

import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import UserCreateModal from "./_components/UserCreateModal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const columns: GridColDef[] = [
  { field: "userId", headerName: "User ID", flex: 1, minWidth: 130 },
  { field: "name", headerName: "Name", flex: 1, minWidth: 230 },
  { field: "email", headerName: "Email", flex: 1, minWidth: 230 },
  { field: "phone", headerName: "Phone", flex: 1, minWidth: 120 },
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

      const handleDelete = () => {
        console.log("Delete:", params.row);
      };

      return (
        <Stack direction="row" spacing={1}>
          <IconButton color="primary" onClick={handleEdit}>
            <EditIcon />
          </IconButton>
          <IconButton sx={{ color: "red" }} onClick={handleDelete}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Stack>
      );
    },
  },
];

const rows = [
  {
    _id: "1",
    userId: "U001",
    name: "Admin",
    email: "john.doe@example.com",
    phone: "8765434567",
    role: "Admin",
  },
  {
    _id: "2",
    userId: "U002",
    name: "Admin",
    email: "jane.smith@example.com",
    phone: "8765434567",
    role: "User",
  },
];


const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

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
          <TextField size="small" label="Search User" variant="outlined" />
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Create A User
          </Button>
        </Stack>

        <UserCreateModal open={isModalOpen} setOpen={handleClose} />

        <Box sx={{ height: "calc(100vh - 150px)", width: "100%" }}>
          <DataGrid
            rows={rows}
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
