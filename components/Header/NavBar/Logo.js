import { Box, Text } from '@chakra-ui/react';
import Link from "next/link"

const Logo = (props) => {
  return(
    // Logo
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <Link href="/">Archerynted</Link>
      </Text>
    </Box>
  )
}

export default Logo;
