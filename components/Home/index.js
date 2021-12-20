import { Box, Image, Text } from "@chakra-ui/react";
import AddButton from "../Header/NavBar/AddButton";
import HeroBanner from "./HeroBanner";
import HeroBox from "./HeroBox";


const Home = () => {
  return (
    <Box position="relative">
      <HeroBanner />
      <HeroBox />
    </Box>
  );
};

export default Home;
