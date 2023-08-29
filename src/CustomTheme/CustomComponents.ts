import { colorresCSS } from "./variables";
import { styled } from "styled-components";

export const Wrapper = styled.div<{ $urlImgRef?: string }>`
  height: 40vh;
  background-image: ${(props) => `url(${props.$urlImgRef})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  row-gap: 1rem;
  padding: 1rem;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 20;
  }
  & > h2 {
    position: relative;
    z-index: 1000;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 1.8rem;
    color: ${colorresCSS.gray.gray_three};
  }
  & > Button {
    position: relative;
    z-index: 1000;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
`;
