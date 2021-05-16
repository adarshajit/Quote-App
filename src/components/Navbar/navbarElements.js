import styled from "styled-components";

export const Img = styled.img`
  margin: 20px 0 0 5px;
  width: 100px;
  height: 40px;
  transform: rotate(180deg);

  &:hover {
    transform: rotate(180deg) scale(1.1);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 30px;
  }
`;
