import React from "react"
import styled from "styled-components"
import { GenereicPara } from "../styles/IndexStyles"

export default {
  title: "Example Stack Paragraph",
  component: GenereicPara,
  parameters: {
    backgrounds: {
      default: "stack",
      values: [
        {
          name: "twitter",
          value: "#00aced",
        },
        {
          name: "facebook",
          value: "#3b5998",
        },
        {
          name: "stack",
          value: "#505393",
        },
      ],
    },
  },
}

const SectionThree = styled.section`
  color: #ffffff;
  text-align: center;
  .header__section4 {
    width: 66%;
    margin: 0 auto;
  }
  .title__section4 {
    font-family: "source-serif-var";

    font-size: 40px;

    padding: 1.35em 0;
    color: #ffffff;
    border-bottom: 2px solid #1d9c91;
    text-transform: uppercase;
    letter-spacing: 0.6rem;
    margin: 0;
  }
`
export const DefaultP = () => (
  <SectionThree>
    <div className="header__section4">
      <h2 className="title__section4"> Stack</h2>
      <GenereicPara lessSize grey>
        CURRENTLY I'M FOCUSING IN MODERN TECHNOLOGIES & THE IMPLEMENTATION OF
        THE JAMSTACK FOR THE FRONT I LIKE TO USE ES6 ALONG REAT AND FOR THE BACK
        PRIMARILY NODE.JS AND PYTHON.
      </GenereicPara>
    </div>
  </SectionThree>
)
