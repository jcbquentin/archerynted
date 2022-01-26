import {
  Box,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Brand from "./Brand";
import BowType from "./BowType";
import PriceSlider from "./PriceSlider";

const Filters = ({ maxPrice }) => {
  return (
    <>
      <Box
        bg="blue.200"
        w="fit-content"
        p="2"
        mx="4"
        m="0 auto"
        color="white"
        display="flex"
        justifyContent="center"
        flexWrap="nowrap"
        borderRadius="lg"
        alignItems="center"
      >
        <Stack direction={["column", "column", "row", "row"]}>
          {/* Type d'arc */}
          <BowType />
          {/* Marque d'arc */}
          <Brand />
          <PriceSlider />
        </Stack>
      </Box>
    </>
  );
};

export default Filters;
