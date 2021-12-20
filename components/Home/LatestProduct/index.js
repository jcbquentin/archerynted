import { Box, Heading } from "@chakra-ui/react";

import CardProduct from "./CardProduct";

const LatestProduct = () => {
  return (
    // Container for last added products card
    <div>
      <Box display="flex" justifyContent="center" my="4" pt="8">
        <Heading as="h2" size="xl">
          Derniers Produits Ajoutés
        </Heading>
      </Box>

      <Box
        py="8"
        px="2"
        mt="2"
        display="flex"
        flexDirection={["column", "column", "row", "row"]}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Box>
    </div>
  );
};

export default LatestProduct;
