import styled from "styled-components";

export const QuoteCard = styled.div`
  margin-top: 40px;
  width: 1000px;
  height: 300px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 767px) {
    width: 350px;
    max-height: 600px;
  }
`;

export const QuoteText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 1000px;
  height: 300px;

  @media screen and (max-width: 767px) {
    width: 350px;
    max-height: 600px;
  }
`;

export const P1 = styled.p`
  font-size: 27px;
  display: inline-block;
  margin: 10px 25px 0 35px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin: 50px 0 0 0;
    width: 300px;
    word-wrap: break-word;
  }
`;

export const P2 = styled.p`
  margin: 50px 0 0 0;
  font-size: 20px;
  font-weight: 600;

  @media screen and (max-width: 767px) {
    top: 270px;
    right: 105px;
    text-align: center;
  }
`;

export const Button = styled.button`
  margin: 40px 0 0 0;
  width: 150px;
  height: 60px;
  text-decoration: none;
  border-style: none;
  background-color: #ffc93c;
  color: #000;
  font-size: 15px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  }
`;
