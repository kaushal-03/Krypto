import { VStack, Image, Heading, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Newcard(props) {
  let currencysym = props.cur === "inr" ? "₹" : props.cur === "usd" ? "$" : "€";
  return (
    <Link to={`/coin/${props.id}`} target={"blank"}>
      <Box
        w={"20%"}
        minW={"200px"} // Set a minimum width for each card
        p={"10"}
        m={"2"} // Adjust margin for spacing between cards
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <VStack
          w={"100%"}
          shadow={"lg"}
          p={"4"}
          borderRadius={"lg"}
          transition={"all 0.3s"}
        >
          <Image src={props.img} w={"20"} h={"20"} objectFit={"contain"} />
          <Heading size={"md"} noOfLines={1}>
            {props.symbol}
          </Heading>
          <Text noOfLines={1}>{props.name}</Text>
          <Text noOfLines={1}>
            {currencysym}
            {props.price}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
}

export default Newcard;
