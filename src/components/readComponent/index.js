import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Container, Wrapper } from "../globalStyles";
import { QuoteCard, QuoteText, P1, P2, Button } from "./readElements";
import { TwitterShareButton, TwitterIcon } from "react-share";

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

  let url = "quotify-app.netlify.app/";
  const hashtags = ["motivation", "inspired"];
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
          <TwitterShareButton
            title={`${quoteInfo.quoteData} \n -- ✏️ ${quoteInfo.authorData}`}
            url={`\n 📚 Shared from : ${url}`}
            hashtags={hashtags}
            appId={20962375}
          >
            <TwitterIcon size={40} round={true} style={{ marginTop: "20px" }} />
          </TwitterShareButton>
        </Container>
      </Wrapper>
    </>
  );
};

export default Read;
