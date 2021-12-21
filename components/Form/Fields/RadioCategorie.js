import {
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  FormHelperText,
} from "@chakra-ui/react";

const RadioCategorie = ({ setCategories }) => {
  return (
    <FormControl as="fieldset" mb="8" isRequired>
      <FormLabel as="legend">Catégories</FormLabel>
      <RadioGroup>
        <HStack
          spacing="24px"
          display="flex"
          flexDirection={["column", "column", "row"]}
          align="flex-start"
        >
          {/* // TODO à revoir */}
          <Radio ml={["6", "6", "0"]} value="arc-classique" name="categories" onChange={(event) => setCategories(event.target.value)}>
            Arc Classique
          </Radio>
          <Radio
            value="arc-poulie"
            name="categories"
            onChange={(event) => setCategories(event.target.value)}
          >
            Arc à poulie
          </Radio>
          <Radio
            value="arc-chasse"
            name="categories"
            onChange={(event) => setCategories(event.target.value)}
          >
            Arc Chasse
          </Radio>
          <Radio
            value="barebow"
            name="categories"
            onChange={(event) => setCategories(event.target.value)}
          >
            BareBow
          </Radio>
          <Radio
            value="longbow"
            name="categories"
            onChange={(event) => setCategories(event.target.value)}
          >
            Longbow
          </Radio>
        </HStack>
      </RadioGroup>
      <FormHelperText>
        Selectionne une ou plusieurs catégories liées à ton article
      </FormHelperText>
    </FormControl>
  );
};

export default RadioCategorie;
