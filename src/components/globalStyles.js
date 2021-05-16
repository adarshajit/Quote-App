import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-size: 50px;
  font-weight: 600;
  font-family: "Goblin One", cursive;

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
  @media screen and (max-width: 300px) {
    font-size: 18px;
  }
`;

export const P = styled.p`
  font-size: 32px;
  margin-top: 2px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }

  @media screen and (max-width: 400px) {
    font-size: 15px;
  }

  @media screen and (max-width: 300px) {
    font-size: 13px;
  }
`;
