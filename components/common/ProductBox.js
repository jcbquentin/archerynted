import { Box } from "@chakra-ui/react";

const ProductBox = ( {children }) => {
  return (
    <Box
      py="8"
      px="6"
      mt="2"
      display="flex"
      flexDirection={["column", "column", "row", "row"]}
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >{children}</Box>
  );
};

export default ProductBox;
