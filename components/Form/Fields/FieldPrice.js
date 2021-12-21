import { FormControl, FormLabel, InputGroup, Input, InputRightElement } from "@chakra-ui/react";

export default function FieldPrice({ label, placeholder, type, setter}) {
  return (
    <FormControl mb="8" isRequired>
    <FormLabel htmlFor="prix">{label}</FormLabel>
    <InputGroup>
      <Input
        placeholder={placeholder}
        type={type}
        w={"100%"}
        onChange={setter}
      />
      <InputRightElement>€</InputRightElement>
    </InputGroup>
  </FormControl>
  )

}