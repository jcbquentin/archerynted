import { Box, Stack } from "@chakra-ui/react";
import NavSearch from './NavSearch';
import AddButton from './AddButton'
import MenuProducts from "./MenuProducts";



const MenuLinks = ({isOpen}) => {
  // Block réunissant les composants disponible dans la navigation.
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      borderBottom={["1px solid white", "1px solid white", "none", "none"]}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "center", "center"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
        pb={[4, 4, 0, 0]}
      >
        <MenuProducts />
        <NavSearch />
        <AddButton />
      </Stack>
    </Box>
  );
}

export default MenuLinks;