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

import Tags from "../common/Tags";
const CardProduct = () => {
  return (
    <Card
      mx="2"
      my="2"
      width="250px"
      height="450px"
      backgroundColor="rgba(255, 255, 255, 0.2)"
      borderRadius="md"
    >
      <Image
        src="https://archerie-wuilbaut.eu/3695-superlarge_default/viseur-sx200-cl-de-arc-systeme.jpg"
        alt="product"
        h={["70%", "70%", "70%", "70%"]}
        w="100%"
        objectFit="cover"
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
      />
      <Card p="2">
        <Heading size="md" color="white" fontWeight="600" ml="1" mb="1">
          Viseur SX200
        </Heading>
        {/* Tags */}
        {/* Marque */}
        <Tags colorScheme={"red"} size={"sm"} tagName="Arc System" mr="1" />
        {/* Type d'arc */}
        <Tags colorScheme={"blue"} size={"sm"} tagName="Arc Classique" mr="1" />
        {/* Type de produit */}
        <Tags
          colorScheme={"green"}
          size={"sm"}
          tagName="Accessoire Viseur"
          mr="1"
        />

        {/* Nom du produit */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="2"
        >
          <Text fontWeight="semibold">45.99€</Text>
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
