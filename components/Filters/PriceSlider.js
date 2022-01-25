import {
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";

const PriceSlider = () => {
  const [minPrice, setMinPrice] = useState(30);
  const [maxPrice, setMaxPrice] = useState(100);

  return (
    <Box display="flex" flex-direction="row">
      <HStack>
        <Text color="black" fontWeight="semibold">{minPrice}€</Text>
        <RangeSlider
          defaultValue={["30", "100"]}
          min={0}
          max={300}
          onChange={(val) => {setMinPrice(val[0]), setMaxPrice(val[1])}}
          step={5}
          w="xs"
        >
          <RangeSliderTrack bg="blue.100">
            <RangeSliderFilledTrack bg="blue.500" />
          </RangeSliderTrack>
          <RangeSliderThumb
            id="min"
            boxSize={4}
            index={0}
          />
          <RangeSliderThumb
            id="max"
            boxSize={4}
            index={1}
          />
        </RangeSlider>
        <Text color="black" fontWeight="semibold">{maxPrice}€</Text>
      </HStack>
    </Box>
  );
};

export default PriceSlider;
