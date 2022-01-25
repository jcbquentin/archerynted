import Copy from "../common/copy";
import { Box, Heading} from "@chakra-ui/react";

const Preview = ({ article, price, image, isUpload, brand, categories, ...props }) => {
  return isUpload ? (
    <>
      <Heading mb="8">Preview</Heading>
      <Copy article={article} price={price} image={image} brand={brand} categories={categories}  />
    </>
  ) : (
    <></>
  );
};

export default Preview;
