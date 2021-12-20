import { Image } from "@chakra-ui/react";

const HeroBanner = () => {
  return (
    <Image
      src={
        "https://images.pexels.com/photos/6540741/pexels-photo-6540741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      }
      alt="bow"
      h={["50%", "50%", "400px", "400px"]}
      w="100%"
      objectFit="cover"
    />
  );
};

export default HeroBanner;
