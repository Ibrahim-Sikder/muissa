'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export default function FinalCTA() {
  return (
    <Box py={8} textAlign="center">
      <Stack spacing={2} alignItems="center">
        <Typography variant="h3" component="h2" fontWeight="bold">
          এই সুযোগ মিস করবেন না!
        </Typography>
      
        <Button variant="contained" color="primary" size="large">
        সদস্যপদ পান
        </Button>
      </Stack>
    </Box>
  )
}

