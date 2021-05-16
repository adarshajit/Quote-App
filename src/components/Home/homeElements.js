import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 60px 0 0 0;

  @media screen and (max-width: 767px) {
    margin: 30px 0 0 0;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

export const Card = styled.div`
  width: 300px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 400px) {
    width: 250px;
    height: 150px;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.3s all ease-in-out;
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 300px;
  height: 200px;

  @media screen and (max-width: 400px) {
    width: 250px;
    height: 150px;
  }
`;
