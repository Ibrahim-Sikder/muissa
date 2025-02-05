// import React from "react";
// import { Controller, useFormContext } from "react-hook-form";
// import { SxProps } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import dayjs, { Dayjs } from "dayjs";

// type TDateCalendarProps = {
//   name: string;
//   sx?: SxProps;
// };

// const MUIDateCalendar: React.FC<TDateCalendarProps> = ({ name, sx }) => {
//   const { control } = useFormContext();

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Controller
//         control={control}
//         name={name}
//         defaultValue={dayjs().toISOString()} // Use ISO string for compatibility
//         render={({ field: { onChange, value } }) => (
//           <DateCalendar
//             value={value ? dayjs(value) : null} // Convert value to dayjs or handle null
//             onChange={(newValue) => {
//               onChange(newValue ? newValue.toISOString() : ""); // Ensure value is ISO string or empty
//             }}
//             sx={{
//               "& .MuiPickersDay-root.Mui-selected": {
//                 backgroundColor: "#1591A3",
//                 "&:hover": {
//                   backgroundColor: "#1591A3",
//                 },
//               },
//               ...sx,
//             }}
//           />
//         )}
//       />
//     </LocalizationProvider>
//   );
// };

// export default MUIDateCalendar;
