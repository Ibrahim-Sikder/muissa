/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { Button } from '@mui/material'
import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import MuissaModal from './Modal'

export default function MuissaButton() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const controls = useAnimation()

  const startAnimation = () => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'mirror', 
      },
    })
  }


  React.useEffect(() => {
    startAnimation()
  }, [controls])

  return (
    <>
      <motion.div
        animate={controls} 
        style={{ display: 'inline-block' }}
      >
        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{
            backgroundColor: '#fff',
            color: '#1591A3',
            padding: {
              xs: '4px 5px',
              sm: '10px 20px',
              md: '12px 32px',
            },
            fontWeight: 'bold',
            fontSize: {
              xs: '16px',
              sm: '18px',
              md: '20px',
            },
            borderRadius: '8px',
            borderBottom: '6px solid #1591A3',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease-in-out',
            zIndex: 1,

            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              backgroundColor: '#1591A3',
              transition: 'left 0.5s ease-in-out',
              zIndex: -1,
            },
            '&:hover': {
              color: '#fff',
              transform: 'translateY(-2px)',
              borderBottom: '5px solid #fff',
              '&::before': {
                left: 0,
              },
            },
            '&:active': {
              transform: 'scale(0.98) translateY(0)',
              boxShadow: `
                0 1px 2px rgba(255, 255, 255, 0.1),
                0 2px 4px rgba(255, 255, 255, 0.1),
                0 4px 8px rgba(255, 255, 255, 0.1),
                0 8px 16px rgba(255, 255, 255, 0.1),
                0 16px 32px rgba(255, 255, 255, 0.1)
              `,
              transition: 'all 0.1s',
            },
          }}
        >
          Book Meeting
        </Button>
      </motion.div>

      {open && <MuissaModal open={open} onClose={handleClose} />}
    </>
  )
}
