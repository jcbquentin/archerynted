import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";

const MenuProducts = () => {
  // TODO rajouter les liens
  return (
    <Menu>
      <MenuButton>Produits
      </MenuButton>
      <MenuList>
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
