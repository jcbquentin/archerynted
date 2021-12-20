import { InputGroup, Input, InputRightElement, IconButton} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const NavSearch = () => {
  // TODO gèrer la recherche à travers la data, +T la bdd
  // Formulaire de recherche à travers les produits disponible.
  return (
    <InputGroup>
    <Input placeholder="Viseur..." w={'100%'}/>
    <InputRightElement>
      <IconButton
        aria-label="Search database"
        icon={<SearchIcon />}
      />
    </InputRightElement>
  </InputGroup>
  )
}

export default NavSearch