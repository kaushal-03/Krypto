import { VStack,Image,Heading,Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";

  function Newcard(props) {
    let currencysym = props.cur==="inr"?"₹":props.cur==="usd"?"$":"€";
    return (
      <Link to={`/coin/${props.id}`} target={"blank"}>
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={props.img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          
        />
        <Heading size={"md"} noOfLines={1}>
          {props.symbol}
        </Heading>
  
        <Text noOfLines={1}>{props.name}</Text>
        <Text noOfLines={1}>{currencysym}{props.price}</Text>
      </VStack>
    </Link>
  );
      }
  
  export default Newcard;
  