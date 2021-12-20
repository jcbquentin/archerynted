import {
  Box as Card,
  Box,
  Image,
  Tag,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
const CardProduct = () => {
  return (
    <Card
      mx="2"
      my="2"
      height="350px"
      width="250px"
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
        {/* Marque */}
        <Tag colorScheme="green" size="sm">
          Arc System
        </Tag>
        {/* Nom du produit */}
        <Heading size="md" color="white" fontWeight="600">
          Viseur SX200
        </Heading>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt="2">
          <p>45.99€</p>
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
