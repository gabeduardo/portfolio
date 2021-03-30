import React from "react"
import styled from "styled-components"
import { GenereicPara } from "../styles/IndexStyles"

// storiesOf("Generic Paragraph", module).add("standard", () => <GenereicPara />)
// parameters that only applies for this component
export default {
  title: "Generic Paragraph Stack section",
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

export const GenericPara = () => (
  <SectionThree>
    <div className="header__section4">
      <h2 className="title__section4"> Stack</h2>
      <GenereicPara lessSize grey>
        We use modern and latest technologies which helps our clients
        <br />
        as they are highly scalable and maintainable.
      </GenereicPara>
    </div>
  </SectionThree>
)

// export const GenericH2None = () => <GenericH2 dark>React</GenericH2>
