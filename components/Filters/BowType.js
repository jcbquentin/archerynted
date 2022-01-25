import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const BowType = () => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} colorScheme="blue">
        Types d&apos;arcs <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuOptionGroup title="Arc" type="checkbox">
          <MenuItemOption value="Arc Classique">Arc Classqiue</MenuItemOption>
          <MenuItemOption value="Arc à Poulie">Arc à Poulie</MenuItemOption>
          <MenuItemOption value="Arc Chasse">Arc Chasse</MenuItemOption>
          <MenuItemOption value="Barebow (Arc nu)">
            Barebow (Arc nu)
          </MenuItemOption>{" "}
          <MenuItemOption value="LongBow (Arc droit)">
          LongBow (Arc droit)
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default BowType;
