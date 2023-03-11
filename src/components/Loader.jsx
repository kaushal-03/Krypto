import react from "react";
import { Center, Container, Spinner, VStack,Box } from "@chakra-ui/react";
function Loader()
{
       <VStack h="90vh" justifyContent={"center"}> 
      <Box transform={"scale(3)"}>
        <Spinner size={"xl"}/>
      </Box>
     </VStack>
      
}

export default Loader;