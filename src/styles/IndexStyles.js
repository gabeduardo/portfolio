import styled from "styled-components"
import Estedad from "../../static/Estedad[wght,kshd].ttf"

const TextWrapper = styled.div`
  @font-face {
    font-family: "source-serif-var";
    src: url(${Estedad}) format("truetype");
    font-weight: 100 800;
    font-display: swap;
  }
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h2 {
    font-family: "source-serif-var";
    opacity: 1;
    padding: 0.35em 0.35em;
    border-top: 2px solid #07f3b0;
    border-bottom: 2px solid #07f3b0;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 45%;
    color: #ffffff;
    background-color: #221f87;
    font-size: 30px;
    font-variation-settings: "kshd" 100;
    font-weight: 605;
    line-height: 0.8;
    text-align: center;
  }
  p {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.225em;
    font-size: 2.5rem;
    background-color: rgba(255, 235, 205, 0.479);
    color: black;
  }
  a {
    font-family: "source-serif-var";
    background-color: #221f87;
    box-shadow: none;
    color: #ffffff;
    border-radius: 3px;
    border: 0;
    cursor: pointer;

    letter-spacing: 0.225em;
    padding: 1.8rem 0.8rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 0;
    letter-spacing: -0.045em;
    font-size: 1.1rem;
    font-weight: 900;
    font-variation-settings: "kshd" 142.6;
  }
`
const MoreText = styled.div`
  position: absolute;
  color: #221f87;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.225em;
  font-weight: 600;
  font-size: 1.2rem;
  z-index: 1;
  left: 50%;
  bottom: 6%;
  transform: translate(-50%, -50%);
  @font-face {
    font-family: "source-serif-var";
    src: url(${Estedad}) format("truetype");
    font-weight: 100 800;
    font-display: swap;
  }
  font-family: "source-serif-var";
  font-size: 1.4rem;
  font-weight: 900;
  font-variation-settings: "kshd" 200;
  font-style: normal;
  line-height: 1.1;
  &:after {
    content: "";
    display: block;
    height: 2rem;
    width: 2rem;
    left: 50%;
    position: absolute;
    margin: 1em 0 0 -0.75em;
    background-image: url("arrow.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const GenereicPara = styled.p`
  text-transform: uppercase;
  text-align: center;
  letter-spacing: ${props => (props.lessSpacing ? "0.075em" : "0.225em")};
  font-size: ${props => (props.lessSize ? "1rem" : "2.5rem")};
  line-height: ${props => (props.lessSize ? "2rem" : "3rem")};
  color: ${props => (props.grey ? "#c8ece9" : "#ffffff")};
  @font-face {
    font-family: "source-serif-var";
    src: url(${Estedad}) format("truetype");
    font-weight: 100 800;
    font-display: swap;
  }
  font-family: "source-serif-var";

  line-height: 1.4rem;
  font-size: 0.9rem;
  letter-spacing: 0.056em;
  font-weight: 900;
  @media (max-width: 370px) {
    font-size: 0.7rem;
  }
`
const GenericH2 = styled.h2`
  padding: ${props => (props.none ? "0" : "1.35em 0")};
  color: ${props => (props.dark ? "#4E4852" : "#ffffff")};
  border-bottom: ${props => (props.none ? "0" : "2px solid #1d9c91")};
  text-transform: uppercase;
  @font-face {
    font-family: "source-serif-var";
    src: url(${Estedad}) format("truetype");
    font-weight: 100 800;
    font-display: swap;
  }
  font-family: "source-serif-var";

  font-size: ${props => (props.none ? "0.6rem" : "1.4rem")};

  margin: ${props => (props.some ? "5rem 0 0 0" : "0")};
  @media (max-width: 370px) {
    margin-left: 15%;

    font-size: ${props => (props.none ? "0.5rem" : "1rem")};
    letter-spacing: 0.069em;
  }
`

export { TextWrapper, MoreText, GenereicPara, GenericH2 }
