'use client'

import { Box, Container, Typography,  styled } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const StyledFooter = styled(Box)(({ theme }) => ({
    backgroundColor: '#1591A3',
    color: 'white',
    padding: '20px 0',
    position: 'relative',
}))

const ContactInfo = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#fff',
    '& svg': {
        fontSize: '20px',
        color: '#fff',
    },
})



export default function Footer() {
    return (
        <div className="sectionMargin">
            <StyledFooter>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                        <Typography variant="h5" component="h2" sx={{ mb: 3, color: 'white' }}>
                            Contact Us
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: { xs: 2, md: 4 },
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            mb: 3,
                            color: 'white',
                        }}>
                            <ContactInfo>
                                <PhoneIcon />
                                <Typography sx={{ color: 'white' }}>09613244844</Typography>
                            </ContactInfo>

                            <ContactInfo>
                                <EmailIcon />
                                <Typography sx={{ color: 'white' }}>info@muissa.com</Typography>
                            </ContactInfo>

                            <ContactInfo>
                                <LocationOnIcon />
                                <Typography sx={{ color: 'white' }}>
                                    House-08, Road-07, Block-C, Banasree,Dhaka-1219
                                </Typography>
                            </ContactInfo>
                        </Box>

                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                            ©2024 Muissa Business Consulting Ltd. All Rights Reserved.
                        </Typography>
                    </Box>
                </Container>

                {/* <MessengerButton aria-label="Open messenger chat">
                    <MessageIcon />
                </MessengerButton> */}
            </StyledFooter>
        </div>
    )
}
