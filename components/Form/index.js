import { useState, useEffect } from "react";
import { FormControl, Box, Button, FormLabel } from "@chakra-ui/react";

import Preview from "./preview";
import FieldText from "./Fields";
import FieldPrice from "./Fields/FieldPrice";
import RadioCategorie from "./Fields/RadioCategorie";
import RadioProduct from "./Fields/RadioProduct";
import TextDescription from "./Fields/TextDescription";

const Formulaire = () => {
  const [img, setImg] = useState([]);
  const [imgURL, setImgURL] = useState([]);
  const [isUpload, setIsUpload] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [categories, setCategories] = useState("");
  const [product, setProduct] = useState("");

  useEffect(() => {
    // Si le contenus du tableau img est inférieur a 1, je return
    if (img.length < 1) return;
    // Je créer un nouveau tableau
    const newImgURL = [];
    console.log(newImgURL);
    // Je parcours le tablaau [img], pour chaque image contenus dans [img] j'insere dans le tableau [newImgURL] un chaine de caractère unique de type URL correspondant à l'image uploader'
    img.forEach((image) => newImgURL.push(URL.createObjectURL(image)));
    // Je set mon tableau [imgURl] avec le tableau précédement mis à jour
    setImgURL(newImgURL);
  }, [img]);

  const onImgChange = (e) => {
    setImg([...e.target.files]);
    setIsUpload(true);
  };

  return (
    <form action="post" display="flex" flexDirection="column" px="15%" my="8">
      <Box display="flex" flexDirection="column" px="15%" my="8">
        <FormControl w="100%" py="4">

          {/* Adresse email */}
          <FieldText
            label={"Votre adresse email"}
            id={"email"}
            type={"email"}
            placeholder={"robin@hood.com"}
            maxLength={100}
          />

          {/* Nom de l'article */}
          <FieldText
            label={"Nom de l'article"}
            id={"article-name"}
            type={"text"}
            setter={(e) => setName(e.target.value)}
            placeholder={"Branche 66 pouces"}
            maxLength={25}
          />

          {/* Marque de l'article */}
          <FieldText
            label={"Marque"}
            id={"article-brand"}
            type={"text"}
            setter={(e) => setBrand(e.target.value)}
            placeholder={"Hoyt"}
            maxLength={30}
          />
          {/* Btn Radio Catégories */}
          <RadioCategorie setCategories={setCategories} />

          {/* Btn Radio Produits */}
          <RadioProduct setProduct={setProduct} />

          {/* Prix de l'article */}
          <FieldPrice
            label={"Prix"}
            placeholder={"55€"}
            type={"number"}
            setter={(e) => setPrice(e.target.value)}
          />

          {/* Description du Produit */}
          <TextDescription />

          {/* Photo du produit */}
          <FormControl mb="8" isRequired>
            <FormLabel>Photo du produit</FormLabel>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={onImgChange}
              style={{ width: "100%" }}
            />
          </FormControl>

          {/* Submit Button */}
          <Box display="flex" justifyContent="center">
            <Button display="flex" type="submit" bg="blue.100" color="blue.500">
              Soumettre
            </Button>
          </Box>
        </FormControl>

        <Box display="flex" flexDirection="column" alignItems="center">
          {/* Card Preview */}
          <Preview
            isUpload={isUpload}
            article={name}
            price={price}
            brand={brand}
            image={imgURL}
            categories={categories}
          />
        </Box>
      </Box>
    </form>
  );
};

export default Formulaire;
