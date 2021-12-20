import { Box, Image, Text } from "@chakra-ui/react";
import AddButton from "../Header/NavBar/AddButton";

const Home = () => {
  return (
    <Box 
        position="relative"
    
    >
      <Image
        src={
          "https://images.pexels.com/photos/6540741/pexels-photo-6540741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
        alt="bow"
        h={["50%", "50%", "500px", "500px"]}
        w="100%"
        objectFit="cover"
      />
      <Box
        backgroundColor={["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, .8)"]}
        w={["100%", "100%", "300px", "400px"]}
        p="5"
        color="black"
        borderRadius={["none", "none", "lg"]}
        display="flex"
        flexDirection="column"
        alignItems="center"
        position={["static", "static", "absolute"]}
        bottom="30%"
        left="20%"
        boxShadow="2xl"
      >
        <Text 
          mb="6"
          fontWeight="600"
          fontSize="20"
        >
          Vous souhaitez vendre <br /> facilement votre <br /> équipement ?
        </Text>
        <AddButton />
      </Box>
    </Box>
  );
};

export default Home;
