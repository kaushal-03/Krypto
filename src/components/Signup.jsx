import {Flex,Box,FormControl,FormLabel,Input,InputGroup,HStack,InputRightElement,Stack,Button,Heading,Text,useColorModeValue,Link,} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase-config";
import { collection, getDocs,addDoc } from "firebase/firestore";
import { auth } from "../Auth";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Signup() {
  
  const collectionref = collection(db, "profile details");
  const [showPassword, setShowPassword] = useState(false);
  const [registerEmail,setregisterEmail]=useState("");
  const [registerpassword,setregisterpassword]=useState("");
  const [phone,setphonenum]=useState(0);
  const [users , setusers] = useState([]);
  const [registername,setregistername]=useState("");
  const email = registerEmail;
  const navigate = useNavigate();
 const register = async () => 
  {
    try
    {
      const user = await createUserWithEmailAndPassword(auth,registerEmail,registerpassword);
      await addDoc(collectionref,{name:registername,email:registerEmail});
      navigate("/login")
    }
    catch(error)
    {
        console.log("ERROR 404!!")
    }
  }
  return (
    <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Create Account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}></Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" onChange={(event)=>{setregistername(event.target.value)}}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(event)=>{setregisterEmail(event.target.value)}} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"}onChange={(event)=>{setregisterpassword(event.target.value)}} />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
               onClick={register}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
export default Signup;

