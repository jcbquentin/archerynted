import {
  Box as Card,
  Box,
  Image,
  Tag,
  IconButton,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

import Tags from "../common/Tags"

const CardProduct = ({ image, article, brand, categories, price}) => {
  return (
    <Card
      mx="2"
      my="2"
      width="300px"
      h="450px"
      backgroundColor="rgba(255, 255, 255, 0.2)"
      borderRadius="md"
    >
      <Image
        src={image}
        alt="product"
        h={["70%", "70%", "70%", "70%"]}
        w="100%"
        objectFit="cover"
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
      />
      <Card p="2">
        {/* Nom du produit */}
        <Heading size="md" color="white" fontWeight="600" ml="1" mb="4">
          {article}
        </Heading>
        {/* // TODO a dynamiser */}
        {/* Tags */}
        {/* Marque */}
        <Tags colorScheme={"red"} size={"sm"} tagName="Arc System" mr="1" />
        {/* Type d'arc */}
        <Tags colorScheme={"blue"} size={"sm"} tagName="Arc Classqiue" mr="1" />
        {/* Type de produit */}
        <Tags
          colorScheme={"green"}
          size={"sm"}
          tagName="Accessoire Viseur"
          mr="1"
        />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="4"
        >
          <Text ml="2">{price}€</Text>
          <IconButton
            aria-label="go to product page"
            size="sm"
            icon={<ArrowRightIcon />}
          />
        </Box>
      </Card>
    </Card>
  );
};

export default CardProduct;
