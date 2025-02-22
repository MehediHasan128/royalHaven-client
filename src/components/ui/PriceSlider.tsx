import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

function valuetext(value: number) {
  return `${value}°C`;
}

const PriceSlider = ({disabled}: {disabled: boolean;}) => {
  const [value, setValue] = useState<number[]>([1000, 150000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disabled={disabled}
        max={1000000}
        min={1000}
      />
    </Box>
  );
};

export default PriceSlider;
