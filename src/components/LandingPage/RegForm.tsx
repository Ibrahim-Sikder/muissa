'use client'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'

export default function RegistrationForm() {
  return (
    <Box py={8}>
      <Typography variant="h4" component="h2" textAlign="center" gutterBottom fontWeight="bold">
        ফর্ম পূরণ করে রেজিস্ট্রেশন করুন
      </Typography>
      <Paper
        component="form"
        sx={{
          maxWidth: 600,
          mx: 'auto',
          p: 4,
        }}
      >
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="আপনার নাম"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="ইমেইল এড্রেস"
            type="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="মোবাইল নাম্বার"
            type="tel"
            variant="outlined"
          />
          <TextField
            fullWidth
            select
            label="বিজনেস টাইপ"
            variant="outlined"
          >
            <MenuItem value="llc">LLC</MenuItem>
            <MenuItem value="corporation">Corporation</MenuItem>
          </TextField>
          <TextField
            fullWidth
            select
            label="Company Formation Status"
            variant="outlined"
          >
            <MenuItem value="new">New Company</MenuItem>
            <MenuItem value="existing">Existing Company</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="আপনার মেসেজ"
            multiline
            rows={4}
            variant="outlined"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            সাবমিট
          </Button>
        </Stack>
      </Paper>
    </Box>
  )
}

