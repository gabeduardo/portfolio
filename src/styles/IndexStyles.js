import styled from "styled-components"

const Banner = styled.div`
  &:after {
    content: "";
    display: block;
    height: 100vh;
    width: 100%;
    background-image: url("portada.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: grayscale(30%);
  }
`

const TextWrapper = styled.div`
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
    font-size: 4rem;
    opacity: 1;
    padding: 0.35em 0.35em;
    border-top: 2px solid rgb(34, 209, 200);
    border-bottom: 2px solid rgb(34, 209, 200);
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 45%;
    color: #ffffff;
    background-color: #f27b6a;
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
    background-color: #ed4933;
    box-shadow: none;
    color: #ffffff;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.225em;
    padding: 1.8rem 0.8rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }
`
const MoreText = styled.div`
  position: absolute;
  color: #ed4933;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.225em;
  font-weight: 600;
  font-size: 1.2rem;
  z-index: 1;
  left: 50%;
  bottom: 6%;
  transform: translate(-50%, -50%);
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
`
const GenericH2 = styled.h2`
  font-size: 1rem;
  padding: ${props => (props.none ? "0" : "1.35em 0")};
  color: ${props => (props.dark ? "#4E4852" : "#ffffff")};
  border-bottom: ${props => (props.none ? "0" : "2px solid #1d9c91")};
  text-transform: uppercase;
  @media (max-width: 360px) {
    margin-left: 15%;
  }

  margin: ${props => (props.some ? "5rem 0 0 0" : "0")};
`
export { Banner, TextWrapper, MoreText, GenereicPara, GenericH2 }
