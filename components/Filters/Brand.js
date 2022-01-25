import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Brand = () => {

  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} colorScheme="blue">
        Marques <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuOptionGroup title="Marques" type="checkbox">
            <MenuItemOption name="check" id="check" value="Hoyt">Hoyt</MenuItemOption>
            <MenuItemOption name="check" value="Uukha">Uukha</MenuItemOption>
            <MenuItemOption name="check" value="Win&Win">Win&Win</MenuItemOption>
            <MenuItemOption name="check" value="Arc System">Arc System</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default Brand;

export async function getStaticProps () {
  const checkedBrand = document.getElementsByName("check");
}
