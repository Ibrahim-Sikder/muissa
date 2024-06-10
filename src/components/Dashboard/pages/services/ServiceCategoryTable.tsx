"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface ServiceCategory {
  id: number;
  name: string;
}

const ServiceCategoryTable = () => {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);

  useEffect(() => {
    // Fetch the categories from API or any data source
    // For now, we'll use mock data
    const mockCategories = [
      {
        id: 1,
        name: "Category 1",
      },
      {
        id: 2,
        name: "Category 2",
      },
    ];
    setCategories(mockCategories);
  }, []);

  const handleDelete = (id: number) => {
    // Mock delete functionality
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== id)
    );
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        boxShadow: "none",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        p: 2,
        mb: 4,
      }}
    >
      <Stack spacing={2} sx={{ mb: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          Service Categories
        </Typography>
      </Stack>
      <Table
        sx={{
          minWidth: 650,
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        <TableHead
          sx={{
            backgroundColor: "#f5f5f5",
          }}
        >
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow
              key={category.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": {
                  backgroundColor: "#f9f9f9",
                },
              }}
            >
              <TableCell>{category.id}</TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell align="right">
                <IconButton
                  color="error"
                  onClick={() => handleDelete(category.id)}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ServiceCategoryTable;
