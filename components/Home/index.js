import { Box } from "@chakra-ui/react";
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
