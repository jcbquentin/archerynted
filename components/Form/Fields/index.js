import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function FieldText({ label, id, type, setter, placeholder, maxLength, children }) {
  return (
    <FormControl mb="8" isRequired>
      <FormLabel htmlFor="article-name">{label}</FormLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={setter}
      />
      {children}
    </FormControl>
  );
};
