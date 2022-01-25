import {
  Box,
  HStack,
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
        color="white"
        display="flex"
        m="0 auto"
        flexDirection="row"
        flexWrap="nowrap"
        borderRadius="lg"
        alignItems="center"
      >
        <HStack>
          {/* Type d'arc */}
          <BowType />
          {/* Marque d'arc */}
          <Brand />
          <PriceSlider />
        </HStack>
      </Box>
    </>
  );
};

export default Filters;
