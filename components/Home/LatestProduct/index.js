import { Box } from "@chakra-ui/react";
import Title from "../../common/title";
import ProductBox from "../../common/ProductBox";

import CardProduct from "../../common/CardProduct";

const LatestProduct = () => {
  return (
    // Container for last added products card
    <div>
      <Title title={"Derniers Produits ajoutés"} />
      <ProductBox>
        {/* // TODO faire un map sur les cards */}
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </ProductBox>
    </div>
  );
};

export default LatestProduct;
