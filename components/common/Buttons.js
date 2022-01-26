import { Button } from "@chakra-ui/react";
import Link from "next/link"

const Buttons = ({ link, linkAlt, buttonText, color, colorScheme }) => {
  return (
    <Link href={link} alt={linkAlt} passHref>
    <Button
      color={color}
      colorScheme={colorScheme}
      variant="solid"
      w={["100%", "100%", "100%", "100%"]}
      boxShadow="xl"
    >
      {buttonText}
    </Button>
  </Link>
  )
}

export default Buttons;