import { Box, Stack, Fade } from "@chakra-ui/react";
import NavSearch from './NavSearch';
import MenuProducts from "./MenuProducts";

import Buttons from "../../common/Buttons"



const MenuLinks = ({isOpen}) => {
  // Block réunissant les composants disponible dans la navigation.
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      borderBottom={["1px solid white", "1px solid white", "none", "none"]}
    >
      <Stack
        spacing="10"
        align="center"
        justify={["center", "space-between", "center", "center"]}
        direction={["column", "column", "row", "row"]}
        py={[4, 4, 0, 0]}
      >
        <MenuProducts />
        <NavSearch />
        <Buttons link={"deposer-une-annonce"} linkAlt={"Déposer une annonce"} buttonText={"Vendre"} color={"blue.600"} colorScheme={"blue"} />
        <Buttons link={"deposer-une-annonce"} linkAlt={"Déposer une annonce"} buttonText={"Connexion "} color={"green.600"} colorScheme={"green"} />
      </Stack>
    </Box>
  );
}

export default MenuLinks;