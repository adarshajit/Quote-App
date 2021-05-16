import React from "react";
import { CardContainer, CardWrapper, Card, Img } from "./homeElements";
import { H1, Container, Wrapper, P } from "../globalStyles";

import Read from "../../Assets/read.svg";
import Create from "../../Assets/create.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <H1>Welcome to Quotify!</H1>
          <P>Imagination is put into words. be creative.</P>
          <CardContainer>
            <CardWrapper>
              <Link to="/read">
                <Card>
                  <Img src={Read} />
                </Card>
              </Link>
              <Link to="/create">
                <Card>
                  <Img src={Create} />
                </Card>
              </Link>
            </CardWrapper>
          </CardContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default HomePage;
