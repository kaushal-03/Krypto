import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Button, ButtonGroup, Stack, Container } from "@chakra-ui/react";
import { GrLogin } from "react-icons/gr";
import { GoSignIn } from "react-icons/go";
import Login from "./components/Login";
import Signup from "./components/Signup";
export const Reroute = () => {
    
  const [variable, setvar] = useState(true);
  return (
    
    <Container >
        <Stack direction="row" spacing={4} justifyContent={"center"} p={"4"} w={"full"}>
        <Button
          leftIcon={<GrLogin />}
          colorScheme="blue"
          variant="outline"
          onClick={() => {
            setvar(true);
          }}
        >
          Login
        </Button>
        <Button
          rightIcon={<GoSignIn />}
          colorScheme="blue"
          variant="outline"
          onClick={() => {
            setvar(false);
          }}
        >
          Signin
        </Button>
      </Stack>
      
      <div>{variable ? <Login /> : <Signup />}</div>
    </Container>
  );
};
