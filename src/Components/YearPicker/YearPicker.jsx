import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const YearPickerCom = ({ onChange, value }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - 25 + i);

  return (
    <FormControl fullWidth size="small">
      <InputLabel>Year</InputLabel>
      <Select
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        label="Year"
      >
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default YearPickerCom;