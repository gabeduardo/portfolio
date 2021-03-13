import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Banner, TextWrapper, MoreText } from "../styles/IndexStyles"

const SectionTwo = styled.section`
  background-color: #21b2a6;
  text-align: center;
  padding: 10rem 0;
  div {
    width: 66%;
    margin: 0 auto;
  }
  h2 {
    font-size: 3rem;
    padding: 1.35em 0;
    color: #ffffff;
    border-bottom: 2px solid #1d9c91;
    text-transform: uppercase;
    letter-spacing: 0.6rem;
    margin: 0;
  }
  p {
    text-transform: uppercase;
    color: #c8ece9;
    text-align: center;
    letter-spacing: 0.225em;
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.4rem;
    line-height: 2rem;

    color: #ffffff;
    border-bottom: 2px solid #1d9c91;
    font-weight: 800;
    letter-spacing: 0.225em;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    margin-bottom: 5rem;
  }
`

export default () => (
  <>
    <section style={{ position: "relative" }}>
      <Banner />
      <TextWrapper>
        <div>
          <h2>Gabriel M C </h2>

          <Link to="/works">Contact</Link>
        </div>
      </TextWrapper>
      <MoreText>Learn More</MoreText>
    </section>
    <SectionTwo>
      <div>
        <h2>My Passion</h2>
        <p>
          I like to code speacilly using Python and Javascript, but im open to
          learn new technologies and improve my skills in the existing ones,
          because of that, im always reading ebooks related to the technologies
          and languages that I master. Currently I'm focused on creating blazing
          fast websites with the JAMSTACK technology .
        </p>
      </div>
    </SectionTwo>
  </>
)
