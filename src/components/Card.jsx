import { Box, Image, Badge, Center, Container } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import react from "react";
function Card(props) {
  const property = {
    imageUrl: props.image,
    title: props.name,
    score: props.trust,
    establishedyear: props.year,
  };

  return (
    <Flex direction="column" w={200}>
        
            <Center>
            <Image align='center' src={property.imageUrl} alt={property.imageAlt} />
            </Center>
      

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          <Center>
            {property.title} 
            </Center>
        </Box>
        <Box><Center>year:{property.year}</Center></Box>
        <Box><Center>TrustScore:{property.score}</Center></Box>
      </Box>
    </Flex>
  );
}

export default Card;
