import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";


const MenuProducts = () => {
  // TODO rajouter les liens
  return (
    <Menu>
      <MenuButton whiteSpace="nowrap">Produits&nbsp;<ChevronDownIcon />
      </MenuButton>
      <MenuList zIndex="3" w={["100vw", "100vw", "auto"]}>
        <MenuGroup>
          <MenuItem>Poignées</MenuItem>
          <MenuItem>Branches</MenuItem>
          <MenuItem>Flèches</MenuItem>
          <MenuDivider />
          <MenuGroup title="Accessoires">
            <MenuItem>Stabilisation</MenuItem>
            <MenuItem>Bouton Berger</MenuItem>
            <MenuItem>Viseur</MenuItem>
            <MenuItem>Clicker</MenuItem>
            <MenuItem>Viseur</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
          <MenuItem>Kits / Lots</MenuItem>
          </MenuGroup>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default MenuProducts;
