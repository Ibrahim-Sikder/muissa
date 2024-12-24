'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, Button, Container } from '@mui/material'

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
          background: '#1591A3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: '5vh',
          marginTop: '60px',
          transition: 'background-color 0.5s ease-in-out', 
          '&:hover': {
            background: '#0F7A8C', 
          },
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
              <div className="flex gap-2  justify-center flex-col md:flex-row items-center text-center content-center font-bold">
                <h4>Exited Offer Exist On Till - </h4>
                <div className="flex gap-2 justify-center flex-wrap  items-center">
                  <div className="bg-[#FF0000] rounded-lg py-3 px-3 w-[80px] text-xl font-bold">
                    15 day
                  </div>
                  -
                  <div className="bg-[#FF0000] rounded-lg py-3 px-5 w-[80px] text-xl font-bold">
                    15 h
                  </div>
                  <span className='hidden md:block'> -</span>
                  <div className="bg-[#FF0000] rounded-lg py-3 px-5 w-[80px] text-xl font-bold">
                    10 m
                  </div>
                  -
                  <div className="bg-[#FF0000] rounded-lg py-3 px-5 w-[80px] text-xl font-bold">
                    20 s
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 items-center justify-center">
              <Button sx={{ background: '#00305C', padding: '5px' }}> GET MEMBERSHIP TODAY</Button>


            </div>

          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
