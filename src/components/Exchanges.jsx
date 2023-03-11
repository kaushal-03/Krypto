import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import Loader from "./Loader";
import Card from "./Card";
import Newcard from "./Newcard";
import { Container, HStack, Wrap, WrapItem } from "@chakra-ui/react";
const Exchanges = () => {
  const [edata, setedata] = useState([]);
  const [loading, setload] = useState(true);
  useEffect(() => {
    const getexchanges = async () => {
      const { data } = await axios.get(`${server}/exchanges?per_page=250`);
      setedata(data);
      setload(false);
    };
    getexchanges();
  }, []);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <Wrap>
          {edata.map((i) => (
            <WrapItem>
              <Newcard
                name={i.name}
                img={i.image}
                year={i.year_established}
                trust={i.trust_score}
                key={i.id}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </Container>
  );
};

export default Exchanges;
