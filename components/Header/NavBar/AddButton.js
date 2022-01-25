import { Button } from "@chakra-ui/react";
import Link from "next/link"

const AddButton = () => {
  return (
    // TODO ajouter lien vers le formulaire de dépot d'annonce à vendre
    // Bouton rédirigeant vers le formulaire d'ajout d'un produit à vendre
    <Link href="/deposer-une-annonce">
      <Button
        color="blue.500"
        bg="blue.100"
        variant="solid"
        w={["100%", "100%", "50%", "50%"]}
        boxShadow="xl"
      >
        Vendre
      </Button>
    </Link>
  );
};

export default AddButton;
