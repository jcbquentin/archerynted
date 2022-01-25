import {
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  FormHelperText,
} from "@chakra-ui/react";

const RadioProduct = ({ setProduct }) => {
  const productRadio = document.getElementsByName("product");
  for (let i = 0; i < productRadio.length; i++) {
    if (productRadio[i].checked) {
      setProduct(productRadio[i].value);
    }
  }

  return (
    <FormControl as="fieldset" mb="8" isRequired>
      <FormLabel as="legend">Produits</FormLabel>
      <RadioGroup>
        <HStack
          spacing="24px"
          display="flex"
          flexDirection={["column", "column", "row"]}
          align="flex-start"
        >
          <Radio ml={["6", "6", "0"]} value="poignee">
            Poignées
          </Radio>
          <Radio name="product" value="branches">
            Branches
          </Radio>
          <Radio name="product" value="fleches">
            Flèches
          </Radio>
          <Radio name="product" value="stabilisation">
            Stabilisation
          </Radio>
          <Radio name="product" value="bouton-berger">
            Bouton Berger
          </Radio>
          <Radio name="product" value="viseur">
            Viseur
          </Radio>
          <Radio name="product" value="clicker">
            Clicker
          </Radio>
          <Radio name="product" value="repose-fleche">
            Repose Flèche
          </Radio>
          <Radio name="product" value="kits-lots">
            Kits / Lots
          </Radio>
        </HStack>
      </RadioGroup>
      <FormHelperText>
        Selectionne un ou plusieurs produits liés à ton article
      </FormHelperText>
    </FormControl>
  );
};

export default RadioProduct;
