import { Box, Text } from "@chakra-ui/react";
import AddButton from "../Header/NavBar/AddButton";

const HeroBox = () => {
  return (
    <Box
      backgroundColor={[
        "rgba(255, 255, 255, 1)",
        "rgba(255, 255, 255, 1)",
        "rgba(255, 255, 255, .8)",
      ]}
      w={["100%", "100%", "300px", "400px"]}
      p="5"
      color="black"
      borderRadius={["none", "none", "md"]}
      display="flex"
      flexDirection="column"
      alignItems="center"
      position={["static", "static", "absolute"]}
      bottom="25%"
      left="20%"
      boxShadow="2xl"
    >
      <Text mb="6" fontWeight="600" fontSize="20">
        Vous souhaitez vendre <br /> facilement votre <br /> équipement ?
      </Text>
      <AddButton />
    </Box>
  );
};

export default HeroBox;
