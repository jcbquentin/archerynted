import { Flex } from '@chakra-ui/react'

const NavBarContainer = ({ isOpen, children, ...props }) => {
  // Block de navigation
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap={["wrap", "wrap", "nowrap", "nowrap"]}
      w="100%"
      p={8}
      bg={{ base: isOpen ? 'blue.900' : 'transparent'}}
      color={["white", "white", "primary.700", "primary.700"]}
      boxShadow="md"
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavBarContainer;