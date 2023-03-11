import { Box, Image, Badge, Center, Container } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import react from "react";
function Coincar(props) {
  const property = {

    title: props.sym,
    img:props.img
  };

  return (
    <Flex direction="column" w={200}>
        
        <Center>
            <Image align='center' src={property.img} alt={property.imageAlt} />
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
        
      </Box>
    </Flex>
  );
}

export default Coincar;
