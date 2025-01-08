import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { SxProps } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

type TTimePickerProps = {
  name: string;
  label?: string;
  required?: boolean;
  sx?: SxProps;
  value?: Dayjs | null;
  onChange?: (value: Dayjs | null) => void;
};

const MUITimePicker = ({
  name,
  label,
  required,
  sx,
  value: externalValue,
  onChange: externalOnChange,
}: TTimePickerProps) => {
  const { control } = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange: fieldOnChange, value: fieldValue },
          fieldState: { error },
        }) => (
          <TimePicker
            label={label}
            value={externalValue !== undefined ? externalValue : fieldValue ? dayjs(fieldValue) : null}
            onChange={(newValue) => {
              const formattedTime = newValue ? newValue.format("HH:mm") : null;
              fieldOnChange(formattedTime);
              if (externalOnChange) {
                externalOnChange(newValue);
              }
            }}
            slotProps={{
              textField: {
                required: required,
                error: !!error?.message,
                helperText: error?.message,
                sx: {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#1591A3' },
                    '&:hover fieldset': { borderColor: '#1591A3' },
                    '&.Mui-focused fieldset': { borderColor: '#1591A3' },
                  },
                  ...sx,
                },
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default MUITimePicker;

