import styled from "styled-components";

export const InfoSectionContainer = styled.div`
  position: relative;
  top: 20%;
  padding: 12px;
  width: 80%;
  @media screen and (max-width: 768px) {
    width: 96%;
  }
`;

export const InfoSectionH1 = styled.h1`
  font-size: 2.2rem;

  @media screen and(max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const InfoSectionDescription = styled.p`
  letter-spacing: 2px;
  color: gray;
`;
