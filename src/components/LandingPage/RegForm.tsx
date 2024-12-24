'use client'

import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material'
import { Person, Email, Phone, Home, Apartment } from '@mui/icons-material'

export default function QuoteRequestForm() {
  const [consultMethod, setConsultMethod] = useState('virtual')

  return (
    <Container
      maxWidth={false}
      sx={{
        bgcolor: '#',

      }}
    >
      <Box
        sx={{
          bgcolor: 'white',
          borderRadius: '20px',
          p: { xs: 2, sm: 4,md: 4 },
          width: '100%',
          maxWidth: '500px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: '#1591A3',
            fontSize: {
              xs: '1.3rem',
              sm: '2rem',
            },
          }}
        >
          Request Membership
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: 'text.secondary',
            mb: 4,
            fontSize: { xs: '0.875rem', sm: '1rem' },
          }}
        >
          Marketing Business campaign
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            placeholder=" Name"
            variant="outlined"
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: (
                <Person sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />

          <TextField
            fullWidth
            placeholder="Email Address"
            variant="outlined"
            type="email"
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: (
                <Email sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />

          <TextField
            fullWidth
            placeholder="Phone No"
            variant="outlined"
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: (
                <Phone sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />
          <TextField
            fullWidth
            placeholder="Business Name"
            variant="outlined"
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: (
                <Apartment sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />
          <TextField
            fullWidth
            placeholder="Business Address"
            variant="outlined"
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: (
                <Home sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
          />


          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: '#1591A3',
              color: 'white',
          
              py: { xs: 1, sm: 1,md: 1.5 },
              borderRadius: '25px',
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                bgcolor: '#ff4f33',
              },
            }}
          >
            Get Membership
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

