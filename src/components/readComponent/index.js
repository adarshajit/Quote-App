import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Container, Wrapper } from "../globalStyles";
import { QuoteCard, QuoteText, P1, P2, Button } from "./readElements";

const Read = () => {
  const [quoteInfo, setQuoteInfo] = useState({
    quoteData: "",
    authorData: "",
  });

  useEffect(() => {
    const apiUrl = "https://api.quotable.io/random";
    fetch(apiUrl)
      .then(function (response) {
        response.json().then(function (data) {
          setQuoteInfo({
            quoteData: data.content,
            authorData: data.author,
          });
        });
      })
      .catch(function (error) {
        console.log("Fetch Error:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <QuoteCard>
            <QuoteText>
              <P1>{quoteInfo.quoteData}</P1>
              <P2>{quoteInfo.authorData}</P2>
            </QuoteText>
          </QuoteCard>
          <Button
            onClick={() => {
              window.location.reload();
            }}
          >
            New Quote 🚀
          </Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default Read;
