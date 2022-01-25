import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from "@chakra-ui/react";

const MenuCategories = () => {
  // TODO rajouter les liens
  return (
    <Menu>
      <MenuButton whiteSpace="yes" display="inline">Type d'arc</MenuButton>
      <MenuList zIndex="3">
        <MenuGroup>
          <MenuItem>Arc Classique</MenuItem>
          <MenuItem>Arc à Poulie</MenuItem>
          <MenuItem>Arc Chasse</MenuItem>
          <MenuItem>BareBow (Arc nu)</MenuItem>
          <MenuItem>LongBow (Arc droit)</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default MenuCategories;
