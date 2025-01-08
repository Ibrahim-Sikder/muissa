/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { Button } from '@mui/material'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'

export default function CTAButton() {

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
                    component={Link}
                    href='https://www.muissa.com/services?tab=%E0%A6%87%E0%A6%A8%E0%A6%AD%E0%A7%87%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%AE%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%20%E0%A6%B8%E0%A6%BE%E0%A6%AA%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%9F'
                    target='_blank'
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
                    আর ও জানুন
                </Button>
            </motion.div>


        </>
    )
}
