import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import App from "../App";
import { auth } from "../Auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import { Link, Router } from "react-router-dom";
function Login() {
 
  const [loginEmail,setloginEmail]=useState("");
  const [loginpassword,setloginpassword]=useState("");
  const [checklog,setlogin]=useState(false);
  const login = async () => 
  {
    try
    {
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginpassword);
      console.log(user);
      setlogin(true); 
        
    }
    catch(error)
    {
        console.log("ERROR 404!!");
        setlogin(false);
    }
  }
  return (
    <>
    <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Krypto!! The future of money.✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email"  onChange={(event)=>{setloginEmail(event.target.value)}}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"  onChange={(event)=>{setloginpassword(event.target.value)}}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button
               onClick={login}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );
}
export default Login;
