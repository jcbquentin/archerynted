import { Box, Heading } from '@chakra-ui/react'

const Title = ({ title }) => {
  return (
    <Box display="flex" justifyContent="center" my="4" pt="8">
    <Heading as="h2" >
      {title}
    </Heading>
  </Box>
  )
}

export default Title;