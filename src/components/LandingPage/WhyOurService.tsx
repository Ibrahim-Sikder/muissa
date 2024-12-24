'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, Button, Container, Typography } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
    error: {
      main: '#ff3d3d'
    }
  },
  typography: {
    fontFamily: 'inherit'
  }
})

export default function NotificationPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: '5vh',
          margintop: '60px'
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: 'center',
              '& > *': { color: '#ffffff' }
            }}
          >

            <div className="flex justify-center text-[#135F4A]  rounded-lg content-center items-center py-5 mb-4">
              <div className="flex gap-2 justify-center flex-col md:flex-row items-center text-center content-center font-bold">
                <h4>Exited Offer Exist On Till - </h4>
                <div className="flex items-center">
                  <div className="bg-[#FF0000] rounded-lg py-3 px-5 w-[80px] text-xl font-bold">
                    15
                  </div>
                  -
                  <div className="bg-[#FF0000] rounded-lg py-3 px-5 w-[80px] text-xl font-bold">
                    10
                  </div>
                  -
                  <div className="bg-[#FF0000] rounded-lg py-3 px-5 w-[80px] text-xl font-bold">
                    2024
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 items-center justify-center">
              <span className="bg-[#FF0000] text-white px-4 py-1 rounded">
                GET MEMBERSHIP TODAY
              </span>

            </div>

          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
