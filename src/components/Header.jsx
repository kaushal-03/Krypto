import React from 'react'
import { Button,Container,Flex,HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaHome} from 'react-icons/fa';
import {FcCurrencyExchange} from 'react-icons/fc';
import {SiBitcoinsv} from 'react-icons/si';

const Header = () => {
  return (
    <Container p={4}  mb="10" maxW='10xl' shadow={"base"} borderRadius={10} bg="gray.100">
      <Flex direction="row" justify="space-evenly">
     <Button leftIcon={<FaHome />} colorScheme='facebook' variant='solid'><Link to="/">Home</Link></Button>
     <Button leftIcon={<FcCurrencyExchange />} colorScheme='facebook' variant='solid'><Link to="/exchanges">Exchanges</Link></Button>
     <Button leftIcon={<SiBitcoinsv />} colorScheme='facebook' variant='solid'><Link to="/coin">Coins</Link></Button>
     </Flex>
   
  </Container>
  )
}

export default Header