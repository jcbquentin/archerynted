import { FormControl, FormLabel, RadioGroup, HStack, Radio, FormHelperText } from "@chakra-ui/react"

const RadioProduct = () => {
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
        <Radio value="branches">Branches</Radio>
        <Radio value="fleches">Flèches</Radio>
        <Radio value="stabilisation">Stabilisation</Radio>
        <Radio value="bouton-berger">Bouton Berger</Radio>
        <Radio value="viseur">Viseur</Radio>
        <Radio value="clicker">Clicker</Radio>
        <Radio value="repose-fleche">Repose Flèche</Radio>
        <Radio value="kits-lots">Kits / Lots</Radio>
      </HStack>
    </RadioGroup>
    <FormHelperText>
      Selectionne un ou plusieurs produits liés à ton article
    </FormHelperText>
  </FormControl>
  )
}

export default RadioProduct;