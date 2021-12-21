import { Box, Heading } from "@chakra-ui/react";
import Title from "../../common/title"

import CardProduct from "../../common/CardProduct";

const LatestProduct = () => {
  return (
    // Container for last added products card
    <div>
      <Title title={"Derniers Produits ajoutés"} />
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

      {/* // TODO faire un map sur les cards */}
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
