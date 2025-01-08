import React, { useState } from 'react';
import { Box, Button, Typography, TextField, Paper } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import  { Dayjs } from 'dayjs';

const ConsultancyBooking = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !clientName || !clientEmail) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Booking:', { 
      selectedDate: selectedDate.format('YYYY-MM-DD'),
      selectedTime: selectedTime.format('HH:mm'),
      clientName, 
      clientEmail 
    });
 
    alert('Booking submitted successfully!');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper elevation={3} sx={{ maxWidth: 400, margin: 'auto', padding: 3, backgroundColor: '#f8f8f8' }}>
        <Typography variant="h5" gutterBottom align="center" sx={{ color: '#002140', fontWeight: 'bold' }}>
          Book a Consultation
        </Typography>
      
      
        <Box sx={{ mt: 2 }}>
          <TimePicker
            label="Select Time"
            value={selectedTime}
            onChange={(newValue) => setSelectedTime(newValue)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#002140' },
                '&:hover fieldset': { borderColor: '#1591A3' },
                '&.Mui-focused fieldset': { borderColor: '#002140' },
              },
            }}
          />
        </Box>
        <TextField
          fullWidth
          label="Your Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          margin="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#002140' },
              '&:hover fieldset': { borderColor: '#1591A3' },
              '&.Mui-focused fieldset': { borderColor: '#002140' },
            },
          }}
        />
        <TextField
          fullWidth
          label="Your Email"
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
          margin="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#002140' },
              '&:hover fieldset': { borderColor: '#1591A3' },
              '&.Mui-focused fieldset': { borderColor: '#002140' },
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleBooking}
          fullWidth
          sx={{ 
            mt: 2, 
            backgroundColor: '#002140',
            '&:hover': {
              backgroundColor: '#1591A3',
            },
          }}
        >
          Book Consultation
        </Button>
      </Paper>
    </LocalizationProvider>
  );
};

export default ConsultancyBooking;

