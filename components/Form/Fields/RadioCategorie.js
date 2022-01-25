import {
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  FormHelperText,
} from "@chakra-ui/react";

const RadioCategorie = ({ setCategories }) => {

  const categoriesRadio = document.getElementsByName("categories");
  // Récupère la valeur d'un input de type radio.
  for (let i = 0; i < categoriesRadio.length; i++) {
    if(categoriesRadio[i].checked) {
      setCategories(categoriesRadio[i].value)
    }
  }

  return (
    <FormControl as="fieldset" mb="8" isRequired>
      <FormLabel as="legend">Types d'arcs</FormLabel>
      <RadioGroup>
        <HStack
          spacing="24px"
          display="flex"
          flexDirection={["column", "column", "row"]}
          align="flex-start"
        >
          {/* // TODO à revoir */}
          <Radio ml={["6", "6", "0"]} value="arc-classique" name="categories">
            Arc Classique
          </Radio>
          <Radio
            value="arc-poulie"
            name="categories"
          >
            Arc à poulie
          </Radio>
          <Radio
            value="arc-chasse"
            name="categories"
          >
            Arc Chasse
          </Radio>
          <Radio
            value="barebow"
            name="categories"
          >
            BareBow
          </Radio>
          <Radio
            value="longbow"
            name="categories"
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
