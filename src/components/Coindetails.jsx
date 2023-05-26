import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { server } from "../index";
import { useParams } from "react-router-dom";
import "../coindetails.css";
import {Stat,StatArrow,StatLabel,StatGroup,StatNumber, StatUpArrow,StatHelpText,StatDownArrow} from "@chakra-ui/stat";
import { Badge, VStack,Progress, HStack, Box } from '@chakra-ui/react';
import { Text } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import Chart from "./Chart";
const Coindetails = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();
  const [days,setDays]=useState("24h");
  const[chartArray,setChartArray]=useState([]);
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const {data:chartData} = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${"inr"}&days=${days}`);
        setCoin(data);
        setChartArray(chartData.prices);
      } catch (error) {
        // Handle error
      }
    };

    fetchCoin();
  }, [params.id]);

  return (
    <div id="main_div">
      <Chart array={chartArray} day={days}/>
       <Image
              src={coin.image&&coin.image.large}
              w={"16"}
              h={"16"}
              objectFit={"contain"}
            />
      <Stat>
        <StatLabel>{coin.name}</StatLabel>
        <StatNumber>{coin.market_data && <p>{coin.market_data.current_price["inr"]}</p>}</StatNumber>
        <StatHelpText><StatArrow type={coin.market_data&&coin.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease"}/>{coin.market_data&&coin.market_data.price_change_percentage_24h}</StatHelpText>

      </Stat>
      <Badge fpntSize={"2xl"} bgColor={"blackAlpha.800"} color={"white"}>{`#${coin.market_cap_rank}`}</Badge>
      <CustomBar
              high={coin.market_data&&coin.market_data.high_24h["inr"]}
              low={coin.market_data&&coin.market_data.low_24h["inr"]}/>
      <Box>
      <Item title={"Max Supply"} value={coin.market_data&&coin.market_data.max_supply} />
              <Item
                title={"Circulating Supply"}
                value={coin.market_data&&coin.market_data.circulating_supply}
              />
              <Item
                title={"Market Cap"}
                value={coin.market_data&&`${coin.market_data.market_cap["inr"]}`}
              />
              <Item
                title={"All Time Low"}
                value={coin.market_data&&`${coin.market_data.atl["inr"]}`}
              />
              <Item
                title={"All Time High"}
                value={coin.market_data&&`${coin.market_data.ath["inr"]}`}
              />
      </Box>
    </div>
  );
};
const CustomBar = ({high,low}) =>
(
    <VStack>
      <Progress value={50} colorScheme={"teal"} w={"full"}></Progress>
      <HStack justifyContent={ "space-between"}w={"full"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"} />
      </HStack>
    </VStack>
)

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);
export default Coindetails;
