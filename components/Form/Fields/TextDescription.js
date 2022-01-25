import { FormControl, FormLabel, InputGroup, Input, TextArea, Textarea} from "@chakra-ui/react";

const TextDescription = () => {
  return (
    <FormControl mb="8" isRequired>
    <FormLabel htmlFor="prix">Description</FormLabel>
      <Textarea />
  </FormControl>
  )
}

export default TextDescription;